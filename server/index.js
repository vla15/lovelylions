var express = require('express');
var db = require('../database/index.js');

var app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.get('/testing', (req, res) => {
  var str = 'select * from numbers';
  db.connectPg(str, (data) => {
    console.log('inside the func', data);
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
