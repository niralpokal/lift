var app = angular.module('lift')

app.directive('bmi', bmi)
function exercises(){
  return{
    templateUrl: 'calculators/bmi.directive.html'
  }
}
