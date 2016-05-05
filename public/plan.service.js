var app = angular.module('lift');

app.factory('planService', planService);
userService.inject=['$http']

function planService($http){
  function getPlan(){
    return $http.get('/plan/');
  }
  function createPlan(val){
    return $http.post('/plan/', val)
  }
  function updatePlan(val){
    return $http.put('/plan/', val)
  }
  return {
    getPlan:getPlan,
    createPlan:createPlan,
    updatePlan:updatePlan
  }
}
