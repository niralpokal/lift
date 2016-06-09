var app =  angular.module('lift');

app.directive('onerm', oneRM);

function oneRM(){
  return{
    templateUrl: 'calculators/1rm.directive.html'
  }
}
