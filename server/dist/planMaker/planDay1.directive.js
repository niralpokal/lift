var app = angular.module('lift')

app.directive('planmakerday1', planMakerDay1);

function planMakerDay1(){
  return {
    templateUrl: 'planMaker/planDay1.directive.html'
  }
}
