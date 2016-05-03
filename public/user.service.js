var app = angular.module('lift');

app.factory('userService', userService);
userService.inject=['$http']

function userService($http){
  function getUser(){
    return $http.get('/user');
  }
  return {
    getUser:getUser
  }
}
