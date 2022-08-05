const fs = require('fs');
const buf = new Buffer.alloc(1024);

// OPENING FIRST
fs.open('input.txt', 'r+', (err, fd) => {
  if (err) {
    console.error(err);
  }
  console.log('File opened successfully!');

  // READ METHOD SYNTAX fs.read(fd, buffer, offset, length, position, callback)

  // Parameters
  // Here is the description of the parameters used

  // fd − This is the file descriptor returned by fs.open().

  // buffer − This is the buffer that the data will be written to.

  // offset − This is the offset in the buffer to start writing at.

  // length − This is an integer specifying the number of bytes to read.

  // position − This is an integer specifying where to begin reading from in the file.
  // If position is null, data will be read from the current file position.

  // callback − This is the callback function which gets the three arguments, (err, bytesRead, buffer).

  fs.read(fd, buf, 0, buf.length, 0, (err, bytes) => {
    if (err) {
      console.error(err);
    }
    console.log(bytes + ' bytes read');

    // reading only the filled bytes (49)
    if (bytes > 0) {
      console.log(buf.slice(0, bytes).toString());
    }
  });
});
