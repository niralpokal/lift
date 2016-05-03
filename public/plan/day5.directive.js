var app = angular.module('lift')

app.directive('planday5', planDay5);

function planDay5(){
  return {
    templateUrl: 'plan/day5.directive.html'
  }
}
