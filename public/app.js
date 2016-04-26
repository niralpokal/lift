var app = angular.module('lift', ['ngRoute', 'ui.bootstrap']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when("/home/", {
    templateUrl: "home/home.view.html",
    controller: "homeController",
    controllerAs: "home"
  })
}]);

app.controller('loginService', loginService);

app.$inject = ['$scope', '$uibModal'];

function loginService($scope, $uibModal) {
  $scope.animationsEnabled = true;
  $scope.open = function (type) {
    if(type == 'login'){
      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: '/login/login.modal.html',
        controller: 'loginController',
        controllerAs: 'login'
      });
    } else if (type == 'signup'){
      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: '/signup/signup.modal.html',
        controller: 'signupController',
        controllerAs: 'signup'
      });
    }
  };
}
