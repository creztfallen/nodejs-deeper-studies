// INSTANTIANTING BUFFER

// method 1
// var buf = new Buffer.from(10)

//  method 2
// var buf = new Buffer.from([10, 20, 30, 40, 50]);

//  method 3
// var buf = new Buffer.from("There and back again.", 'base64') // "utf8" is the default
// other encodings are: "ascii", "utf8", "utf16le", "ucs2", "base64" or "hex".

//WRITING TO BUFFERS

// syntax buf.write(string[, offset][, length][, encoding])

// Parameters
// Here is the description of the parameters used −

// string − This is the string data to be written to buffer.

// offset − This is the index of the buffer to start writing at. Default value is 0.

// length − This is the number of bytes to write. Defaults to buffer.length.

// encoding − Encoding to use. 'utf8' is the default encoding.

// const buf = new Buffer.alloc(256);
// const len = buf.write("Simply Easy Learning");

// console.log("Octets written : "+  len);

// READING FROM BUFFER

// Syntax buf.toString([encoding][, start][, end])

// Parameters
// Here is the description of the parameters used

// encoding − Encoding to use. 'utf8' is the default encoding.

// start − Beginning index to start reading, defaults to 0.

// end − End index to end reading, defaults is complete buffer.

// const buf = new Buffer.alloc(26);
// for (let i = 0; i < 26; i++) {
//   buf[i] = i + 97;
// }

// console.log(buf.toString('ascii')); // outputs: abcdefghijklmnopqrstuvwxyz
// console.log(buf.toString('ascii', 0, 5)); // outputs: abcde
// console.log(buf.toString('utf8', 0, 5)); // outputs: abcde
// console.log(buf.toString(undefined, 0, 5)); // encoding defaults to 'utf8', outputs abcde

// CONVERT BUFFER TO JSON

// const buf = new Buffer.from('Simply Easy Learning')
// const json = buf.toJSON()

// console.log(json)

// CONCATENATE BUFFERS

// syntax Buffer.concat(list[, totalLength])

// Parameters
// Here is the description of the parameters used −

// list − Array List of Buffer objects to be concatenated.

// totalLength − This is the total length of the buffers when concatenated.

// const buffer1 = new Buffer.from('TutorialsPoint ');
// const buffer2 = new Buffer.from('Simply Easy Learning');
// const buffer3 = Buffer.concat([buffer1, buffer2]);

// console.log(`Buffer3 content: ${buffer3.toString()}`)

// COMPARE BUFFERS

// syntax buf.compare(otherBuffer);
// Returns a number indicating whether it comes before
// or after or is the same as the otherBuffer in sort order.



// const buffer1 = new Buffer.from('ABC');
// const buffer2 = new Buffer.from('ABCD');
// const result = buffer1.compare(buffer2);

// if(result < 0) {
//     console.log(buffer1 +" comes before " + buffer2);
//  } else if(result === 0) {
//     console.log(buffer1 +" is same as " + buffer2);
//  } else {
//     console.log(buffer1 +" comes after " + buffer2);
//  }

// COPY BUFFER

// syntax buf.copy(targetBuffer[, targetStart][, sourceStart][, sourceEnd])

// const buffer1 = new Buffer.from('ABC');
// const buffer2 = new Buffer.alloc(3);
// buffer1.copy(buffer2);
// console.log("buffer2 content: " + buffer2.toString());

// SLICE BUFFER

// syntax buf.slice([start][, end])

// var buffer1 = new Buffer.from('TutorialsPoint');

// //slicing a buffer
// var buffer2 = buffer1.slice(0,9);
// console.log("buffer2 content: " + buffer2.toString());

// BUFFER LENGTH

var buffer = new Buffer.from('TutorialsPoint');


console.log("buffer length: " + buffer.length);