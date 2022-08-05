const fs = require('fs');

fs.unlink('input.txt', (err) => {
    if (err) {
        console.error(err);
     } 
  console.log('File deleted successfully!');
});
