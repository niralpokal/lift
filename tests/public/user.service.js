var app = angular.module('lift');

app.factory('userService', userService);
userService.inject=['$http']

function userService($http){
  function getUser(){
    return $http.get('http://localhost:8080/user');
  }
  return {
    getUser:getUser
  }
}
