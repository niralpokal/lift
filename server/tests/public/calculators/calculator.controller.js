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
      vm.bmiCategory = "Underweight"
    } else if(round < 24.90){
      vm.bmiCategory = "Normal Weight"
    } else if (round < 29.90){
      vm.bmiCategory = "Overweight"
    }else{
      vm.bmiCategory  = "Obesity"
    }
    vm.bmi = round
  }
  vm.compute1RM = function(data){
    var weight = data.weight;
    var reps = data.reps;
    var max = (weight/((37/36)-((1/36)*reps)))
    var max2 = weight*(1 + (reps/30))
    var max3 = (weight*reps*.033)+weight
    console.log(max);
    console.log(max2);
    console.log(max3);
  }
}
