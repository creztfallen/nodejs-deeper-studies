const http = require('http');
const fs = require('fs');
const url = require('url');

// Create a server
http
  .createServer((req, res) => {
    // Parse the request containing file name
    const pathname = '/';

    // Print the name of the file for which request is made.
    console.log('Request for ' + pathname + ' received.');
    // Read the requested file content from file system
    fs.readFile('index.html', (err, data) => {
      if (err) {
        console.error(err);

        res.writeHead(404, { 'Content-Type': 'text/html' });
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data.toString());
      }
      res.end();
    });
  })
  .listen(3000);

console.log('Server running on port 3000');
