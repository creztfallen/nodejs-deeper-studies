const fs = require('fs');

// ASYNC READ
fs.readFile('input.txt', (err, data) => {
  if (err) {
    console.error(err);
  }
  console.log('Async read: ' + data.toString());
});

// SYNC READ
let data = fs.readFileSync('input.txt');
console.log('Sync read: ' + data.toString());

console.log('Program Ended.');
