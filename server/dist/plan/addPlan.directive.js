var app = angular.module('lift')

app.directive('addplan', addPlan);

function addPlan(){
  return {
    templateUrl: 'plan/addPlan.directive.html'
  }
}
