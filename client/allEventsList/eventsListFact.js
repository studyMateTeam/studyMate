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

  var eventJoin = function(user, event) {
    console.log('++line 20 inside eventJoin in eventsListFact');
    return $http({
      method: 'POST',
      url: 'api/events/eventJoin',
      data: user, event
    })
    .then(function (resp) {
      console.log(resp);
      return resp.data;
    })
  }

  return {
    getEvents: getEvents,
    eventJoin: eventJoin
  };
});
