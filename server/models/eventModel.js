var db = require('../db/schema.js');
var UserEvent = require('./usereventModel.js');

var Event = db.Model.extend({
  tableName: 'events',
  userevent: function() {
    return this.hasMany(UserEvent, 'event_id');
  }
});

module.exports = Event;
