var marked = require('marked');
var fs = require('fs');

var readMe = fs.readFileSync('index.md', 'utf-8');
var markdownReadMe = marked(readMe);

fs.writeFileSync('README.html', markdownReadMe);