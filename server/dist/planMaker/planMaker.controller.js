app.controller('planMakerController', planMaker);

app.$inject = ['$http', '$location', '$scope', 'userService', 'exerciseService'];

function planMaker($http, $location, $scope, userService, exerciseService){
  var vm = this;
  var _planName;
  var _planLength = 12;
  var currentUser = userService.getUser();
  var match  ={
    asyncSelected:'',
    sets:'',
    reps:''
  }
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
      rest:false,
      exercises:[]
    },
    day2:{
      rest:false,
      exercises:[]
    },
    day3:{
      rest:false,
      exercises:[]
    },
    day4:{
      rest:false,
      exercises:[]
    },
    day5:{
      rest:false,
      exercises:[]
    },
    day6:{
      rest:false,
      exercises:[]
    },
    day7:{
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
    document.getElementById('planNameForm').className = "hidden panel panel-default";
    document.getElementById('planLengthForm').className = "panel panel-default";
  }
  vm.day1 = function(){
    document.getElementById('planLengthForm').className = "hidden panel panel-default";
    document.getElementById('planDay1Form').className = "panel panel-default";
  }
  vm.day1.prototype ={
    showWorkout: function(){
      document.getElementById('day1Form').className = "hidden";
      document.getElementById('day1WorkoutForm').className = "";
    },
    selectMatch: function(val, set, reps){
      var exercise = {
        sets:set,
        reps:reps,
        weight:0,
        total:0,
        name:val,
        exerciseId:''
      }
      var id = exerciseService.getExercise(val)
      id.then(function(response){
        for (var i = 0; i < response.data.length; i++) {
        if (response.data[i].id == val){
          exercise.exerciseId = response.data[i]._id;
          vm.plan.day1.exercises.push(exercise);
          }
        }
      })
    }
  }
  vm.day2= function(){
    document.getElementById('planDay1Form').className = "hidden panel panel-default";
    document.getElementById('planDay2Form').className = "panel panel-default";
  }
  vm.day2.prototype ={
    showWorkout: function(){
      document.getElementById('day2Form').className = "hidden";
      document.getElementById('day2WorkoutForm').className = "";
    },
    selectMatch: function(val, set, reps){
      var exercise = {
        sets:set,
        reps:reps,
        weight:0,
        total:0,
        name:val,
        exerciseId:''
      }
      var id = exerciseService.getExercise(val)
      id.then(function(response){
        for (var i = 0; i < response.data.length; i++) {
        if (response.data[i].id == val){
          exercise.exerciseId = response.data[i]._id;
          vm.plan.day2.exercises.push(exercise);
          }
        }
      })
    }
  }
  vm.day3= function(){
    document.getElementById('planDay2Form').className = "hidden panel panel-default";
    document.getElementById('planDay3Form').className = "panel panel-default";
  }
  vm.day3.prototype ={
    showWorkout: function(){
      document.getElementById('day3Form').className = "hidden";
      document.getElementById('day3WorkoutForm').className = "";
    },
    selectMatch: function(val, set, reps){
      var exercise = {
        sets:set,
        reps:reps,
        weight:0,
        total:0,
        name:val,
        exerciseId:''
      }
      var id = exerciseService.getExercise(val)
      id.then(function(response){
        for (var i = 0; i < response.data.length; i++) {
        if (response.data[i].id == val){
          exercise.exerciseId = response.data[i]._id;
          vm.plan.day3.exercises.push(exercise);
          }
        }
      })
    }
  }
  vm.day4= function(){
    document.getElementById('planDay3Form').className = "hidden panel panel-default";
    document.getElementById('planDay4Form').className = "panel panel-default";
  }
  vm.day4.prototype ={
    showWorkout: function(){
      document.getElementById('day4Form').className = "hidden";
      document.getElementById('day4WorkoutForm').className = "";
    },
    selectMatch: function(val, set, reps){
      var exercise = {
        sets:set,
        reps:reps,
        weight:0,
        total:0,
        name:val,
        exerciseId:''
      }
      var id = exerciseService.getExercise(val)
      id.then(function(response){
        for (var i = 0; i < response.data.length; i++) {
        if (response.data[i].id == val){
          exercise.exerciseId = response.data[i]._id;
          vm.plan.day4.exercises.push(exercise);
          }
        }
      })
    }
  }
  vm.day5 = function(){
    document.getElementById('planDay4Form').className = "hidden panel panel-default";
    document.getElementById('planDay5Form').className = "panel panel-default";
  }
  vm.day5.prototype ={
    showWorkout: function(){
      document.getElementById('day5Form').className = "hidden";
      document.getElementById('day5WorkoutForm').className = "";
    },
    selectMatch: function(val, set, reps){
      var exercise = {
        sets:set,
        reps:reps,
        weight:0,
        total:0,
        name:val,
        exerciseId:''
      }
      var id = exerciseService.getExercise(val)
      id.then(function(response){
        for (var i = 0; i < response.data.length; i++) {
        if (response.data[i].id == val){
          exercise.exerciseId = response.data[i]._id;
          vm.plan.day5.exercises.push(exercise);
          }
        }
      })
    }
  }
  vm.day6= function(){
    document.getElementById('planDay5Form').className = "hidden panel panel-default";
    document.getElementById('planDay6Form').className = "panel panel-default";
  }
  vm.day6.prototype ={
    showWorkout: function(){
      document.getElementById('day6Form').className = "hidden";
      document.getElementById('day6WorkoutForm').className = "";
    },
    selectMatch: function(val, set, reps){
      var exercise = {
        sets:set,
        reps:reps,
        weight:0,
        total:0,
        name:val,
        exerciseId:''
      }
      var id = exerciseService.getExercise(val)
      id.then(function(response){
        for (var i = 0; i < response.data.length; i++) {
        if (response.data[i].id == val){
          exercise.exerciseId = response.data[i]._id;
          vm.plan.day6.exercises.push(exercise);
          }
        }
      })
    }
  }
  vm.day7= function(){
    document.getElementById('planDay6Form').className = "hidden panel panel-default";
    document.getElementById('planDay7Form').className = "panel panel-default";
  }
  vm.day7.prototype ={
    showWorkout: function(){
      document.getElementById('day7Form').className = "hidden";
      document.getElementById('day7WorkoutForm').className = "";
    },
    selectMatch: function(val, set, reps){
      var exercise = {
        sets:set,
        reps:reps,
        weight:0,
        total:0,
        name:val,
        exerciseId:''
      }
      var id = exerciseService.getExercise(val)
      id.then(function(response){
        for (var i = 0; i < response.data.length; i++) {
        if (response.data[i].id == val){
          exercise.exerciseId = response.data[i]._id;
          vm.plan.day7.exercises.push(exercise);
          }
        }
      })
    }
  }
}
