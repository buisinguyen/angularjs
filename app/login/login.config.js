export default function LoginConfig($stateProvider) {
    'ngInject';
    $stateProvider
    .state('login', {
      url: 'login',
      controller: 'LoginController',
      controllerAs: '$ctrl',
      templateUrl: 'login/login.template.html',
    });
  
  };