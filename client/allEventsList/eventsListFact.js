angular.module('studyMate')

.factory('eventsListFact', function($http){
  var getEvents = function() {
    return $http({
      method: 'GET',
      url: '/api/events/getEvents',
    }).then( function successs(response) {
      console.log('++line 9 inside eventsListFact Success: ',response)
      return response.data;
    }, function error(response) {
      console.log('++line 12 inside eventListFact Error: ',response);
    });
  };

  var eventJoin = function(joinData) {
    console.log('++line 17 inside eventJoin in eventsListFact');
    return $http({
      method: 'POST',
      url: 'api/events/eventJoin',
      data: joinData
    }).then(function (resp) {
      console.log(resp);
      return resp.data;
    })
  };

  var getGuestList = function (eventid) {
    var data = {eventid: eventid};
    return $http({
      method: 'POST',
      url: 'api/events/getGuestList',
      data: data
    }).then(function success (response) {
      return response.data;
    }, function error (response) {
      console.log('++line 36 inside eventListFact Error: ', response);
    })
  }

  return {
    getEvents: getEvents,
    eventJoin: eventJoin,
    getGuestList: getGuestList
  };
});
