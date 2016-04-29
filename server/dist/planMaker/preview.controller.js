app.controller('previewController', previewController);
app.$inject = ['$scope']

function previewController($scope){
  $scope.$on('planName', function(event,value){
    $scope.planName = value
  })
  $scope.$on('planLength', function(event,value){
    $scope.planLength = value
  })
}
