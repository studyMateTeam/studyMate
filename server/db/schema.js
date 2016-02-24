var knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : 'mysqlcluster8.registeredsite.com',
    user     : 'studymateadmin',
    password : '!Qaz2wsx3edc',
    database : 'studymate',
    charset  : 'utf8'
  }
});

var Bookshelf = require('bookshelf')(knex);
var db = Bookshelf;

db.knex.schema.hasTable('users')
.then(function(exists) {
  if (!exists) {
    knex.schema.createTable('users', function(user) {
      user.increments('id').primary();
      user.string('username', 100);
      user.string('password', 100);
    }).then(function(table) {
      console.log('Created Table', table);
    });
  }
});

db.knex.schema.hasTable('events')
.then(function(exists) {
  if (!exists) {
    knex.schema.createTable('events', function(event) {
      event.increments('id').primary();
      event.string('topic', 100);
      event.string('place', 100);
      event.dateTime('datetime');
    }).then(function(table) {
      console.log('Created Table', table);
    });
  }
});

db.knex.schema.hasTable('usereventjoins')
.then(function(exists) {
  if (!exists) {
    knex.schema.createTable('usereventjoins', function(userevent) {
      userevent.integer('user_id');
      userevent.integer('event_id');
    }).then(function(table) {
      console.log('Created Table', table);
    });
  }
});

module.exports = Bookshelf;
