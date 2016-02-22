var Event = require('../models/eventModel.js');
var Events = require('../collections/eventCollection.js');

module.exports = {
  addEvent: function (req, res) {
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
    });
  },

  getEvents: function (req, res) {
    console.log('inside eventController.getEvents');
    console.log(req);
    res.send('hello');
  }

}