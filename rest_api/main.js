const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

const user = {
  user4: {
    name: 'yennefer',
    password: 'password4',
    profession: 'sorceress',
    id: 4,
  },
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/listUsers', (req, res) => {
  fs.readFile(__dirname + '/' + 'users.json', 'utf8', (err, data) => {
    res.end(data);
  });
});

app.post('/addUser', (req, res) => {
  fs.readFile(__dirname + '/' + 'users.json', 'utf8', (err, data) => {
    data = JSON.parse(data);
    data['user4'] = user['user4'];
    res.end(JSON.stringify(data));
  });
});

app.get('/:id', (req, res) => {
  fs.readFile(__dirname + '/' + 'users.json', 'utf8', function (err, data) {
    const users = JSON.parse(data);
    const user = users['user' + req.params.id];
    res.end(JSON.stringify(user));
  });
});

const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('App listening at http://%s:%s', host, port);
});
