app.controller('OrdersCtrl', function ($scope, $filter, $location, configService, orderData) {

    console.log('ordersctrl started');

    $scope.accounts = orderData;
});
