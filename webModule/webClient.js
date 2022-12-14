const http = require('http');

const options = {
  host: 'localhost',
  port: '3000',
  path: '/', // or /index.html
};

const callback = (res) => {
  let body = '';
  res.on('data', (data) => {
    body += data;
  });

  res.on('end', () => {
    console.log(body);
  });
};

const req = http.request(options, callback);
req.end();