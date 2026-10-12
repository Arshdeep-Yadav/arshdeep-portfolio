use std::env;
use std::fs;
use std::io::{Read, Write};
use std::path::{Component, Path, PathBuf};
use std::time::{Duration, SystemTime};
use flate2::write::GzEncoder;
use flate2::Compression;
use tiny_http::{Header, Response, Server, StatusCode};

fn main() {
    let args: Vec<String> = env::args().collect();
    let port = args.get(1).and_then(|p| p.parse::<u16>().ok()).unwrap_or(8000);

    // Serve from workspace root (parent of preview-server directory if run from within, or current directory)
    let root_dir = if Path::new("index.html").exists() {
        PathBuf::from(".")
    } else if Path::new("../index.html").exists() {
        PathBuf::from("..")
    } else {
        env::current_dir().unwrap_or_else(|_| PathBuf::from("."))
    };

    let server_addr = format!("127.0.0.1:{}", port);
    let server = match Server::http(&server_addr) {
        Ok(s) => s,
        Err(e) => {
            eprintln!("[ERROR] Failed to bind to {}: {}", server_addr, e);
            std::process::exit(1);
        }
    };

    let canonical_root = root_dir.canonicalize().unwrap_or_else(|_| root_dir.clone());

    println!("============================================================");
    println!("  Arshdeep Portfolio — Rust High-Performance Preview Server");
    println!("  Address: http://localhost:{}", port);
    println!("  Serving: {}", canonical_root.display());
    println!("  Features: GZIP Compression + Far-Future Expires + HTTP/1.1");
    println!("============================================================");
    println!("Press Ctrl+C to stop.\n");

    for request in server.incoming_requests() {
        let raw_url = request.url().to_string();
        // Strip query string (e.g. ?v=2.1)
        let clean_path = raw_url.split('?').next().unwrap_or(&raw_url);
        let decoded_path = url_decode(clean_path);
        let trimmed_path = decoded_path.trim_start_matches('/').replace('\\', "/");

        let has_traversal = Path::new(&trimmed_path).components().any(|c| matches!(c, Component::ParentDir));
        let is_protected = trimmed_path.starts_with('.')
            || trimmed_path.starts_with("preview-server")
            || trimmed_path.starts_with(".git")
            || trimmed_path.starts_with(".vscode");

        let mut file_path = if trimmed_path.is_empty() || trimmed_path == "/" {
            root_dir.join("index.html")
        } else {
            root_dir.join(&trimmed_path)
        };

        if file_path.is_dir() {
            file_path = file_path.join("index.html");
        } else if !file_path.exists() && file_path.extension().is_none() {
            let html_candidate = file_path.with_extension("html");
            if html_candidate.exists() {
                file_path = html_candidate;
            }
        }

        let is_safe = !has_traversal && !is_protected && match file_path.canonicalize() {
            Ok(p) => p.starts_with(&canonical_root),
            Err(_) => false,
        };

        if !is_safe || !file_path.exists() || file_path.is_dir() {
            let not_found_path = root_dir.join("404.html");
            let not_found_bytes = fs::read(&not_found_path)
                .unwrap_or_else(|_| b"<!doctype html><html><body><h1>404 Not Found</h1></body></html>".to_vec());
            let mut response = Response::from_data(not_found_bytes).with_status_code(StatusCode(404));
            if let Ok(h) = Header::from_bytes(&b"Content-Type"[..], &b"text/html; charset=utf-8"[..]) {
                response.add_header(h);
            }
            if let Ok(h) = Header::from_bytes(&b"X-Content-Type-Options"[..], &b"nosniff"[..]) {
                response.add_header(h);
            }
            if let Ok(h) = Header::from_bytes(&b"X-Frame-Options"[..], &b"DENY"[..]) {
                response.add_header(h);
            }
            if let Ok(h) = Header::from_bytes(&b"Referrer-Policy"[..], &b"strict-origin-when-cross-origin"[..]) {
                response.add_header(h);
            }
            let _ = request.respond(response);
            continue;
        }

        let mut file_bytes = Vec::new();
        if let Ok(mut f) = fs::File::open(&file_path) {
            let _ = f.read_to_end(&mut file_bytes);
        } else {
            let _ = request.respond(Response::empty(StatusCode(500)));
            continue;
        }

        let ext = file_path.extension().and_then(|s| s.to_str()).unwrap_or("").to_lowercase();
        let content_type = match ext.as_str() {
            "html" | "htm" => "text/html; charset=utf-8",
            "css" => "text/css; charset=utf-8",
            "js" => "application/javascript; charset=utf-8",
            "json" => "application/json; charset=utf-8",
            "webmanifest" => "application/manifest+json; charset=utf-8",
            "svg" => "image/svg+xml; charset=utf-8",
            "png" => "image/png",
            "webp" => "image/webp",
            "jpg" | "jpeg" => "image/jpeg",
            "ico" => "image/x-icon",
            "woff2" => "font/woff2",
            "woff" => "font/woff",
            "ttf" => "font/ttf",
            "xml" => "application/xml; charset=utf-8",
            "txt" => "text/plain; charset=utf-8",
            "md" => "text/markdown; charset=utf-8",
            _ => "application/octet-stream",
        };

        let is_compressible = matches!(
            ext.as_str(),
            "html" | "htm" | "css" | "js" | "json" | "webmanifest" | "svg" | "xml" | "txt" | "md"
        );

        // Check client Accept-Encoding
        let accepts_gzip = request
            .headers()
            .iter()
            .any(|h| h.field.as_str().as_bytes().eq_ignore_ascii_case(b"accept-encoding") && h.value.as_str().contains("gzip"));

        let (final_bytes, is_gzipped) = if is_compressible && accepts_gzip && file_bytes.len() > 128 {
            let mut encoder = GzEncoder::new(Vec::new(), Compression::default());
            if encoder.write_all(&file_bytes).is_ok() {
                if let Ok(compressed) = encoder.finish() {
                    if compressed.len() < file_bytes.len() {
                        (compressed, true)
                    } else {
                        (file_bytes, false)
                    }
                } else {
                    (file_bytes, false)
                }
            } else {
                (file_bytes, false)
            }
        } else {
            (file_bytes, false)
        };

        let mut response = Response::from_data(final_bytes).with_status_code(StatusCode(200));

        // Content-Type
        if let Ok(h) = Header::from_bytes(&b"Content-Type"[..], content_type.as_bytes()) {
            response.add_header(h);
        }

        // GZIP compression header
        if is_gzipped {
            if let Ok(h) = Header::from_bytes(&b"Content-Encoding"[..], &b"gzip"[..]) {
                response.add_header(h);
            }
            if let Ok(h) = Header::from_bytes(&b"Vary"[..], &b"Accept-Encoding"[..]) {
                response.add_header(h);
            }
        }

        // Far-Future Expires (1 year) & Cache-Control (YSlow Grade A Compliance)
        let far_future = SystemTime::now() + Duration::from_secs(365 * 24 * 3600);
        let expires_str = format_http_date(far_future);

        match ext.as_str() {
            "css" | "js" | "woff2" | "woff" | "ttf" | "webp" | "png" | "jpg" | "jpeg" | "svg" | "ico" => {
                if let Ok(h) = Header::from_bytes(&b"Cache-Control"[..], &b"public, max-age=31536000, immutable"[..]) {
                    response.add_header(h);
                }
                if let Ok(h) = Header::from_bytes(&b"Expires"[..], expires_str.as_bytes()) {
                    response.add_header(h);
                }
            }
            "webmanifest" | "json" | "xml" | "txt" | "md" => {
                if let Ok(h) = Header::from_bytes(&b"Cache-Control"[..], &b"public, max-age=86400, stale-while-revalidate=604800"[..]) {
                    response.add_header(h);
                }
                if let Ok(h) = Header::from_bytes(&b"Expires"[..], expires_str.as_bytes()) {
                    response.add_header(h);
                }
            }
            "html" | "htm" => {
                if let Ok(h) = Header::from_bytes(&b"Cache-Control"[..], &b"public, max-age=0, must-revalidate"[..]) {
                    response.add_header(h);
                }
            }
            _ => {}
        }

        // Security Headers
        if let Ok(h) = Header::from_bytes(&b"X-Content-Type-Options"[..], &b"nosniff"[..]) {
            response.add_header(h);
        }
        if let Ok(h) = Header::from_bytes(&b"X-Frame-Options"[..], &b"DENY"[..]) {
            response.add_header(h);
        }
        if let Ok(h) = Header::from_bytes(&b"Referrer-Policy"[..], &b"strict-origin-when-cross-origin"[..]) {
            response.add_header(h);
        }

        let _ = request.respond(response);
    }
}

