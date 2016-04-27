var app = angular.module('lift')

app.directive('plan', plan);

function plan(){
  return {
    templateUrl: 'home/plan.directive.html'
  }
}
