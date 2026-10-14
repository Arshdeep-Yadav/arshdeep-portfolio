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

// 2. Minify JS helper
function minifyJS(js) {
  const lines = js.split('\n');
  const cleaned = [];
  let inMulti = false;

  for (let line of lines) {
    let s = line.trim();
    if (inMulti) {
      if (s.includes('*/')) {
        inMulti = false;
        s = s.split('*/')[1].trim();
      } else {
        continue;
      }
    }
    if (s.includes('/*') && !inMulti) {
      if (s.includes('*/')) {
        s = s.replace(/\/\*[\s\S]*?\*\//g, '').trim();
      } else {
        inMulti = true;
        s = s.split('/*')[0].trim();
      }
    }
    if (s.startsWith('//') || !s) continue;
    cleaned.push(s);
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

// Update index.html to ensure clean link to styles.min.css
let html = fs.readFileSync('index.html', 'utf8');

// Remove brittle inline critical-css block to let styles.min.css render cleanly and deterministically
const critRegex = /<style id="critical-css">[\s\S]*?<\/style>\s*/;
if (critRegex.test(html)) {
  html = html.replace(critRegex, '');
}

// Ensure clean link rel="stylesheet"
html = html.replace(
  /(<link rel="preload" href="styles\.min\.css[^"]*" as="style"[^>]*>\s*(<noscript><link rel="stylesheet"[^>]*><\/noscript>)?|<link rel="stylesheet" href="styles\.min\.css[^"]*">)/,
  '<link rel="stylesheet" href="styles.min.css?v=3.7">'
);

// Ensure clean app.min.js version query
html = html.replace(/app\.min\.js\?v=[0-9\.]+/, 'app.min.js?v=3.7');

fs.writeFileSync('index.html', html, 'utf8');

// Measure and report
console.log('\n=== BUILD REPORT & PACKET BUDGET ===');
['index.html', 'styles.min.css', 'app.min.js'].forEach(f => {
  const buf = fs.readFileSync(f);
  const gz = zlib.gzipSync(buf, { level: 9 });
  const br = zlib.brotliCompressSync(buf);
  const packets = (gz.length / 1460).toFixed(1);
  console.log(
    `${f.padEnd(16)} Raw: ${(buf.length / 1024).toFixed(1)} KB | Gzip: ${(gz.length / 1024).toFixed(1)} KB (${packets} TCP packets) | Brotli: ${(br.length / 1024).toFixed(1)} KB`
  );
});
console.log('✔ Build completed successfully.\n');
