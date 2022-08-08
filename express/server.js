const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const fs = require('fs');
const { response } = require('express');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/getForm.html', (req, res) => {
  res.sendFile(__dirname + '/' + 'getForm.html');
});

app.get('/process_get', (req, res) => {
  let response = {
    first_name: req.query.first_name,
    last_name: req.query.last_name,
  };
  res.end(JSON.stringify(response));
});

app.get('/postForm.html', (req, res) => {
  res.sendFile(__dirname + '/' + 'getForm.html');
});

app.post('/process_post', (req, res) => {
  let response = {
    first_name: req.query.first_name,
    last_name: req.query.last_name,
  };
  res.end(JSON.stringify(response));
});

app.get('/upload.html', (req, res) => {
  res.sendFile(__dirname + '/' + 'upload.html');
});

app.post('/file_upload', (req, res) => {
  console.log(req.files.file.name);
  console.log(req.files.file.path);
  console.log(req.files.file.type);
  const file = __dirname + '/' + req.files.file.name;

  fs.readFile(req.files.file.path, (err, data) => {
    fs.writeFile(file, data, (err) => {
      if (err) {
        console.error(err);
      } else {
        let response = {
          message: 'File uploaded successfully.',
          filename: req.files.file.name,
        };
      }
      console.log(response);
      res.end(JSON.stringify(response));
    });
  });
});

app.get('/', (req, res) => {
  console.log('Got a GET request for the homepage.');
  res.send('Hello World');
});

app.post('/', (req, res) => {
  console.log('Got a POST reque;st for homepage.');
  res.send('Hello POST');
});

app.delete('del_user', (req, res) => {
  console.log('Got a DELETE request for /del_user.');
  res.send('Hello DELETE');
});

app.get('/list_user', (req, res) => {
  console.log('Got a GET request for /list_user.');
  res.send('Hello /list_user');
});

app.get('/ab*cd', (req, res) => {
  console.log('Got a GET request for /ab*cd.');
  res.send('Hello /ab*cd');
});

const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('App listening at http://%s:%s', host, port);
});
