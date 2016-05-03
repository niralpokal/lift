var app = angular.module('lift')

app.directive('planlength', planLength);

function planLength(){
  return {
    templateUrl: 'plan/length.directive.html'
  }
}
