var app = angular.module('lift')

app.directive('planDay5', planDay5);

function planDay5(){
  return {
    templateUrl: 'planMaker/planDay5.directive.html'
  }
}
