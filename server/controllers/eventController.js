var Event = require('../models/eventModel.js');
var Events = require('../collections/eventCollection.js');
var User = require('../models/userModel.js');
var Users = require('../collections/userCollection.js');
var Userevent = require('../models/usereventModel.js');
var UserEvents = require('../collections/usereventCollection.js');
var jwt = require('jwt-simple');
var db = require('../db/schema.js');

module.exports = {
  addEvent: function (req, res) {
    var topic = req.body.topic;
    var place = req.body.place;
    var time = req.body.time;
    var date = req.body.date;
    var datetime = req.body.date.slice(0,11) + req.body.time.slice(11);
    
    var guests = req.body.guests;
    var token = req.body.token;

    var eventCreateUser = jwt.decode(token, 'deadpoolsecret').username;

    var event = new Event({
      topic: topic,
      place: place,
      datetime: datetime
    });

    event.save().then(function (newEvent) {
      Events.add(newEvent);
      var eventid = event.id;
      
      // need to get the userid of the user who created the event
      new User({ username: eventCreateUser }).fetch().then(function (found) {
        if (found) {
          var userid = found.id;
          console.log(userid);

          // insert into userevent table the userid and eventid
          var newUserEvent = new Userevent({user_id: userid, event_id: eventid});
          newUserEvent.save().then(function (userEventInsert) {
            UserEvents.add(userEventInsert);
            res.send(Events);
          });
        }
      })
    });

  },

  getEvents: function (req, res) {
    Events
    .fetch()
    .then(function(collection) {
      collection = collection.toJSON();
      res.send(collection);
    });
  },

  eventJoin: function (req, res) {
    console.log(req.body);
    var token = req.body.token;
    var eventid = req.body.event.id;
    var eventJoinUser = jwt.decode(token, 'deadpoolsecret').username;

    var validObj = {isValid: false};

    new User({username: eventJoinUser}).fetch().then(function (found) {
      if (found) {
        var userid = found.id;

        // insert into userevent table the userid and eventid
        var newUserEvent = new Userevent({user_id: userid, event_id: eventid});
        newUserEvent.save().then(function (userEventInsert) {
          UserEvents.add(userEventInsert);
          validObj.isValid = true;
          res.send(validObj);
        });
      } else {
        res.send(validObj);
      }
    })
  }

}