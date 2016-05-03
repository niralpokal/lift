app.controller('signupController', signup);

app.$inject = ['$http', '$location', '$scope', '$uibModalInstance'];

function signup($http, $location, $scope, $uibModalInstance){
  var vm = this;
  $scope.go = function(path){
    $location.path(path)
  }
  vm.user = {}
  vm.user.metricChoices = [
    {name:'lbs'},
    {name:'kgs'}
  ]
  vm.selectedMetric = function(val){
    vm.selected = val
    console.log(val);
  }
  vm.selected = {value:vm.user.metricChoices[0]}
  vm.signup = function(info, path){
    $uibModalInstance.close();
    info.metric = vm.selected.name
    console.log(info);
    document.getElementById('header').classList.add('hidden')
    //var update = $http.post('/user',info)
    //update.then(function(){
    // $scope.go(path)
   //})
 }
}
