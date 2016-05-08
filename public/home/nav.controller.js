app.controller('navController', navController);

app.$inject = ['$scope', '$location'];

function navController($scope, $location) {
    $scope.isCollapsed = true;
    $scope.$on('$routeChangeSuccess', function () {
        $scope.isCollapsed = true;
    });
    $scope.$on('selectPlanNav', function(event, data){
      $scope.plans = true
      console.log(data);
      $scope.plan = data
    })
    $scope.selectedPlan = function(val){
      console.log(val);
    }
}
