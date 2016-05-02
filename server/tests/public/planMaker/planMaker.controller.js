app.controller('planMakerController', planMaker);

app.$inject = ['$http', '$location', '$scope', 'userService', 'exerciseService', '$uibModal', '$timeout', 'planService'];

function planMaker($http, $location, $scope, userService, exerciseService, $uibModal, $timeout, planService){
  var vm = this;
  var _planName;
  var _planLength = 12;
  var currentUser = userService.getUser();
  currentUser.then(function(info){
    vm.welcomemessage = "Welcome Home, "
    vm.user = info.data
     _planName = (vm.user.firstName + '\'s ' + 'Plan' )
  })
  vm.plan ={
    planName: function(newName){
      return arguments.length ? (_planName = newName) : _planName;
    },
    planLength: function(newLength){
      return arguments.length ? (_planLength = newLength) : _planLength;
    },
    day1:{
      name:'',
      rest:false,
      exercises:[]
    },
    day2:{
      name:'',
      rest:false,
      exercises:[]
    },
    day3:{
      name:'',
      rest:false,
      exercises:[]
    },
    day4:{
      name:'',
      rest:false,
      exercises:[]
    },
    day5:{
      name:'',
      rest:false,
      exercises:[]
    },
    day6:{
      name:'',
      rest:false,
      exercises:[]
    },
    day7:{
      name:'',
      rest:false,
      exercises:[]
    }
  }
  vm.getExercise = function (val){
      return $http.get('http://localhost:8080/exercise/'+val).then(function(response){
    return response.data.map(function(item){
      return item.id
    });
  })
}
  vm.length= function(){
    var i = vm.plan.planName();
    vm.plan.planName = i;
    $scope.$broadcast('planName', vm.plan.planName)
    document.getElementById('planNameForm').classList.add("hidden");
    document.getElementById('planLengthForm').classList.remove("hidden");
  }
  vm.day1 = function(){
    var i = vm.plan.planLength();
    vm.plan.planLength = i;
    $scope.$broadcast('planLength', vm.plan.planLength)
    document.getElementById('planLengthForm').classList.add("hidden");
    document.getElementById('planDay1Form').classList.remove("hidden");
  }
  vm.day1.prototype ={
    showWorkout: function(name){
      vm.plan.day1.name = name;
      document.getElementById('day1Form').classList.add("hidden");
      document.getElementById('day1WorkoutForm').classList.remove("hidden");
    },
    addWorkout: function(){
      document.getElementById('day1Form').classList.add("hidden");
      document.getElementById('planDay1Form').classList.remove("hidden")
      document.getElementById('planDay2Form').classList.add("hidden");
      document.getElementById('planDay3Form').classList.add("hidden");
      document.getElementById('planDay4Form').classList.add("hidden");
      document.getElementById('planDay5Form').classList.add("hidden");
      document.getElementById('planDay6Form').classList.add("hidden");
      document.getElementById('planDay7Form').classList.add("hidden");
      document.getElementById('day1WorkoutForm').classList.remove("hidden");
    },
    selectMatch: function(val, set, reps){
      var exercise = {
        numOfSets:set,
        numOfReps:reps,
        sets:[],
        total:0,
        name:val,
        exerciseId:''
      }
      var id = exerciseService.getExercise(val)
      id.then(function(response){
        for (var i = 0; i < response.data.length; i++) {
        if (response.data[i].id == val){
          exercise.exerciseId = response.data[i]._id;
          break;
          }else {
            exercise.exerciseId = false;
          }
        }
        vm.plan.day1.exercises.push(exercise);
        $scope.$broadcast('day1', vm.plan.day1)
      })
    }
  }
  vm.day2= function(){
    $scope.$broadcast('day1', vm.plan.day1)
    document.getElementById('planDay1Form').classList.add("hidden");
    document.getElementById('planDay2Form').classList.remove("hidden");
  }
  vm.day2.prototype ={
    showWorkout: function(name){
      vm.plan.day2.name = name;
      document.getElementById('day2Form').classList.add("hidden");
      document.getElementById('day2WorkoutForm').classList.remove("hidden");
    }
    addWorkout: function(){
      document.getElementById('day2Form').classList.add("hidden");
      document.getElementById('planDay2Form').classList.remove("hidden")
      document.getElementById('planDay1Form').classList.add("hidden");
      document.getElementById('planDay3Form').classList.add("hidden");
      document.getElementById('planDay4Form').classList.add("hidden");
      document.getElementById('planDay5Form').classList.add("hidden");
      document.getElementById('planDay6Form').classList.add("hidden");
      document.getElementById('planDay7Form').classList.add("hidden");
      document.getElementById('day2WorkoutForm').classList.remove("hidden");
    },
    selectMatch: function(val, set, reps){
      var exercise = {
        numOfSets:set,
        numOfReps:reps,
        sets:[],
        total:0,
        name:val,
        exerciseId:''
      }
      var id = exerciseService.getExercise(val)
      id.then(function(response){
        for (var i = 0; i < response.data.length; i++) {
        if (response.data[i].id == val){
          exercise.exerciseId = response.data[i]._id;
          break;
          }else {
            exercise.exerciseId = false;
          }
        }
        vm.plan.day2.exercises.push(exercise);
        $scope.$broadcast('day2', vm.plan.day2)
      })
    }
  }
  vm.day3= function(){
    $scope.$broadcast('day2', vm.plan.day2)
    document.getElementById('planDay2Form').classList.add("hidden");
    document.getElementById('planDay3Form').classList.remove("hidden");
  }
  vm.day3.prototype ={
    showWorkout: function(name){
      vm.plan.day3.name = name;
      document.getElementById('day3Form').classList.add("hidden");
      document.getElementById('day3WorkoutForm').classList.remove("hidden");
    },
    addWorkout: function(){
      document.getElementById('day3Form').classList.add("hidden");
      document.getElementById('planDay3Form').classList.remove("hidden")
      document.getElementById('planDay1Form').classList.add("hidden");
      document.getElementById('planDay2Form').classList.add("hidden");
      document.getElementById('planDay4Form').classList.add("hidden");
      document.getElementById('planDay5Form').classList.add("hidden");
      document.getElementById('planDay6Form').classList.add("hidden");
      document.getElementById('planDay7Form').classList.add("hidden");
      document.getElementById('day3WorkoutForm').classList.remove("hidden");
    },
    selectMatch: function(val, set, reps){
      var exercise = {
        numOfSets:set,
        numOfReps:reps,
        sets:[],
        total:0,
        name:val,
        exerciseId:''
      }
      var id = exerciseService.getExercise(val)
      id.then(function(response){
        for (var i = 0; i < response.data.length; i++) {
        if (response.data[i].id == val){
          exercise.exerciseId = response.data[i]._id;
          break;
          }else {
          exercise.exerciseId = false;
          }
        }
        vm.plan.day3.exercises.push(exercise);
        $scope.$broadcast('day3', vm.plan.day3)
      })
    }
  }
  vm.day4= function(){
    $scope.$broadcast('day3', vm.plan.day3)
    document.getElementById('planDay3Form').classList.add("hidden");
    document.getElementById('planDay4Form').classList.remove("hidden");
  }
  vm.day4.prototype ={
    showWorkout: function(name){
      vm.plan.day4.name = name;
      document.getElementById('day4Form').classList.add("hidden");
      document.getElementById('day4WorkoutForm').classList.remove("hidden");
    },
    addWorkout: function(){
      document.getElementById('day4Form').classList.add("hidden");
      document.getElementById('planDay4Form').classList.remove("hidden")
      document.getElementById('planDay1Form').classList.add("hidden");
      document.getElementById('planDay2Form').classList.add("hidden");
      document.getElementById('planDay3Form').classList.add("hidden");
      document.getElementById('planDay5Form').classList.add("hidden");
      document.getElementById('planDay6Form').classList.add("hidden");
      document.getElementById('planDay7Form').classList.add("hidden");
      document.getElementById('day4WorkoutForm').classList.remove("hidden");
    },
    selectMatch: function(val, set, reps){
      var exercise = {
        numOfSets:set,
        numOfReps:reps,
        sets:[],
        total:0,
        name:val,
        exerciseId:''
      }
      var id = exerciseService.getExercise(val)
      id.then(function(response){
        for (var i = 0; i < response.data.length; i++) {
        if (response.data[i].id == val){
          exercise.exerciseId = response.data[i]._id;
          break;
          }else {
            exercise.exerciseId = false;
          }
        }
        vm.plan.day4.exercises.push(exercise);
        $scope.$broadcast('day4', vm.plan.day4)
      })
    }
  }
  vm.day5 = function(){
    $scope.$broadcast('day4', vm.plan.day4)
    document.getElementById('planDay4Form').classList.add("hidden");
    document.getElementById('planDay5Form').classList.remove("hidden");
  }
  vm.day5.prototype ={
    showWorkout: function(name){
      vm.plan.day5.name = name;
      document.getElementById('day5Form').classList.add("hidden");
      document.getElementById('day5WorkoutForm').classList.remove("hidden");
    },
    addWorkout: function(){
      document.getElementById('day5Form').classList.add("hidden");
      document.getElementById('planDay5Form').classList.remove("hidden")
      document.getElementById('planDay1Form').classList.add("hidden");
      document.getElementById('planDay2Form').classList.add("hidden");
      document.getElementById('planDay3Form').classList.add("hidden");
      document.getElementById('planDay4Form').classList.add("hidden");
      document.getElementById('planDay6Form').classList.add("hidden");
      document.getElementById('planDay7Form').classList.add("hidden");
      document.getElementById('day5WorkoutForm').classList.remove("hidden");
    },
    selectMatch: function(val, set, reps){
      var exercise = {
        numOfSets:set,
        numOfReps:reps,
        sets:[],
        total:0,
        name:val,
        exerciseId:''
      }
      var id = exerciseService.getExercise(val)
      id.then(function(response){
        for (var i = 0; i < response.data.length; i++) {
        if (response.data[i].id == val){
          exercise.exerciseId = response.data[i]._id;
          break;
          }else {
            exercise.exerciseId = false;
          }
        }
        vm.plan.day5.exercises.push(exercise);
        $scope.$broadcast('day5', vm.plan.day5)
      })
    }
  }
  vm.day6= function(){
    $scope.$broadcast('day5', vm.plan.day5)
    document.getElementById('planDay5Form').classList.add("hidden");
    document.getElementById('planDay6Form').classList.remove("hidden");
  }
  vm.day6.prototype ={
    showWorkout: function(name){
      vm.plan.day6.name = name;
      document.getElementById('day6Form').classList.add("hidden");
      document.getElementById('day6WorkoutForm').classList.remove("hidden");
    },
    addWorkout: function(){
      document.getElementById('day6Form').classList.add("hidden");
      document.getElementById('planDay6Form').classList.remove("hidden")
      document.getElementById('planDay1Form').classList.add("hidden");
      document.getElementById('planDay2Form').classList.add("hidden");
      document.getElementById('planDay3Form').classList.add("hidden");
      document.getElementById('planDay4Form').classList.add("hidden");
      document.getElementById('planDay5Form').classList.add("hidden");
      document.getElementById('planDay7Form').classList.add("hidden");
      document.getElementById('day6WorkoutForm').classList.remove("hidden");
    },
    selectMatch: function(val, set, reps){
      var exercise = {
        numOfSets:set,
        numOfReps:reps,
        sets:[],
        total:0,
        name:val,
        exerciseId:''
      }
      var id = exerciseService.getExercise(val)
      id.then(function(response){
      for (var i = 0; i < response.data.length; i++) {
        if (response.data[i].id == val){
          exercise.exerciseId = response.data[i]._id;
          break;
          }else {
            exercise.exerciseId = false;
          }
        }
        vm.plan.day6.exercises.push(exercise);
        $scope.$broadcast('day6', vm.plan.day6)
      })
    }
  }
  vm.day7= function(){
    $scope.$broadcast('day6', vm.plan.day6)
    document.getElementById('planDay6Form').classList.add("hidden");
    document.getElementById('planDay7Form').classList.remove("hidden");
  }
  vm.day7.prototype ={
    showWorkout: function(name){
      vm.plan.day7.name = name;
      document.getElementById('day7Form').classList.add("hidden");
      document.getElementById('day7WorkoutForm').classList.remove("hidden");
    },
    addWorkout: function(){
      document.getElementById('day7Form').classList.add("hidden");
      document.getElementById('planDay7Form').classList.remove("hidden")
      document.getElementById('planDay1Form').classList.add("hidden");
      document.getElementById('planDay2Form').classList.add("hidden");
      document.getElementById('planDay3Form').classList.add("hidden");
      document.getElementById('planDay4Form').classList.add("hidden");
      document.getElementById('planDay5Form').classList.add("hidden");
      document.getElementById('planDay6Form').classList.add("hidden");
      document.getElementById('day7WorkoutForm').classList.remove("hidden");
    },
    selectMatch: function(val, set, reps){
      var exercise = {
        numOfSets:set,
        numOfReps:reps,
        sets:[],
        total:0,
        name:val,
        exerciseId:''
      }
      var id = exerciseService.getExercise(val)
      id.then(function(response){
        for (var i = 0; i < response.data.length; i++) {
        if (response.data[i].id == val){
          exercise.exerciseId = response.data[i]._id;
          break;
          }else {
            exercise.exerciseId = false;
          }
        }
        vm.plan.day7.exercises.push(exercise);
        $scope.$broadcast('day7', vm.plan.day7)
      })
    }
  }
  $scope.animationsEnabled = true;

  $timeout($scope.open = function (type) {
    if(type == 'reviewPlan'){
      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: '/planMaker/reviewPlan.modal.html',
        controller: 'reviewPlanController',
        controllerAs: 'review',
        size:'lg',
        resolve: {
          planMaker: function(){
            return vm.plan
          }
        }
      });
    modalInstance.result.then(function (plan) {
     if(plan == 'ok'){
       var send = planService.createPlan(vm.plan)
       send.then(function(response){

        })
      }
      })
    }
  },1000)
}
