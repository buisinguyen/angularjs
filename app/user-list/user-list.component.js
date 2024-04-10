var usersModule = angular.module('appUsers', ['ui.router', 'ngResource']);

usersModule.
  component('userList', {
    templateUrl: 'user-list/user-list.template.html',
    // controller: ['usersService', '$scope',
    //   function ($resource, $scope) {
    //     $scope.ngUser = {
    //       firstName: "John",
    //       lastName: "Doe"
    //     };
    //     $resource.then(data => {
    //       $scope.users = data.data
    //       console.log(data.data, 'data')
    //     })
    //   }
    // ]
  })