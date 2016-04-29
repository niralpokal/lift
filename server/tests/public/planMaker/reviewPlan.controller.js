app.controller('reviewPlanController', reviewPlan);

app.$inject = ['$http', '$location', '$scope', '$uibModalInstance', 'planMaker'];

function reviewPlan($http, $location, $scope, $uibModalInstance, planMaker){
  $scope.planMaker= planMaker
  $scope.ok =function(){
    $uibModalInstance.close('ok')
  }
  $scope.edit =function(){
    $uibModalInstance.close('edit');
  }
}
