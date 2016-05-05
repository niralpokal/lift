app.controller('planController', plan);

app.$inject = ['$location', '$scope', 'userService', 'exerciseService', 'planService'];

function plan($location, $scope, userService, exerciseService, planService){
  var vm = this;
  var getPlan = planService.getPlan();
  getPlan.then(function(result){
    vm.plan = result.data;
    if (vm.plan.weeks == undefined) {
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
      }
      vm.selected = { value: vm.plan.weeks[0]}
      vm.selectedWeek = vm.plan.weeks[0]
    }else{
      vm.selected = { value: vm.plan.weeks[0]}
      vm.selectedWeek = vm.plan.weeks[0]
    }
  })
  $scope.selectWeek = function(item, item2){
    $scope.$apply(function(){
      vm.selectedWeek = item;
    });
  }
  
  vm.selectDay = function(string){
    document.getElementById('planTemplate').classList.add('hidden')
    document.getElementById('addToPlan').classList.remove('hidden')
    if(string == 'day1'){
      if(vm.selectedWeek.day1.exercises == undefined){
        var temp = $.extend(true,{}, vm.plan.day1)
        var temp2 = makeSets(temp, vm.selectedWeek.id);
        vm.selectedWeek.day1 = $.extend(true,{}, temp2)
        vm.selectedWeek.day1.day = 'Day 1'
        vm.selectedDay = vm.selectedWeek.day1
      } else{
        vm.selectedDay = vm.selectedWeek.day1
      }
    }else if(string == 'day2'){
      if(vm.selectedWeek.day2.exercises == undefined){
        var temp = $.extend(true,{}, vm.plan.day2)
        var temp2 = makeSets(temp, vm.selectedWeek.id);
        vm.selectedWeek.day2 = $.extend(true,{}, temp2)
        vm.selectedWeek.day2.day = 'Day 2'
        vm.selectedDay = vm.selectedWeek.day2
      } else{
        vm.selectedDay = vm.selectedWeek.day2
      }
    }else if(string == 'day3'){
      if(vm.selectedWeek.day3.exercises == undefined){
        var temp = $.extend(true,{}, vm.plan.day3)
        var temp2 = makeSets(temp, vm.selectedWeek.id);
        vm.selectedWeek.day3 = $.extend(true,{}, temp2)
        vm.selectedWeek.day3.day = 'Day 3'
        vm.selectedDay = vm.selectedWeek.day3
      } else{
        vm.selectedDay = vm.selectedWeek.day3
      }
    }else if(string == 'day4'){
      if(vm.selectedWeek.day4.exercises == undefined){
        var temp = $.extend(true,{}, vm.plan.day4)
        var temp2 = makeSets(temp, vm.selectedWeek.id);
        vm.selectedWeek.day4 = $.extend(true,{}, temp2)
        vm.selectedWeek.day4.day = 'Day 4'
        vm.selectedDay = vm.selectedWeek.day4
      } else{
        vm.selectedDay = vm.selectedWeek.day4
      }
    }else if(string == 'day5'){
      if(vm.selectedWeek.day5.exercises == undefined){
        var temp = $.extend(true,{}, vm.plan.day5)
        var temp2 = makeSets(temp, vm.selectedWeek.id);
        vm.selectedWeek.day5 = $.extend(true,{}, temp2)
        vm.selectedWeek.day5.day = 'Day 5'
        vm.selectedDay = vm.selectedWeeks.day5
      } else{
        vm.selectedDay = vm.selectedWeek.day5
      }
    }else if(string == 'day6'){
      if(vm.selectedWeek.day6.exercises == undefined){
        var temp = $.extend(true,{}, vm.plan.day6)
        var temp2 = makeSets(temp, vm.selectedWeek.id);
        vm.selectedWeek.day6 = $.extend(true,{}, temp2)
        vm.selectedWeek.day6.day = 'Day 6'
        vm.selectedDay = vm.selectedWeek.day6
      } else{
        vm.selectedDay = vm.selectedWeek.day6
      }
    }else if(string == 'day7'){
      if(vm.selectedWeek.day7.exercises == undefined){
        var temp = $.extend(true,{}, vm.plan.day7)
        var temp2 = makeSets(temp, vm.selectedWeek.id);
        vm.selectedWeek.day7 = $.extend(true,{}, temp2)
        vm.selectedWeek.day7.day = 'Day 7'
        vm.selectedDay = vm.selectedWeek.day7
      } else{
        vm.selectedDay = vm.selectedWeek.day7
      }
    }
  }

  function makeSets(object, num){
    var num = num
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
            reps: 0,
            week: num
            }
          object.exercises[z].sets.push(set);
        }
        z++;
      }
    }
    return object;
  }

  vm.save = function(){
    var payload;
    for(var i = 0; i<vm.plan.weeks.length; i++){
      if(vm.plan.weeks[i].id == vm.selectedWeek.id){
        vm.plan.weeks[i] = vm.selectedWeek;
        break;
      }
    }
    payload = vm.plan.weeks
    var update =  planService.updatePlan(payload)
    update.then(function(result){
    })
  }

}
