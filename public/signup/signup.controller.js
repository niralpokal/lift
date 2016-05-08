app.controller('signupController', signup);

app.$inject = ['$http', '$location', '$scope', '$uibModalInstance'];

function signup($http, $location, $scope, $uibModalInstance){
  var vm = this;
  vm.error = false
  $scope.go = function(path){
    $location.path(path)
  }
  vm.user = {}
  vm.user.metricChoices = [
    {name:'lbs'},
    {name:'kgs'}
  ]
  vm.selectedMetric = function(val){
    vm.select = val
  }
  vm.selected = {value:vm.user.metricChoices[0]}
  vm.checkUser = function(val){
    $scope.loadingNames = true
    $http.get('/username/' + val).then(function(response){
      $scope.loadingNames = false
      $scope.noResults = true;
      $scope.nameResults = false;
      document.getElementById('signup.userName').classList.add('has-success')
      document.getElementById('signup.userName').classList.remove('has-error')
      vm.error1 = false;
      response.data.map(function(item){
        if(item){
          vm.check = item.username
          $scope.noResults = false;
          $scope.nameResults = true;
          document.getElementById('signup.userName').classList.add('has-error')
          vm.error1 = true
        }
        if($scope.user.username == vm.check){
          $scope.noResults = false;
          $scope.nameResults = true;
          document.getElementById('signup.userName').classList.add('has-error')
          vm.error1 = true;
        }
      })
    })
  }
  vm.signup = function(info, path){
    if(info == undefined){
      vm.error = true;
    }else {
      if(info.firstName == undefined){
        document.getElementById('signup.firstName').classList.add('has-error')
        vm.error = true;
      }else{
        document.getElementById('signup.firstName').classList.remove('has-error')
        vm.error = false;
      }
      if(info.lastName == undefined){
        document.getElementById('signup.lastName').classList.add('has-error')
        vm.error = true
      }else{
        document.getElementById('signup.lastName').classList.remove('has-error')
        vm.error = false;
      }
      if(info.username == undefined){
        document.getElementById('signup.userName').classList.add('has-error')
      }else{
        document.getElementById('signup.userName').classList.remove('has-error')
        vm.error = false;
      }
      if(info.pass == undefined){
        document.getElementById('signup.password').classList.add('has-error')
        vm.error = true
      }else{
        document.getElementById('signup.password').classList.remove('has-error')
        vm.error = false;
      }
      if(info.weight == undefined){
        document.getElementById('signup.weight').classList.add('has-error')
        vm.error = true
      }else{
        document.getElementById('signup.weight').classList.remove('has-error')
        vm.error = false;
      }
      if(info.height == undefined){
        document.getElementById('signup.height').classList.add('has-error')
        vm.error = true
      }else{
        document.getElementById('signup.height').classList.remove('has-error')
        vm.error = false;
      }
      if(info.age == undefined){
        document.getElementById('signup.age').classList.add('has-error')
        vm.error = true
      }else{
        if(vm.error == false && vm.error1 == false){
          document.getElementById('signup.age').classList.remove('has-error')
          info.metric = vm.select.name
          var update = $http.post('/user',info)
          update.then(function(){
            $uibModalInstance.close();
            document.getElementById('header').classList.add('hidden')
            $scope.go(path)
         })
        }
      }
    }
  }
}
