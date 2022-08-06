const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const multer = require('multer');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

const server = app.listen(3000, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log("App listening at http://%s:%s", host, port);
})
