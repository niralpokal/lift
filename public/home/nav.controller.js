app.controller('navController', navController);

app.$inject = ['$scope', '$location'];

function navController($scope, $location) {
    $scope.isCollapsed = true;
    $scope.$on('$routeChangeSuccess', function () {
        $scope.isCollapsed = true;
    });
}
