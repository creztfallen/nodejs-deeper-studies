const fs = require('fs');
// let data = ''

// Readable Stream Creation
let readerStream = fs.createReadStream('input.txt');

// Set the encoding to be utf-8
readerStream.setEncoding('utf-8');

// Handling stream events (data, end, and error)
// readerStream.on('data', function(chunk) {
//     data += chunk;
// })

// readerStream.on('end', function() {
//     console.log(data);
// })

// readerStream.on('error', function(err) {
//     console.log(err.stack);
// })

// console.log("Program Ended.")

// WRITING TO A STREAM

let data = 'Thorin Oakenshild';

// Creating a writable stream
let writerStream = fs.createWriteStream('output.txt');

writerStream.write(data, 'utf-8');

// Mark the end of the file
writerStream.end();

// Handling stream events (finish, and error)
writerStream.on('finish', function () {
  console.log('Write completed');
});

writerStream.on('error', function (err) {
  console.log(err.stack);
});

console.log('Program Ended.');

// PIPING STREAMS

// Create a readable stream
readerStream = fs.createReadStream('input.txt');

// Create a writable stream
writerStream = fs.createWriteStream('output.txt');

// Pipe the read and write operations
// read input.txt and write data to output.txt
readerStream.pipe(writerStream);

console.log('Program Ended');


