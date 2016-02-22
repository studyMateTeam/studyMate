var User = require('../models/userModel.js');
var Users = require('../collections/userCollection.js');

module.exports = {
  signin: function (req, res) {
    //we want to check the database and see if the username and password exist
    var username = req.body.username;
    var password = req.body.password;

    var validObj = {isValid: false};

    new User({ username: username }).fetch().then(function (found) {
      if(found) {
        if (found.get('password') === password) {
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

    new User({username: username}).fetch().then(function (found) {
      if (found) {
        res.send(true);
      } else {
        var user = new User({
          username: username,
          password: password
        });
        user.save().then(function (newUser) {
          Users.add(newUser);
          res.send(false);
        });
      }
    });
    
  },

  // checkAuth: function (req, res, next) {

  // }



}