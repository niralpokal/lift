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
        day1: {},
        day2: {},
        day3: {},
        day4: {},
        day5: {},
        day6: {},
        day7: {}
      };
      vm.plan.weeks.push(object);
      vm.selected = { value: vm.plan.weeks[0]}
      vm.selectedWeek = vm.plan.weeks[0]
    }
  })
  $scope.selectedWeek = function(item){
    vm.selectedWeek = item;
  }
  vm.selectDay = function(string){
    document.getElementById('planTemplate').classList.add('hidden')
    document.getElementById('addToPlan').classList.remove('hidden')
    if(string == 'day1'){
      if(vm.selectedWeek.day1.exercises == undefined){
        console.log('hi');
        vm.selectedWeek.day1 = vm.plan.day1;
        var temp = vm.plan.day1
        vm.selectedDay = makeSets(temp);
        vm.selectedDay.day = 'Day 1'
      } else{
        console.log('hello');
        vm.selectedDay = vm.selectedWeek.day1
      }
    }else if(string == 'day2'){
      if(vm.selectedWeek.workouts.length == 0){
        var temp = vm.plan.day1
        vm.selectedDay = makeSets(temp);
        vm.selectedDay.day = 'Day 1'
      }
    }else if(string == 'day3'){
      if(vm.selectedWeek.workouts.length == 0){
        var temp = vm.plan.day1
        vm.selectedDay = makeSets(temp);
        vm.selectedDay.day = 'Day 1'
      }
    }else if(string == 'day4'){
      if(vm.selectedWeek.workouts.length == 0){
        var temp = vm.plan.day1
        vm.selectedDay = makeSets(temp);
        vm.selectedDay.day = 'Day 1'
      }
    }else if(string == 'day5'){
      if(vm.selectedWeek.workouts.length == 0){
        var temp = vm.plan.day1
        vm.selectedDay = makeSets(temp);
        vm.selectedDay.day = 'Day 1'
      }
    }else if(string == 'day6'){
      if(vm.selectedWeek.workouts.length == 0){
        var temp = vm.plan.day1
        vm.selectedDay = makeSets(temp);
        vm.selectedDay.day = 'Day 1'
      }
    }else if(string == 'day7'){
      if(vm.selectedWeek.workouts.length == 0){
        var temp = vm.plan.day1
        vm.selectedDay = makeSets(temp);
        vm.selectedDay.day = 'Day 1'
      }
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
    }
    return object;
  }
  vm.log = function(){
    console.log(vm.selectedWeek);
  }

}
