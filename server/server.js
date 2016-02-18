var express = require('express');

var app = express();

// app.get('/', function(req, res) {
//   res.send('hello world');
// });

// configure our server with all the middleware and and routing
require('./config/middleware.js')(app, express);

// export our app for testing and flexibility, required by index.js
module.exports = app;