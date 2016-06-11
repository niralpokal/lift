var app = angular.module('lift')

app.directive('ideal', ideal);
function ideal(){
  return{
    templateUrl: 'calculators/ideal.directive.html'
  }
}
