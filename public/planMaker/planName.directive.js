var app = angular.module('lift')

app.directive('planname', planName);

function planName(){
  return {
    templateUrl: 'planMaker/planName.directive.html'
  }
}
