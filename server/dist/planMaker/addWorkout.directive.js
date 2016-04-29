var app = angular.module('lift')

app.directive('addworkout', addWorkout);

function addWorkout(){
  return {
    templateUrl: 'planMaker/addWorkout.directive.html'
  }
}
