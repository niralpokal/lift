var app = angular.module('lift')

app.directive('planDay3', planDay3);

function planDay3(){
  return {
    templateUrl: 'planMaker/planDay3.directive.html'
  }
}
