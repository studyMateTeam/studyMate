angular.module('studyMate')

.controller('eventsListCtrl',function($scope, eventsListFact){
$scope.data = [];
  $scope.displayEvent = function(){
    console.log('++line 6 inside eventsListCtrl');
      eventsListFact.getEvents()
    .then(function(data){
      $scope.data.push(data);
      console.log('++line 10 in eventsListCtrl Success: ',$scope.data);
    }).catch(function(err) {
      console.log('++line 12 in eventsList Ctrl Error: ',err);
    });
  };
  $scope.displayEvent();

});
