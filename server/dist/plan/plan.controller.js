app.controller('planController', plan);

app.$inject = ['$http', '$location', '$scope', 'userService', 'exerciseService', 'planService'];

function plan($http, $location, $scope, userService, exerciseService, planService){
  var vm = this;
  var getPlan = planService.getPlan();
  getPlan.then(function(result){
    vm.plan = result.data;
    vm.plan.weeks = []
    for (var i = 0; i<vm.plan.planLength; i++){
      var object = {
        id:(i+1),
        name:"Week "+(i+1),
        workouts: []
      };
      vm.plan.weeks.push(object);
      vm.selected = { value: vm.plan.weeks[0]}
    }
  })

}
