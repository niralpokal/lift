var app = angular.module('lift')

app.directive('planday5', planDay5);

function planDay5(){
  return {
    templateUrl: 'planMaker/planDay5.directive.html'
  }
}
