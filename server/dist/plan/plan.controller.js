app.controller('planController', plan);

app.$inject = ['$http', '$location', '$scope', 'userService', 'exerciseService', '$uibModal', 'planService'];

function plan($http, $location, $scope, userService, exerciseService, planService, $uibModal){
  var vm = this;
  var getPlan = planService.getPlan();
  getPlan.then(function(result){
    vm.plan = result.data;
  })

}
