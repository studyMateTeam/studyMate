angular.module('studyMate')

.factory('eventsListFact', function($http){
  var getEvents = function() {
    return $http({
      method: 'GET',
      url: '/api/events/postEvent',
    }).then( function successs(response) {
      return response.data;
    }, function error(response) {
      console.log(response);
    });
  };
  return {
    getEvents: getEvents
  };
});
