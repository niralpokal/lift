app.controller('signupController', signup);

app.$inject = ['$http', '$location', '$scope', '$uibModalInstance'];

function signup($http, $location, $scope, $uibModalInstance){
  var vm = this;
  $scope.go = function(path){
    $location.path(path)
  }
  vm.signup = function(info, path){
    $uibModalInstance.close();
   var update = $http.post('http://localhost:8080/user',info)
   update.then(function(){
     document.getElementById('header').className="hidden row-fluid"
     $scope.go(path)
   })
 }
}
