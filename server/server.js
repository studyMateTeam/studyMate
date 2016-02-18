var express = require('express');
var jsonParser = require('body-parser').json();
var app = express();

// configure our server with all the middleware and and routing
require('./config/middleware.js')(app, express);

// export our app for testing and flexibility, required by index.js


var port = process.env.PORT || 8000;
app.listen(port, function () {
 console.log('http://localhost:' + port);
});


module.exports = app;
