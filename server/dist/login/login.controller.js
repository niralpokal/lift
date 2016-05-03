app.controller('loginController', login);

app.$inject = ['$http', '$location', '$scope', '$uibModalInstance'];

function login($http, $location, $scope, $uibModalInstance){
  var vm = this;
  $scope.go= function(path){
    $location.path(path)
  }
  vm.login = function(info, path){
    $uibModalInstance.close();
    document.getElementById('header').className="hidden row-fluid"
    var update = $http.post('https://localhost:8080/login', info)
    update.then(function(data){
      $scope.go(path)
    })
  }
}
