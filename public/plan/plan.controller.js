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
  $scope.selectedWeek = function(item){
  }
  vm.selectDay = function(string){
    document.getElementById('planTemplate').classList.add('hidden')
    document.getElementById('addToPlan').classList.remove('hidden')
    if(string == 'day1'){
      vm.selectedDay = vm.plan.day1
    }else if(string == 'day2'){
      vm.selectedDay = vm.plan.day2
    }else if(string == 'day3'){
      vm.selectedDay = vm.plan.day3
    }else if(string == 'day4'){
      vm.selectedDay = vm.plan.day4
    }else if(string == 'day5'){
      vm.selectedDay = vm.plan.day5
    }else if(string == 'day6'){
      vm.selectedDay = vm.plan.day6
    }else if(string == 'day7'){
      vm.selectedDay = vm.plan.day7
    }
  }
}
