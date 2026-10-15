/**
 * Arshdeep Portfolio — Production Asset Optimizer & Packet Budget Builder
 * Run: node build.js
 */

const fs = require('fs');
const zlib = require('zlib');

// 1. Minify CSS helper (preserving valid spaces around + and - for calc/min/max)
function minifyCSS(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s*([\{\}\;\,])\s*/g, '$1')
    .replace(/\s*:\s*/g, ':')
    .replace(/;}/g, '}')
    .trim();
}

// 2. Minify JS helper (preserving multiline template literals and ASCII schematics)
function minifyJS(js) {
  const lines = js.split('\n');
  const cleaned = [];
  let inMulti = false;
  let inBacktick = false;

  for (let line of lines) {
    let s = line;

    if (inMulti) {
      if (s.includes('*/')) {
        inMulti = false;
        s = s.split('*/')[1];
      } else {
        continue;
      }
    }
    if (s.includes('/*') && !inMulti && !inBacktick) {
      if (s.includes('*/')) {
        s = s.replace(/\/\*[\s\S]*?\*\//g, '');
      } else {
        inMulti = true;
        s = s.split('/*')[0];
      }
    }

    const backticks = (s.match(/(?<!\\)`/g) || []).length;
    if (inBacktick) {
      if (backticks % 2 === 1) {
        inBacktick = false;
      }
      cleaned.push(s);
      continue;
    }

    if (backticks % 2 === 1) {
      inBacktick = true;
      cleaned.push(s);
      continue;
    }

    const trimmed = s.trim();
    if (trimmed.startsWith('//') || !trimmed) continue;
    cleaned.push(trimmed);
  }

  return cleaned.join('\n');
}

console.log('⚡ Building optimized production assets...');

const rawCSS = fs.readFileSync('styles.css', 'utf8');
const rawJS = fs.readFileSync('app.js', 'utf8');

// Build styles.min.css & app.min.js
const minCSS = minifyCSS(rawCSS);
const minJS = minifyJS(rawJS);

fs.writeFileSync('styles.min.css', minCSS, 'utf8');
fs.writeFileSync('app.min.js', minJS, 'utf8');

// Update all HTML files to ensure clean link to styles.min.css and app.min.js
['index.html', '404.html', 'privacy.html', 'terms.html'].forEach(filePath => {
  if (!fs.existsSync(filePath)) return;
  let doc = fs.readFileSync(filePath, 'utf8');
  if (filePath === 'index.html') {
    const critRegex = /<style id="critical-css">[\s\S]*?<\/style>\s*/;
    if (critRegex.test(doc)) {
      doc = doc.replace(critRegex, '');
    }
    doc = doc.replace(
      /(<link rel="preload" href="styles\.min\.css[^"]*" as="style"[^>]*>\s*(<noscript><link rel="stylesheet"[^>]*><\/noscript>)?|<link rel="stylesheet" href="styles\.min\.css[^"]*">)/,
      '<link rel="stylesheet" href="styles.min.css?v=4.5">'
    );
  } else {
    doc = doc.replace(/styles\.min\.css(\?v=[0-9\.]+)?/, 'styles.min.css?v=4.5');
  }
  doc = doc.replace(/app\.min\.js(\?v=[0-9\.]+)?/, 'app.min.js?v=4.5');
  fs.writeFileSync(filePath, doc, 'utf8');
});

// Measure and report
console.log('\n=== BUILD REPORT & PACKET BUDGET ===');
['index.html', 'styles.min.css', 'app.min.js', 'print.css'].forEach(f => {
  if (!fs.existsSync(f)) return;
  const buf = fs.readFileSync(f);
  const gz = zlib.gzipSync(buf, { level: 9 });
  const br = zlib.brotliCompressSync(buf);
  const packets = (gz.length / 1460).toFixed(1);
  console.log(
    `${f.padEnd(16)} Raw: ${(buf.length / 1024).toFixed(1)} KB | Gzip: ${(gz.length / 1024).toFixed(1)} KB (${packets} TCP packets) | Brotli: ${(br.length / 1024).toFixed(1)} KB`
  );
});
console.log('✔ Build completed successfully.\n');
