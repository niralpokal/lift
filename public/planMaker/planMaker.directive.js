var app = angular.module('lift')

app.directive('planmaker',  planMaker);

function planMaker(){
  return {
    templateUrl: 'planMaker/planMaker.directive.html'
  }
}
