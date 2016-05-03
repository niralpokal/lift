var app = angular.module('lift')

app.directive('planday6', planDay6);

function planDay6(){
  return {
    templateUrl: 'plan/day6.directive.html'
  }
}
