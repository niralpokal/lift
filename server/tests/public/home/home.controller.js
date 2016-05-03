
app.controller('homeController', home);

app.$inject = ['$http', 'userService', '$location', '$route', '$window'];

function home($http, userService, $location, $route, $window){
  var vm = this;
  var currentUser = userService.getUser();
  currentUser.then(function(info){
    vm.welcomemessage = "Welcome Home, "
    vm.user = info.data
  })

  vm.createPlan = function(){
    //document.getElementById('userPlan').className ="hidden"
    document.getElementById('planMaker').className ="row"
  }

  vm.logout = function(info, path){
    var update = $http.delete('https://localhost:8080/login')
    update.then(function(data){
      var origin = window.location.origin
      $window.location.replace(origin);
    })
  }
}
