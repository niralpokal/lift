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
    vm.ninetyFive = (max3*.95).toFixed(0)
    vm.ninety = (max3*.90).toFixed(0)
    vm.eightyFive = (max3*.85).toFixed(0)
    vm.eighty = (max3*.80).toFixed(0)
    vm.seventyFive = (max3*.75).toFixed(0)
    vm.seventy = (max3*.70).toFixed(0)
    vm.sixtyFive = (max3*.65).toFixed(0)
    vm.sixty = (max3*.60).toFixed(0)
    vm.fiftyFive = (max3*.55).toFixed(0)
    vm.fifty = (max3*.50).toFixed(0)
    vm.max = max3.toFixed(0)
  }
  vm.computeWarmup = function(data){
    var start = data.start
    var end = data.end
    var five = ((end*5)* .35)/5
    var three = ((end*5)* .34)/3
    var two = ((end*5)* .3175)/2
    vm.five = Math.round(five/10)*10
    vm.three = Math.round(three/10)*10
    vm.two = Math.round(two/10)*10
    vm.end = end
  }
  vm.computeIdeal = function(data){
    if(data.option == 'Male'){
      var height = ((data.feet *12)+ data.inch)*2.54
      var base = (height -100)*2.2;
      var fivePercent = (73*.055)+base
      var eightPercent = (112*.08)+base
      var tenPercent = (140*.10)+ base
      var twelvePercent = (150*.12)+ base
      var fifteenPercent = (167*.15)+base
      console.log(base, fivePercent, eightPercent, tenPercent, twelvePercent, fifteenPercent);
    }
    console.log(data);
  }
}
