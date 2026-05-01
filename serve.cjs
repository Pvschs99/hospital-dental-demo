#!/usr/bin/env node
// Static file server that accepts --port <n> (matches harness invocation)
const http = require('http');
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
let port = 8080;
for (let i = 0; i < args.length; i++) {
  if ((args[i] === '--port' || args[i] === '-p') && args[i + 1]) port = parseInt(args[i + 1], 10);
}

const root = process.cwd();
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
};

http.createServer((req, res) => {
  let urlPath = decodeURIComponent(req.url.split('?')[0]);
  if (urlPath === '/') urlPath = '/index.html';
  let filePath = path.join(root, urlPath);
  if (!filePath.startsWith(root)) { res.writeHead(403); return res.end('Forbidden'); }

  fs.stat(filePath, (err, stat) => {
    if (err || !stat.isFile()) {
      // try .html fallback for clean URLs
      fs.stat(filePath + '.html', (e2, s2) => {
        if (!e2 && s2.isFile()) return send(filePath + '.html');
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>');
      });
      return;
    }
    send(filePath);
  });

  function send(fp) {
    const ext = path.extname(fp).toLowerCase();
    res.writeHead(200, { 'Content-Type': types[ext] || 'application/octet-stream' });
    fs.createReadStream(fp).pipe(res);
  }
}).listen(port, '0.0.0.0', () => {
  console.log(`Static site serving ${root} on http://0.0.0.0:${port}`);
});
