var fs = require('fs');

const data = 'Through fire and flames, shall the blade be made.';
fs.writeFile('input.txt', data, function (err) {
  if (err) {
    return console.error(err);
  }

  console.log('Data written successfully!');
  console.log("Let's read newly written data");

  fs.readFile('input.txt', function (err, data) {
    if (err) {
      return console.error(err);
    }
    console.log('Asynchronous read: ' + data.toString());
  });
});
