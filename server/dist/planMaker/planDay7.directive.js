var app = angular.module('lift')

app.directive('planDay7', planDay7);

function planDay7(){
  return {
    templateUrl: 'planMaker/planDay7.directive.html'
  }
}
