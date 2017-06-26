var express = require('express');

var app = express();

// UNCOMMENT FOR REACT
// app.use(express.static(__dirname + '/../client/dist'))

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
