var app = angular.module('lift')

app.directive('planmakerday7', planMakerDay7);

function planMakerDay7(){
  return {
    templateUrl: 'planMaker/planDay7.directive.html'
  }
}
