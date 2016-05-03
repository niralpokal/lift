var app = angular.module('lift')

app.directive('planname', planName);

function planName(){
  return {
    templateUrl: 'plan/name.directive.html'
  }
}
