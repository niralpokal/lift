var app = angular.module('lift')

app.directive('planmakerday2', planMakerDay2);

function planMakerDay2(){
  return {
    templateUrl: 'planMaker/planDay2.directive.html'
  }
}
