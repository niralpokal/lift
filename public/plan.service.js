var app = angular.module('lift');

app.factory('planService', planService);
userService.inject=['$http']

function planService($http){
  function getPlan(){
    return $http.get('https://localhost:8080/plan/');
  }
  function createPlan(val){
    return $http.post('/plan/', val)
  }
  return {
    getPlan:getPlan,
    createPlan:createPlan
  }
}
