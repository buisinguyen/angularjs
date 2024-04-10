// import './lit-element/custom-input.ts';
// import './lit-element/test.ts';
{/* <script src="../../../node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>
<script src="../../../node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js"></script> */}

import "./lib/angular/angular.js"
import "./lib/webcomponents-loader.js"
// import "./../node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js"
// import "./../node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js"
import "./lib/angular-ui-router.js";
// import "./lib/jquery/dist/jquery.js"
import "./lib/angular-resource/angular-resource.js"
import "./lib/angular-route/angular-route.js"
// import './dist/bundle.js'
import './user-list/index.js'
import './lit-element/test.js'
import './lit-element/custom-input.js'



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