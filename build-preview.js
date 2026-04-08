const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const readme = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8');
const html = marked.parse(readme);

const page = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ORION2809 Profile</title>
  <style>
    body {
      background: #0d1117;
      color: #e6edf3;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
      max-width: 900px;
      margin: 0 auto;
      padding: 24px;
      line-height: 1.6;
    }
    img { max-width: 100%; }
    table { border-collapse: collapse; width: 100%; }
    th, td { border: 1px solid #30363d; padding: 8px 12px; text-align: left; }
    th { background: #161b22; }
    a { color: #58a6ff; }
    h2 { border-bottom: 1px solid #21262d; padding-bottom: 8px; }
    code { background: #161b22; padding: 2px 6px; border-radius: 4px; }
    pre { background: #161b22; padding: 16px; border-radius: 8px; overflow-x: auto; }
  </style>
</head>
<body>
${html}
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, 'preview.html'), page, 'utf8');
console.log('preview.html generated');
