var app = angular.module('lift')

app.directive('planmakername', planMakerName);

function planMakerName(){
  return {
    templateUrl: 'planMaker/planName.directive.html'
  }
}
