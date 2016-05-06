app.controller('exercisesController', exercise);

app.$inject = ['$scope', 'exerciseService', '$uibModal']

function exercise($scope, exerciseService, $uibModal){
  var vm = this;
  vm.search = function(data){
    var update = exerciseService.getExercise(data);
    update.then(function(results){
      vm.number = results.data.length
      vm.list = results.data
      console.log(vm.list[0]);
    })
  }
  vm.open = function(data){
    vm.guide = data
    $scope.open('exercise')
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
            return  vm.guide;
          }
        }
      })
    }
  }
}
