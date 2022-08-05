const fs = require('fs');

fs.rmdir('/tmp/test', function (err) {
  if (err) {
    return console.error(err);
  }

  fs.readdir('/tmp/', function (err, files) {
    if (err) {
      return console.error(err);
    }
    files.forEach((file) => {
      console.log(file);
    });
  });
});
