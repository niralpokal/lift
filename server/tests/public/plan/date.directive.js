var app = angular.module('lift');

app.directive('date', date)

function date(){
  return{
    templateUrl:'plan/date.directive.html'
  }
}
