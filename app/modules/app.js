var underscore = angular.module('underscore', []);
underscore.factory('_', ['$window', function() {
  return $window._;
}]);

var app =angular.module('WIP', ['ui.router','underscore','ui.bootstrap','smart-table']);

console.log('this is the app starting up');

app.config(function($stateProvider) {
  // Now set up the states

  $stateProvider
    .state('orders', {
      templateUrl: 'modules/common/orders/partials/tabs.html',
      controller: 'OrdersCtrl'
    });
});

//app.run(function($state){
//  console.log('run');
//  //$state.go('orders');
//});

