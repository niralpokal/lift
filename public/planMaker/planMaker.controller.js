app.controller('planMakerController', planMaker);

app.$inject = ['$http', '$location', '$scope', 'userService'];

function planMaker($http, $location, $scope, userService){
  var vm = this;
  var currentUser = userService.getUser();
  currentUser.then(function(info){
    vm.welcomemessage = "Welcome Home, "
    vm.user = info.data
    document.getElementById('planNameForm').value = (vm.user.firstName + '\'s '+ 'Plan')
  })

}
