var app = angular.module('lift')

app.directive('exercises', exercises)
function exercises(){
  return{
    templateUrl: 'exercises/exercises.directive.html'
  }
}
