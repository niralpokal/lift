var app = angular.module('lift', ['ngRoute', 'ui.bootstrap', 'ngCookies']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when("/home/", {
    templateUrl: "home/home.view.html",
    controller: "homeController",
    controllerAs: "home"
  })
}]);

app.run(['$rootScope', '$location', '$cookies', '$http', function($rootScope, $location, $cookies, $http){
  var id =  $cookies.get('id')
  var remember = $cookies.get('remember')
  if (remember == 'true' && id != undefined){
    $location.path('/home/')
  }
  
}])
