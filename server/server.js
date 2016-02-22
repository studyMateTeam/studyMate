var express = require('express');
var moment = require('moment');

var request = require('request');
var _ = require('lodash');

var jsonParser = require('body-parser').json();

var app = express();

var db = require('./db/schema.js');

var User = require('./models/userModel.js');
var Users = require('./collections/userCollection.js');
var Event = require('./models/eventModel.js');
var Events = require('./collections/eventCollection.js');

// Routes
// require('./routes/routes.js')(app, express);


var port = process.env.PORT || 8000;

var server = app.listen(port, function () {
  console.log('http://localhost:' + port);
});

app.use('/', express.static(__dirname + '/../client'));


app.post('/api/users/signin', jsonParser, function(req, res) {
  //we want to check the database and see if the username and password exist
  var username = req.body.username;
  var password = req.body.password;

  var validObj = {isValid: false};

  new User({ username: username }).fetch().then(function (found) {
    console.log(found);
    if(found) {
      console.log("inside if(found)");
      if (found.get('password') === password) {
        console.log(found.get('password'));
        validObj.isValid = true;
        res.send(validObj);
      };
    } else {
      console.log(validObj);
      res.send(validObj);
    }
  })

});

app.post('/api/users/signup', jsonParser, function(req, res) {

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
});

app.post('/api/events/addEvent', jsonParser, function(req, res) {
  var topic = req.body.topic;
  var place = req.body.place;
  var time = req.body.time;
  var date = req.body.date;
  var guests = req.body.guests;

  var datetime = req.body.date + ' ' + req.body.time;

  var event = new Event({
    topic: topic,
    place: place,
    datetime: datetime
  });

  event.save().then(function (newEvent) {
    Events.add(newEvent);
    res.send(Events);
  })

});

app.get('/api/events/getEvents', jsonParser, function(req, res) {
  // TODO: query events database and return the list of events
  console.log('++line 100 inside getEvents',res);

  Events
  .fetch()
  .then(function(collection) {
    collection = collection.toJSON();
    console.log(collection);
    res.send(collection);
  })

});


module.exports = app;
