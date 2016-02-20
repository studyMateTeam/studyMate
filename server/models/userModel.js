var db = require('../db/schema.js');
var UserEvent = require('./usereventModel.js');

var User = db.Model.extend({
  tableName: 'users',
  userevent: function() {
    return this.hasMany(UserEvent, 'user_id');
  }
});

module.exports = User;
