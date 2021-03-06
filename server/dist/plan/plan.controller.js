app.controller('planController', plan);

app.$inject = ['$location', '$scope', 'userService', 'exerciseService', 'planService', 'exerciseService', '$uibModal'];

function plan($location, $scope, userService, exerciseService, planService, exerciseService, $uibModal){
  var vm = this;
  var getPlan = planService.getPlan();
  getPlan.then(function(result){
    if(result.data.length > 1){
      vm.noPlan = false
      $scope.$emit('selectPlan', result.data)
      vm.plan = result.data[result.data.length-1];
      vm.plan_id = result.data[result.data.length-1]._id
      addDays();
      $scope.$on('selectedPlan', function(event, data){
        vm.noPlan = false;
        vm.plan = data;
        vm.plan_id = data._id
        vm.plan.days = [{
          name:'Day 1',
          string: 'day1'
        },{
          name:'Day 2',
          string: 'day2'
        },{
          name:'Day 3',
          string: 'day3'
        },{
          name:'Day 4',
          string: 'day4'
        },{
          name:'Day 5',
          string: 'day5'
        },{
          name:'Day 6',
          string: 'day6'
        },{
          name:'Day 7',
          string: 'day7'
        }]
        vm.plan.day = { value: vm.plan.days[0] }
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
          if(vm.string !=undefined){
            vm.selectDay(vm.string)
          }
        }else{
          vm.selected = { value: vm.plan.weeks[0]}
          vm.selectedWeek = vm.plan.weeks[0]
          if(vm.string !=undefined){
            vm.selectDay(vm.string)
          }
        }
      })
      }else if(result.data[0] == undefined){
        vm.noPlan = true
      } else {
      vm.noPlan = false
      vm.plan = result.data[0];
      vm.plan_id = result.data[0]._id
      addDays()
    }
  })
  function addDays (){
    vm.plan.days = [{
      name:'Day 1',
      string: 'day1'
    },{
      name:'Day 2',
      string: 'day2'
    },{
      name:'Day 3',
      string: 'day3'
    },{
      name:'Day 4',
      string: 'day4'
    },{
      name:'Day 5',
      string: 'day5'
    },{
      name:'Day 6',
      string: 'day6'
    },{
      name:'Day 7',
      string: 'day7'
    }]
    vm.plan.day = { value: vm.plan.days[0] }
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
  }

  $scope.selectWeek = function(item, item2){
    $scope.$apply(function(){
      vm.selectedWeek = item;
      if(vm.string !=undefined){
        vm.selectDay(vm.string)
      }
    });
  }
  $scope.selectDay= function(item, item2){
    $scope.$apply(function(){
      vm.selectDay(item.string)
    })
  }
  vm.selectDay = function(string){
    vm.string = string;
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
        vm.selectedDay.date = Date.parse(vm.selectedWeek.day1.date)
      }
      if(vm.selectedWeek.day1.date == 0){
        vm.selectedDay.date = null
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
        vm.selectedDay.date = Date.parse(vm.selectedWeek.day2.date)
      }
      if(vm.selectedWeek.day2.date == 0){
        vm.selectedDay.date = null
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
        vm.selectedDay.date = Date.parse(vm.selectedWeek.day3.date)
      }
      if(vm.selectedWeek.day3.date == 0){
        vm.selectedDay.date = null
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
        vm.selectedDay.date = Date.parse(vm.selectedWeek.day4.date)
      }
      if(vm.selectedWeek.day4.date == 0){
        vm.selectedDay.date = null
      }
    }else if(string == 'day5'){
      if(vm.selectedWeek.day5.exercises == undefined){
        var temp = $.extend(true,{}, vm.plan.day5)
        var temp2 = makeSets(temp, vm.selectedWeek.id);
        vm.selectedWeek.day5 = $.extend(true,{}, temp2)
        vm.selectedWeek.day5.day = 'Day 5'
        vm.selectedDay = vm.selectedWeek.day5
      } else{
        vm.selectedDay = vm.selectedWeek.day5
        vm.selectedDay.date = Date.parse(vm.selectedWeek.day5.date)
      }
      if(vm.selectedWeek.day5.date == 0){
        vm.selectedDay.date = null
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
        vm.selectedDay.date = Date.parse(vm.selectedWeek.day6.date)
      }
      if(vm.selectedWeek.day6.date == 0){
        vm.selectedDay.date = null
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
        vm.selectedDay.date = Date.parse(vm.selectedWeek.day7.date)
      }
      if(vm.selectedWeek.day7.date == 0){
        vm.selectedDay.date = null
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
  vm.addSet = function(data){
    var myArray = data[data.length -1];
    var set = {
      id: (myArray.id +1),
      name:("Set " + (myArray.id + 1)),
      weight: 0,
      reps: 0,
      week: myArray.week
    }
    data.push(set)
  }
  vm.date = function(date){
    vm.selectedDay.date = date;
  }
  vm.DateOpen = function() {
    vm.datePopup.opened = true;
  };
  vm.datePopup = {
    opened: false
  }
  vm.save = function(){
    var payload;
    for(var i = 0; i<vm.plan.weeks.length; i++){
      if(vm.plan.weeks[i].id == vm.selectedWeek.id){
        vm.plan.weeks[i] = vm.selectedWeek;
        break;
      }
    }
    payload ={
      id: vm.plan_id,
      weeks:vm.plan.weeks
    }
    var update =  planService.updatePlan(payload)
    update.then(function(result){
    })
  }
  vm.open = function(data){
    var service = exerciseService.getExercise(data);
    service.then(function(results){
      vm.info = results.data[0];
      $scope.open('exercise')
    })
  }
  $scope.open = function(string){
    if(string == 'exercise'){
      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: '/exercises/exercise.modal.html',
        controller: 'guideController',
        controllerAs: 'guide',
        resolve: {
          Exercise: function(){
            return  vm.info;
          }
        }
      })
    }
  }
}
