var app = angular.module('lift')

app.directive('logout', logout);

function logout(){
  return {
    templateUrl: 'home/logout.directive.html'
  }
}
