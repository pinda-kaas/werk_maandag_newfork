app.controller('OrdersCtrl', function ($scope, $filter, $location, configService, orderData, settlementsData, completeOrders) {

  console.log('ordersctrl started');

  $scope.accounts = orderData;

  $scope.settlements = settlementsData;

  $scope.completeOrders = completeOrders;

  $scope.selectAdviser = function (adviser) {
    $scope.adviser= adviser;
  }
});
