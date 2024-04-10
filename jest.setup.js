// jest.setup.js
const angular = require('angular');

// Initialize AngularJS module
const app = angular.module('app', ['appUsers']);

// Example service or controller registration
app.service('UserServices', function () {
    this.welcomeFn = () => {
        return 'Hello from UserServices!';
    };
});

// Export AngularJS module for use in tests
module.exports = app;