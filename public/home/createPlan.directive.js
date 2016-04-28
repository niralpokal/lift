var app = angular.module('lift')

app.directive('createplan', createPlan);

function createPlan(){
  return {
    templateUrl: 'home/createPlan.directive.html'
  }
}
