var app = angular.module('lift');

app.directive('selectedday', selectedDay);

function selectedDay(){
  return {
    templateUrl: 'plan/selectedDay.directive.html'
  }
}
