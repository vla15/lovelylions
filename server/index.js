var express = require('express');
var db = require('../database/index.js');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/testing', (req, res) => {
  var str = 'select _path from torso where id = 2';
  db.query(str, (data) => {
    res.send(data);
  });
 
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