/// Format a SystemTime as RFC 1123 HTTP Date (e.g. "Sun, 10 Oct 2027 00:00:00 GMT")
fn format_http_date(time: SystemTime) -> String {
    let secs = time.duration_since(SystemTime::UNIX_EPOCH).unwrap_or_default().as_secs();
    let days_since_epoch = secs / 86400;
    let time_of_day = secs % 86400;
    let hours = time_of_day / 3600;
    let minutes = (time_of_day % 3600) / 60;
    let seconds = time_of_day % 60;

    // Day of week: Unix epoch was a Thursday (index 4)
    let day_of_week = match (days_since_epoch + 4) % 7 {
        0 => "Sun",
        1 => "Mon",
        2 => "Tue",
        3 => "Wed",
        4 => "Thu",
        5 => "Fri",
        _ => "Sat",
    };

    // Gregorian calendar date computation
    let mut year = 1970;
    let mut remaining_days = days_since_epoch;

    loop {
        let is_leap = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
        let days_in_year = if is_leap { 366 } else { 365 };
        if remaining_days >= days_in_year {
            remaining_days -= days_in_year;
            year += 1;
        } else {
            break;
        }
    }

    let is_leap = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
    let month_days = [
        ("Jan", 31),
        ("Feb", if is_leap { 29 } else { 28 }),
        ("Mar", 31),
        ("Apr", 30),
        ("May", 31),
        ("Jun", 30),
        ("Jul", 31),
        ("Aug", 31),
        ("Sep", 30),
        ("Oct", 31),
        ("Nov", 30),
        ("Dec", 31),
    ];

    let mut month_str = "Jan";
    let mut day = remaining_days + 1;

    for (m, days) in month_days {
        if day > days {
            day -= days;
        } else {
            month_str = m;
            break;
        }
    }

    format!("{}, {:02} {} {} {:02}:{:02}:{:02} GMT", day_of_week, day, month_str, year, hours, minutes, seconds)
}

/// Minimal URL percentage decoder (e.g. "%20" -> " ")
fn url_decode(s: &str) -> String {
    let mut result = Vec::new();
    let bytes = s.as_bytes();
    let mut i = 0;
    while i < bytes.len() {
        if bytes[i] == b'%' && i + 2 < bytes.len() {
            if let Ok(val) = u8::from_str_radix(std::str::from_utf8(&bytes[i + 1..i + 3]).unwrap_or(""), 16) {
                result.push(val);
                i += 3;
                continue;
            }
        }
        result.push(bytes[i]);
        i += 1;
    }
    String::from_utf8_lossy(&result).into_owned()
}
