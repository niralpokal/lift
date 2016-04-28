var app = angular.module('lift')

app.directive('planday7', planDay7);

function planDay7(){
  return {
    templateUrl: 'planMaker/planDay7.directive.html'
  }
}
