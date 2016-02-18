angular.module('studyMate')

.controller('createEventCtrl', function($scope, createEventFact){
  $scope.event = {};

  $scope.sendEvent = function() {
    createEventFact.addEvent($scope.event);
  };
});
