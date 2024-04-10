var usersModule = angular.module('appUsers', ['ui.router', 'ngResource']);
// Controllers
import UsersController from './user-list.controller.js';
usersModule.controller('UsersController', UsersController);
// Config route
import UsersConfig from './user-list.config.js';
usersModule.config(UsersConfig);
// Services
import userService from './user-list.services.js'
usersModule.service('userService', userService);



// Include our UI-Router config settings    
// usersModule.config(function($stateProvider) {
//     var usersState = {
//       name: 'users',
//       url: '/users',
//       templateUrl: 'user-list/user-list.template.html'
//     }
  
//     $stateProvider.state(usersState);
//   });

