const zlib = require('zlib');
const fs = require('fs')

// decompressing
fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('input.txt'));

console.log('File Decompressed');