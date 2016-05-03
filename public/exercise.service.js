var app = angular.module('lift');

app.factory('exerciseService', exerciseService);
userService.inject=['$http']

function exerciseService($http){
  function getExercise(val){
    return $http.get('/exercise/'+val)
  }
  return {
    getExercise:getExercise
  }
}
