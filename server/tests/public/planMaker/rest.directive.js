var app = angular.module('lift')

app.directive('rest', rest);

function rest(){
  return {
    templateUrl: 'planMaker/rest.directive.html'
  }
}
