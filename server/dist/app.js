var app = angular.module('lift', ['ngRoute', 'ui.bootstrap', 'ngCookies']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when("/home/", {
    templateUrl: "home/home.view.html",
    controller: "homeController",
    controllerAs: "home"
  })
}]);

app.run(['$rootScope', '$location', '$cookies', '$window', function($rootScope, $location, $cookies, $window){
  var id =  $cookies.get('id')
  var remember = $cookies.get('remember')
  if (remember == 'true' && id != undefined){
    document.getElementById('header').className="hidden row-fluid"
    $location.path('/home/')
  }
  $rootScope.$on('$locationChangeStart', function(event, next, current){
    var cookieId =  $cookies.get('id')
    var remember = $cookies.get('remember')
    var notAuthorized = $.inArray($location.path(), [' ']) === -1;
    if(cookieId == undefined&& notAuthorized){
      $location.path('')
    }else if(remember == undefined&& notAuthorized){
      $location.path('')
    }
  })
}])
