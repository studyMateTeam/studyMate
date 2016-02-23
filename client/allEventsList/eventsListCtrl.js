angular.module('studyMate')

.controller('eventsListCtrl',function($scope, eventsListFact){
  $scope.data = [];
  $scope.displayEvent = function(){
    console.log('++line 6 inside eventsListCtrl');
      eventsListFact.getEvents()
    .then(function(data){
      // var formatted = data.map(function(val) {
      //   var temp = JSON.parse(JSON.stringify(val));
      //   temp.datetime = moment(temp.datetime, moment.ISO_8601).utcOffset(480).format('MMM Do YYYY, h:mm A');
      //   return temp;
      // });

      data.forEach(function(value){
        value.formatted = moment(value.datetime, moment.ISO_8601).utcOffset(480).format('MMM Do YYYY, h:mm A');
      });
      $scope.data = data;
      console.log('++line 10 in eventsListCtrl Success: ',$scope.data);
    }).catch(function(err) {
      console.log('++line 12 in eventsList Ctrl Error: ',err);
    });
  };
  $scope.displayEvent();

});
