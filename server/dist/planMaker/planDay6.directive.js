var app = angular.module('lift')

app.directive('planday6', planDay6);

function planDay6(){
  return {
    templateUrl: 'planMaker/planDay6.directive.html'
  }
}
