angular.module('studyMate')

.factory('booksListFact', function($http) {

var books = [];

var bookSearch = function(topic) {
  return $http({
    method: 'GET',
    url: 'https://www.googleapis.com/books/v1/volumes?q=' + topic,
  }).then( function success(response) {
    return response.data.items;
  }, function error(response) {
    console.log(response);
  });
};

return {
  bookSearch: bookSearch,
  books: books
};

});
