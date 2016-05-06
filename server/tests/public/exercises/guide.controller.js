app.controller('guideController', guide);

app.$inject = ['$scope', '$uibModalInstance', 'Exercise'];

function guide($scope, $uibModalInstance, Exercise){
  var vm = this
  vm.info = Exercise
  console.log($scope.guide);
  $scope.go= function(path){
    console.log();
  }
}
