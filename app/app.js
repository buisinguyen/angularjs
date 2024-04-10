// import './lit-element/custom-input.ts';
// import './lit-element/test.ts';
import "./lib/angular/angular.js"
import "./lib/angular-ui-router.js";
import "./lib/jquery/dist/jquery.js"
import "./lib/angular-resource/angular-resource.js"
import "./lib/angular-route/angular-route.js"
import './user-list/index.js'
// import './lit-element/test.js'
import './dist/bundle.js'

const requires = [
  "ui.router",
  'appUsers',
];

window.app = angular.module('app', requires)
// .directive('myLitElement', function () {
//   return {
//     restrict: 'E',
//     link: function (scope, element) {
//       const litElement = document.createElement('my-lit-element');
//       element[0].appendChild(litElement);
//     }
//   };
// });

angular.bootstrap(document.getElementById('app'), ['app']);