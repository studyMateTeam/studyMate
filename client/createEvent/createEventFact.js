angular.module('studyMate')

.factory('createEventFact', function($http){
  // Take information from the createventHome view and send to dB
  //  Post request
  //  use $http request
  //  if we end up doing google maps than add it here
  var addEvent = function(eventDetails) {
    return $http({
      method: 'POST',
      url: '/addevent',
      data: {
        topic: eventDetails.topic,
        time: eventDetails.time,
        date: eventDetails.date,
        place: eventDetails.place

      }
    }).then(function success(response) {
      return response;
    },function error(response) {
      console.log(response);
    })
  }
})
