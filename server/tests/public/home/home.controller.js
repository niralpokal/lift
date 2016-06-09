
app.controller('homeController', home);

app.$inject = ['$http', 'userService', '$location', '$route', '$window', '$scope'];

function home($http, userService, $location, $route, $window, $scope){
  var vm = this;
  var currentUser = userService.getUser();
  currentUser.then(function(info){
    vm.welcomemessage = "Welcome Home, "
    vm.user = info.data
  })

  vm.gohome =function(){
    document.getElementById('userPlan').classList.remove("hidden");
    document.getElementById('planMaker').classList.add('hidden')
    document.getElementById('planTemplate').classList.remove('hidden');
    document.getElementById('exercises').classList.add("hidden");
    document.getElementById('noPlan').classList.remove('hidden');
    document.getElementById('addToPlan').classList.add("hidden");
  }

  vm.createPlan = function(){
    document.getElementById('userPlan').classList.add("hidden");
    document.getElementById('planMaker').classList.remove('hidden')
    document.getElementById('exercises').classList.add("hidden");
  }
  vm.getExercises = function(){
    document.getElementById('userPlan').classList.add("hidden");
    document.getElementById('planMaker').classList.add("hidden");
    document.getElementById('exercises').classList.remove("hidden");
  }
  vm.getCalculators = function(string){
    document.getElementById('userPlan').classList.add("hidden");
    document.getElementById('planMaker').classList.add("hidden");
    document.getElementById('exercises').classList.add("hidden");
    document.getElementById(string).classList.remove("hidden")
  }
  $scope.$on('selectPlan', function(event ,data){
    $scope.$broadcast('selectPlanNav', data)
  })
  $scope.$on('selectedPlanNav', function(event, data){
    $scope.$broadcast('selectedPlan', data)
    vm.gohome()
  })
  $scope.$on('createPlan', function(event, data){
    $route.reload()
  })
  vm.logout = function(info, path){
    var update = $http.delete('/login')
    update.then(function(data){
      var origin = window.location.origin
      $window.location.replace(origin);
    })
  }
}
