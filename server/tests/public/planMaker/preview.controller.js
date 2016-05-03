app.controller('previewController', previewController);
app.$inject = ['$scope', 'exerciseService']

function previewController($scope, exerciseService){
  $scope.showButton = false;
  $scope.$on('planName', function(event,value){
    $scope.planName = value
  })
  $scope.$on('planLength', function(event,value){
    $scope.planLength = value
  })
  $scope.$on('day1', function(event,value){
    $scope.day1 = value
  })
  $scope.$on('day2', function(event,value){
    $scope.day2 = value
  })
  $scope.$on('day3', function(event,value){
    $scope.day3 = value
  })
  $scope.$on('day4', function(event,value){
    $scope.day4 = value
  })
  $scope.$on('day5', function(event,value){
    $scope.day5 = value
  })
  $scope.$on('day6', function(event,value){
    $scope.day6 = value
  })
  $scope.$on('day7', function(event,value){
    $scope.day7 = value
  })
  $scope.$on('showSubmit', function(event){
    $scope.showButton = true;
  })
  $scope.saveDay = function(data){
  }
  $scope.getExerciseId = function(val, exercise){
    var id = exerciseService.getExercise(val);
    id.then(function(response){
      for (var i = 0; i < response.data.length; i++) {
      if (response.data[i].id == val){
        exercise.exerciseId = response.data[i]._id;
        break;
        }else {
          exercise.exerciseId = false;
        }
      }
    })
  }
}
