var app = angular.module('lift')

app.directive('planday4', planDay4);

function planDay4(){
  return {
    templateUrl: 'planMaker/planDay4.directive.html'
  }
}