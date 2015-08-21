var underscore = angular.module('underscore', []);
underscore.factory('_', ['$window', function () {
    return $window._;
}]);

var app = angular.module('WIP', ['ui.router', 'underscore', 'ui.bootstrap', 'smart-table']);

console.log('this is the app starting up');

app.config(function ($stateProvider) {
    // Now set up the states

    $stateProvider
        .state('orders', {
            templateUrl: 'modules/common/orders/partials/tabs.html',
            controller: 'OrdersCtrl',
            resolve: {
                orderData: function (wipService, configService) {
                    console.log('resolve orderdata');
                    return wipService.getData(configService.config('mock_orders').url);
                }
            }
        })
        .state('settlements', {
            templateUrl: 'modules/common/orders/partials/tabs.html',
            controller: 'AwaitingSettlementsCtrl',
            resolve: {
                settlementData: function (wipService, configService) {
                    console.log('resolve settlementData');
                    return wipService.getData(configService.config('mock_settlements').url);
                }
            }
        })
        .state('completeOrders', {
            templateUrl: 'modules/common/orders/partials/tabs.html',
            controller: 'CompleteOrdersCtrl',
            resolve: {
                completeOrders: function (wipService, configService) {
                    return wipService.getData(configService.config('mock_complete_orders').url);
                }
            }
        })
      .state('orderDetail', {
        templateUrl: 'modules/common/orders/partials/detail.html',
        controller: 'OrderDetailCtrl',
        resolve: {
          orderDetails: function (wipService, configService) {
            console.log('order detail resolving');
            return wipService.getData(configService.config('mock_order_detail').url);
          }
        }
      });
});

app.run(function ($state) {
    console.log('run');
    $state.go('orderDetail');
});

