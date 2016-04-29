var app = angular.module('lift');

app.factory('exerciseService', exerciseService);
userService.inject=['$http']

function exerciseService($http){
  function getExercise(val){
    return $http.get('http://localhost:8080/exercise/'+val)
  }
  return {
    getExercise:getExercise
  }
}
