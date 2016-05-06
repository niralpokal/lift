app.controller('exercisesController', exercise);

app.$inject = ['$scope', 'exerciseService']

function exercise($scope, exerciseService){
  var vm = this;
  vm.search = function(data){
    var update = exerciseService.getExercise(data);
    update.then(function(results){
      vm.number = results.data.length
    })
  }

}
