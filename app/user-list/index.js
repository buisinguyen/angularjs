var usersModule = angular.module('appUsers', ['ui.router', 'ngResource']);
// Controllers
import UsersController from './user-list.controller.js';
usersModule.controller('UsersController', UsersController);
// Config route
import UsersConfig from './user-list.config.js';
usersModule.config(UsersConfig);
// Services
import UserService from './user-list.services.js'
usersModule.service('UserService', UserService);


