angular.module('studyMate')

.factory('eventsListFact', function($http) {
  var getEvents = function() {
    return $http({
      method: 'GET',
      url: '/api/events/getEvents',
    }).then( function successs(response) {
      console.log(response);
      return response.data;
    }, function error(response) {
      console.log(response);
    });
  };

  var eventJoin = function(joinData) {
    return $http({
      method: 'POST',
      url: 'api/events/eventJoin',
      data: joinData
    }).then(function(resp) {
      console.log(resp);
      return resp.data;
    });
  };

  var bookSearch = function(topic) {
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/books/v1/volumes?q=' + topic,
    }).then( function success(response) {
      var books = response.data.items;
      console.log(books);
      return books;
    }, function error(response) {
      console.log(response);
    });
  };


  var getGuestList = function(eventid) {
    var data = {eventid: eventid};
    return $http({
      method: 'POST',
      url: 'api/events/getGuestList',
      data: data
    }).then(function success (response) {
      return response.data;
    }, function error(response) {
      console.log(response);
    });
  };

  return {
    getEvents: getEvents,
    eventJoin: eventJoin,
    getGuestList: getGuestList,
    bookSearch: bookSearch
  };
});
