var app = angular.module('lift');

app.directive('date', date)

function date(){
  return{
    templateurl:'plan/date.directive.html'
  }
}
