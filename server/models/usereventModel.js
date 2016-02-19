var db = require('../db/schema.js');
var User = require('./userModel.js');
var Event = require('./eventModel.js');

var UserEventJoin = db.Model.extend({
  tableName: 'usereventjoins',
  user: function() {
    return this.belongsToMany(User, 'user_id');
  },
  event: function() {
    return this.belongsToMany(Event, 'event_id');
  }
});

module.exports = UserEventJoin;
