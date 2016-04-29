var app = angular.module('lift')

app.directive('planlength', planLength);

function planLength(){
  return {
    templateUrl: 'planMaker/planLength.directive.html'
  }
}
