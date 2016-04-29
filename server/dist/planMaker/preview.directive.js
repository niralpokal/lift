var app = angular.module('lift')

app.directive('preview', preview);

function preview(){
  return {
    templateUrl: 'planMaker/preview.directive.html'
  }
}
