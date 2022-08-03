const zlib = require('zlib');
const fs = require('fs')

// compressing
fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz'));

console.log('File Compressed.');
