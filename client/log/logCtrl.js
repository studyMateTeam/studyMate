angular.module('studyMate')

.controller('logController', function($scope, $window, $location, $state, logFact) {
  $scope.user = {};

  $scope.signin = function() {
    logFact.signin($scope.user)
    .then(function(response) {
      if(response.isValid) {
        $window.localStorage.setItem('com.studymate', response.token);
        $state.go('eventsHome');
      } else {
        $state.go('signup');
      }
    });
};

$scope.signup = function() {
  logFact.signup($scope.user)
  .then(function(response) {
    if(response.isValid) {
      $window.localStorage.setItem('com.studymate', response.token);
      $state.go('eventsHome');
    } else {
      $state.go('signin');
    }
  });
};
});
