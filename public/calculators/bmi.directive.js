var app = angular.module('lift')

app.directive('bmi', bmi)
function bmi(){
  return{
    templateUrl: 'calculators/bmi.directive.html'
  }
}
