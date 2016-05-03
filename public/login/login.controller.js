app.controller('loginController', login);

app.$inject = ['$http', '$location', '$scope', '$uibModalInstance'];

function login($http, $location, $scope, $uibModalInstance){
  var vm = this;
  $scope.go= function(path){
    $location.path(path)
  }
  vm.login = function(info, path){
    $uibModalInstance.close();
    document.getElementById('header').classList.add('hidden');
    var update = $http.post('/login', info)
    update.then(function(data){
      $scope.go(path)
    })
  }
}
