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
  return {
    getEvents: getEvents
  };
});
