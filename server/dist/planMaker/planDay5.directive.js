var app = angular.module('lift')

app.directive('planmakerday5', planMakerDay5);

function planMakerDay5(){
  return {
    templateUrl: 'planMaker/planDay5.directive.html'
  }
}
