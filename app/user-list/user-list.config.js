export default function UsersConfig($stateProvider) {
    'ngInject';
  
    $stateProvider
    .state('users', {
      url: 'users',
      controller: 'UsersController',
      controllerAs: '$ctrl',
      templateUrl: 'user-list/user-list.template.html',
    });
  
  };