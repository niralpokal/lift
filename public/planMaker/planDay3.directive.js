var app = angular.module('lift')

app.directive('planday3', planDay3);

function planDay3(){
  return {
    templateUrl: 'planMaker/planDay3.directive.html'
  }
}
