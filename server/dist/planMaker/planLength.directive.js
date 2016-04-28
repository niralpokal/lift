var app = angular.module('lift')

app.directive('planLength', planLength);

function planLength(){
  return {
    templateUrl: 'planMaker/planLength.directive.html'
  }
}
