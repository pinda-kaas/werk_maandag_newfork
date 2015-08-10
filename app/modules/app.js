var app =angular.module('WIP', ['ui.router','ui.bootstrap','ngTable','ngTableExport']);

console.log('this is the app starting up');
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

