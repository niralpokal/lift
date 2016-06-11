var app = angular.module('lift')

app.directive('ideal', ideal);
function ideal(){
  return{
    templateUrl: 'calculator/ideal.directive.html'
  }
}
