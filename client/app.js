angular.module('studyMate', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $stateProvider
  .state('eventsHome', {
    url: '/eventsHome',
    templateUrl: 'allEventsList/eventsHome.html',
    authenticate: true,
    signedin: false
  })
  .state('signin', {
    url: '/signin',
    templateUrl: 'log/signin.html',
    authenticate: false,
    signedin: false
  })
  .state('signup', {
    url: '/signup',
    templateUrl: 'log/signup.html',
    authenticate: false,
    signedin: false
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

.run(function ($rootScope, $state, $location, logFact) {
  debugger;
  $rootScope.url = "http://localhost:8000";

  $rootScope.$on('$stateChangeStart', function (e, toState) {
    //if authenticate prop is true but token doesnt exist
    if (toState.authenticate && !logFact.isAuth()) {
      e.preventDefault();
      $state.go('signin');
      // $location.path('/signin');
    }

    //if authenticate prop is false but token exists
    if(!toState.authenticate && logFact.isAuth()) {
      e.preventDefault();
      $state.go('eventsHome');
    }
    //
    // if(!toState.send){
    //   e.preventDefault();
    //   $state.go('/eventsHome');
    // }


  });


});
