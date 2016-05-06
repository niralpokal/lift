app.controller('guideController', guide);

app.$inject = ['$scope', '$uibModalInstance', 'Exercise', '$window'];

function guide($scope, $uibModalInstance, Exercise, $window){
  var vm = this
  vm.info = Exercise
  vm.go= function(path){
    $window.open(path, '_blank');
  }
  vm.close = function(){
    $uibModalInstance.close()
  }
}
