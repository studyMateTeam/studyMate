angular.module('studyMate', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $stateProvider
  .state('eventsHome', {
    url: '/eventsHome',
    templateUrl: 'allEventsList/eventsHome.html',
    authenticate: true
  })
  .state('signin', {
    url: '/signin',
    templateUrl: 'log/signin.html'
  })
  .state('signup', {
    url: '/signup',
    templateUrl: 'log/signup.html'
  });
  $urlRouterProvider.otherwise('/signin');
  $httpProvider.interceptors.push('AttachTokens');
})

.factory('AttachTokens', function ($window) {
  var attach = {
    request: function (object) {
      var jwt = $window.localStorage.getItem('com.studymate');
      if (jwt) {
        object.headers['x-access-token'] = jwt;
      }
      // object.headers['Allow-Control-Allow-Origin'] = '*';
      return object;
    }
  };
  return attach;
})

.run(function ($rootScope, $location, logFact) {
  $rootScope.url = "http://localhost:8000";

  $rootScope.$on('$stateChangeStart', function (e, toState, toParams, fromState, fromParams) {
    if (toState.authenticate && !logFact.isAuth()) {
      e.preventDefault();
      $location.path('/signin');
    }
  });
});
