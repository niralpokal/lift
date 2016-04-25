var app = angular.module('lift', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when("/home/", {
    templateUrl: "home/home.view.html",
    controller: "homeController",
    controllerAs: "home"
  })
  .when("/login/", {
    templateUrl: "login/login.view.html",
    controller: "loginController",
    controllerAs: "login"
  })
  .when("/signup/", {
    templateUrl: "signup/signup.view.html",
    controller: "signupController",
    controllerAs: "signup"
  })
}]);
