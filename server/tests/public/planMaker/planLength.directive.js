var app = angular.module('lift')

app.directive('planmakerlength', planMakerLength);

function planMakerLength(){
  return {
    templateUrl: 'planMaker/planLength.directive.html'
  }
}
