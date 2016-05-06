var app = angular.module('lift')

app.directive('selectday', selectDay);

function selectDay(){
  return {
    templateUrl: 'plan/selectDay.directive.html'
  }
}
