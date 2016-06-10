var app = angular.module('lift')

app.directive('warmup', warmup)
function warmup(){
  return{
    templateUrl: 'calculators/warmup.directive.html'
  }
}
