var app = angular.module('lift')

app.directive('planmakerday3', planMakerDay3);

function planMakerDay3(){
  return {
    templateUrl: 'planMaker/planDay3.directive.html'
  }
}
