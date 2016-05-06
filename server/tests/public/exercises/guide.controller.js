app.controller('guideController', guide);

app.$inject = ['$scope', '$uibModalInstance', 'Exercise'];

function guide($scope, $uibModalInstance, Exercise){
  $scope.guide = exercise
  $scope.go= function(path){
    console.log();
  }
}
