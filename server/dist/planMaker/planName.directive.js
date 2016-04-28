var app = angular.module('lift')

app.directive('planName', planName);

function planName(){
  return {
    templateUrl: 'planMaker/planName.directive.html'
  }
}
