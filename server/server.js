var express = require('express');
var request = require('request');
var _ = require('lodash');

var jsonParser = require('body-parser').json();
var app = express();

var port = process.env.PORT || 8000;

var server = app.listen(port, function () {
  console.log('http://localhost:' + port);
});

var userDB = [

  {username: "ellie",
  password: "ellie"
  }

];


app.use('/', express.static(__dirname + '/../client'));

app.post('/api/users/signin', jsonParser, function(req, res) {
  //we want to check the database and see if the username and password exist
  var username = req.body.username;
  var password = req.body.password;

  var validObj = {isValid: false};

  for(var i = 0; i < userDB.length; i++) {
    var userObj = userDB[i];
    if(userObj.username === username && userObj.password === password) {
      validObj.isValid = true;
    }
  }
  console.log(validObj);
  res.send(validObj);
  //SQL with bookshelf and knex
  //pass in username and password
  //verify that user exists
  //verify that password matches

  //if the user exists and password exists then we want to send back an object with an isValid property set to true
  //res.send()
  //{isValid: true};
  //otherwise set the isValid property to false

  //if they do then we want to go to the eventshome page
});

app.post('/api/users/signup', jsonParser, function(req, res) {
  //we want to check if the user already exists, then we

  var username = req.body.username;
  var password = req.body.password;

  var userExists = {exists: false};
  for(var j = 0; j < userDB.length; j++) {
    if(_.includes(userDB[j], username)) {
      userExists.exists = true;
      res.send(true);
      break;
  }
}
  res.send(false);
});


module.exports = app;
