var app = angular.module('lift')

app.directive('planday1', planDay1);

function planDay1(){
  return {
    templateUrl: 'plan/day1.directive.html'
  }
}
