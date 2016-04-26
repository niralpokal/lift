
app.controller('homeController', home);

app.$inject = ['$http', 'userService', '$location', '$route'];

function home($http, userService, $location, $route){
  var vm = this;
  var currentUser = userService.getUser();
  currentUser.then(function(info){
    vm.welcomemessage = "Welcome Home, "
    vm.user = info.data.firstName
  })

  vm.logout = function(info, path){
    var update = $http.delete('http://localhost:8080/login')
    update.then(function(data){
      $location.path('')
      $route.reload();
    })
  }
}
