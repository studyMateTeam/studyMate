angular.module('studyMate')

.factory('createEventFact', function($http) {
  var addEvent = function(eventDetails) {
    return $http({
      method: 'POST',
      url: '/api/events/addEvent',
      data: eventDetails
    }).then(function success(response) {
      console.log(response.data);
      return response.data;
    },function error(response) {
      console.log(response);
    });
  };
  return {
    addEvent: addEvent
  };
});
