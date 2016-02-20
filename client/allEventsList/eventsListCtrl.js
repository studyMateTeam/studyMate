angular.module('studyMate')

.controller('eventsListCtrl',function($scope, eventsListFact){
  var self = this;

  self.displayEvent = function(){
    eventsListFact.getEvents()
    .then(function(data){
      self.data = data;
      console.log(self.data);
    }).catch(function(err) {
      console.log(err);
    });
  };

  self.displayEvent();

});
