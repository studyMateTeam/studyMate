var db = require('../db/schema.js');
var UserEvent = require('../models/usereventModel.js');

var UserEvents = new db.Collection();

UserEvents.model = UserEvent;

module.exports = UserEvents;