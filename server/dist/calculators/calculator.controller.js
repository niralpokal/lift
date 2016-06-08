app.controller('calculatorController', calculator);

app.$inject = ['$scope'];

function calculator($scope){
  var vm = this;
  vm.computeBmi = function(data){
    var height = data.height;
    var weight = data.weight;
    var solution = (weight/(height*height)) * 703;
    var round = solution.toFixed(2);
    if(round < 18.50){
      vm.cat = "Underweight"
    } else if(round < 24.90){
      vm.cat = "Normal Weight"
    } else if (round < 29.90){
      vm.cat = "Overweight"
    }else{
      vm.cat = "Obesity"
    }
    vm.bmi = round
  }
}
