app.controller('planController', plan);

app.$inject = ['$location', '$scope', 'userService', 'exerciseService', 'planService'];

function plan($location, $scope, userService, exerciseService, planService){
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
      var temp = vm.plan.day1
      vm.selectedDay = makeSets(temp);
      vm.selectedDay.day = 'Day 1'
    }else if(string == 'day2'){
      var temp = vm.plan.day2
      vm.selectedDay = makeSets(temp);
      vm.selectedDay.day = 'Day 2'
    }else if(string == 'day3'){
      var temp = vm.plan.day3
      vm.selectedDay = makeSets(temp);
      vm.selectedDay.day = 'Day 3'
    }else if(string == 'day4'){
      var temp = vm.plan.day4
      vm.selectedDay = makeSets(temp);
      vm.selectedDay.day = 'Day 4'
    }else if(string == 'day5'){
      var temp = vm.plan.day5
      vm.selectedDay = makeSets(temp);
      vm.selectedDay.day = 'Day 5'
    }else if(string == 'day6'){
      var temp = vm.plan.day6
      vm.selectedDay = makeSets(temp);
      vm.selectedDay.day = 'Day 6'
    }else if(string == 'day7'){
      var temp = vm.plan.day7
      vm.selectedDay = makeSets(temp);
      vm.selectedDay.day = 'Day 7'
    }
  }
  function makeSets(object){
    var z = 0;
    while(z < object.exercises.length){
      if(object.exercises[z].sets.length == object.exercises[z].numOfSets){
        z++
      } else {
        q = object.exercises[z]
        for (var i =0; i<q.numOfSets; i++){
          var set = {
            id:(i+1),
            name:("Set "+ (i+1)),
            weight: 0,
            reps: 0
            }
          object.exercises[z].sets.push(set);
        }
        z++;
      }
      return object;
    }
  }

}
