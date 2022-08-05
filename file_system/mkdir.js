const fs = require('fs');

fs.mkdir('./global_objects', (err) => {
  if (err) {
    console.error(err);
  }
  console.log('Directory created successfully!');
});
