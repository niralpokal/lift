app.controller('loginController', login);

app.$inject = ['$http', '$location', '$scope', '$uibModalInstance'];

function login($http, $location, $scope, $uibModalInstance){
  var vm = this;
  vm.error = false;
  $scope.go= function(path){
    $location.path(path)
  }
  vm.login = function(info, path){
    var update = $http.post('/login', info)
    update.then(function(data){
      $uibModalInstance.close();
      document.getElementById('login.username').classList.remove('has-error')
      document.getElementById('login.password').classList.remove('has-error')
      document.getElementById('header').classList.add('hidden');
      $scope.user = null;
      $scope.go(path)
    }, function(error){
      if(error.status ===401 ){
        document.getElementById('login.username').classList.add('has-error')
        document.getElementById('login.password').classList.add('has-error')
        vm.error = true;
      }
    })
  }
}
