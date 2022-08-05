const fs = require('fs');

fs.mkdir('/tmp/test', (err) => {
  if (err) {
    console.error(err);
  }
  console.log('Directory created successfully!');
});
