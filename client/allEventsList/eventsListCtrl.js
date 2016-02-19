angular.module('studyMate')

.controller('eventsListCtrl',function($scope, eventsListFact){

  $scope.displayEvent = function(){
      eventsListFact.getEvents()
    .then(function(data){
      $scope.data = data;
      console.log($scope.data);
    }).catch(function(err) {
      console.log(err);
    });
  };
  $scope.displayEvent();

});
