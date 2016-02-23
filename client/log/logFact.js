angular.module('studyMate')
.factory('logFact', function ($http, $location, $window) {

  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      // console.log(resp);
      return resp.data;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      console.log(resp);
      return resp.data;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.studymate');
  }

  var signout = function () {
    $window.localStorage.removeItem('com.studymate');
  }

  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };

});
