var User = require('../models/userModel.js');
var Users = require('../collections/userCollection.js');
var Q = require('q');
var jwt = require('jwt-simple');

// token secret
var secret = 'deadpoolsecret';

module.exports = {
  
  signin: function (req, res) {
    //we want to check the database and see if the username and password exist
    var username = req.body.username;
    var password = req.body.password;

    var validObj = {isValid: false};

    new User({ username: username }).fetch().then(function (found) {
      if (found) {
        if (found.get('password') === password) {
          console.log('password matched, creating a token');
          var token = jwt.encode({username: username}, secret);
          validObj.token = token;
          validObj.isValid = true;
          res.send(validObj);
        };
      } else {
        res.send(validObj);
      }
    })
  },

  signup: function (req, res) {
    var username = req.body.username;
    var password = req.body.password;

    var validObj = {isValid: false};

    new User({username: username}).fetch().then(function (found) {
      if (found) {
        console.log('user already created', found);
        res.send(validObj);
      } else {
        var user = new User({
          username: username,
          password: password
        });
        
        var token = jwt.encode({username: username}, secret);
        validObj.token = token;
        validObj.isValid = true;

        user.save().then(function (newUser) {
          Users.add(newUser);
          res.send(validObj);
        });
      }
    });
    
  },

  // checkAuth: function (req, res, next) {

  // }



}