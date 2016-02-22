angular.module('studyMate')

.controller('createEventCtrl', function($scope, createEventFact, eventsListFact){
  $scope.event = {guests: []}; // initialize the event object to have an empty array of guests
  $scope.currentDate = new Date();

  $scope.sendEvent = function() {
    if($scope.event.date.getMonth() === $scope.currentDate.getMonth() && $scope.event.date.getYear() === $scope.currentDate.getYear() && $scope.event.date.getDate() === $scope.currentDate.getDate()){
      debugger;
    }
    else{
      console.log('try agian');
    }

    createEventFact.addEvent($scope.event).
    $window.location.href = '/#/eventsHome';
  };
});
