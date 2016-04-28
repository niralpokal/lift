var app = angular.module('lift')

app.directive('planDay2', planDay2);

function planDay2(){
  return {
    templateUrl: 'planMaker/planDay2.directive.html'
  }
}
