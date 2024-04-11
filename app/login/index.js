let loginModule = angular.module('appLogin', ['ui.router', 'ngResource']);
// Controllers
import LoginController from './login.controller.js';
loginModule.controller('LoginController', LoginController);
// Config route
import LoginConfig from './login.config.js';
loginModule.config(LoginConfig);
// Services
import LoginService from './login.services.js'
loginModule.service('LoginService', LoginService);
