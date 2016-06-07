app.controller('calculatorController', calculator);

app.$inject = ['$scope'];

function calculator($scope){
  var vm = this;
  vm.computeBmi = function(data){
    var height = data.height;
    var weight = data.weight;
    var solution = (weight/(height*height)) * 703;
    vm.bmi = solution;
  }
}
