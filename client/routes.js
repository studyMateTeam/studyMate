angular.module('studyMate').config(config);

config.$inject = ['$stateProvider', '$urlRouterProvider'];

function config($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('eventsHome', {
    url: '/eventsHome',
    templateUrl: 'allEventsList/eventsHome.html'
  })
  .state('signin', {
    url: '/signin',
    templateUrl: 'auth/signin.html'
  })
  .state('signout', {
    url: '/signout',
    templateUrl: 'auth/signout.html'
  });

  $urlRouterProvider.otherwise('/signin');
}
