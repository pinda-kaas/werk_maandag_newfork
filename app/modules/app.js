var app =angular.module('WIP', ['ui.router','ngTable','ui.bootstrap','ngTableExport']);

console.log('this is the controller');
app.config(function($stateProvider) {
  // Now set up the states

  $stateProvider
    .state('orders', {
      templateUrl: 'modules/common/orders/partials/tabs.html',
      controller: 'OrdersCtrl'
    });
});

app.run(function($state){
  console.log('run');
  $state.go('orders');
});

