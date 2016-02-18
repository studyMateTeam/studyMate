var express = require('express');
var jsonParser = require('body-parser').json();
var app = express();

var port = process.env.PORT || 8000;

var server = app.listen(port, function () {
 console.log('http://localhost:' + port);
});

app.use('/', express.static(__dirname + '/../client'));

module.exports = app;
