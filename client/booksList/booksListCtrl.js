angular.module('studyMate')


.controller('booksListCtrl', function($scope, $window, $state, $stateParams, booksListFact) {
  $scope.booksList = [];
  $scope.bookTopic = $stateParams.bookTopic;

  $scope.bookSearch = function(){
    booksListFact.bookSearch($scope.bookTopic)
    .then(function(books){
      $scope.booksList = books;
    });
  };

});
