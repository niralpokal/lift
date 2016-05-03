var app = angular.module('lift')

app.directive('planday4', planDay4);

function planDay4(){
  return {
    templateUrl: 'plan/day4.directive.html'
  }
}
