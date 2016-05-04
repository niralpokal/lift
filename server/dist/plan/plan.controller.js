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
        vm.selectedWeek.day1 = vm.plan.day1;
        var temp = vm.plan.day1
        vm.selectedDay = makeSets(temp);
        vm.selectedDay.day = 'Day 1'
      } else{
        vm.selectedDay = vm.selectedWeek.day1
      }
    }else if(string == 'day2'){
      if(vm.selectedWeek.day2.exercises == undefined){
        vm.selectedWeek.day2 = vm.plan.day2;
        var temp = vm.plan.day2
        vm.selectedDay = makeSets(temp);
        vm.selectedDay.day = 'Day 2'
      } else{
        vm.selectedDay = vm.selectedWeek.day2
      }
    }else if(string == 'day3'){
      if(vm.selectedWeek.day3.exercises == undefined){
        vm.selectedWeek.day3 = vm.plan.day3;
        var temp = vm.plan.day3
        vm.selectedDay = makeSets(temp);
        vm.selectedDay.day = 'Day 3'
      } else{
        vm.selectedDay = vm.selectedWeek.day3
      }
    }else if(string == 'day4'){
      if(vm.selectedWeek.day4.exercises == undefined){
        vm.selectedWeek.day4 = vm.plan.day4;
        var temp = vm.plan.day4
        vm.selectedDay = makeSets(temp);
        vm.selectedDay.day = 'Day 4'
      } else{
        vm.selectedDay = vm.selectedWeek.day4
      }
    }else if(string == 'day5'){
      if(vm.selectedWeek.day5.exercises == undefined){
        vm.selectedWeek.day5 = vm.plan.day5;
        var temp = vm.plan.day5
        vm.selectedDay = makeSets(temp);
        vm.selectedDay.day = 'Day 5'
      } else{
        vm.selectedDay = vm.selectedWeek.day5
      }
    }else if(string == 'day6'){
      if(vm.selectedWeek.day6.exercises == undefined){
        vm.selectedWeek.day6 = vm.plan.day6;
        var temp = vm.plan.day6
        vm.selectedDay = makeSets(temp);
        vm.selectedDay.day = 'Day 6'
      } else{
        vm.selectedDay = vm.selectedWeek.day6
      }
    }else if(string == 'day7'){
      if(vm.selectedWeek.day7.exercises == undefined){
        vm.selectedWeek.day7 = vm.plan.day7;
        var temp = vm.plan.day7
        vm.selectedDay = makeSets(temp);
        vm.selectedDay.day = 'Day 7'
      } else{
        vm.selectedDay = vm.selectedWeek.day7
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
  }

}
