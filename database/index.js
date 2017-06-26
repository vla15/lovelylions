var express = require('express');
var app = express();
var pg = require('pg');
var format = require('pg-format');
var PGUSER = 'kenlyhui';
var PGDATABASE = 'mydb';

var config = {
  user: PGUSER,
  database: PGDATABASE,
  max: 10,
  idleTimeoutMillis: 30000
};

var pool = new pg.Pool(config);

var myClient;


pool.connection(function(err, client, done) {
  if (err) console.log(err);
  app.listen(3000, function() {
    console.log('listening on 3000');
  })

  myClient = client;
  var queryStr = format('');
  myClient.query(queryStr, function (err, result) {
    if (err) {
      console.log(err);
    }
    console.log(result);
  });
});

// var connectionString = 'postgres://localhost/mydb';

// pg.connect(connectionString, onConnect);

// function onConnect(err, client, done) {
//   if(err) {
//     console.error(err);
//   }

//   client.end();
// }
