angular.module('studyMate',['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('signin', {
    url: '/signin',
    templateUrl: './auth/signin.html'
  })
  .state('signout', {
    url: '/signout',
    templateUrl: './auth/signout.html'
  })
  .state('eventsHome', {
    url: '/eventsHome',
    templateUrl: './allEventsList/eventsHome.html'
  });
  $urlRouterProvider.otherwise('/signin');
})

.run(function($state, $rootScope) {
  console.log("app running");
  $rootScope.$on('$stateChangeStart', function(event, toState) {
    console.log("stateChange ", toState);
  });
});
