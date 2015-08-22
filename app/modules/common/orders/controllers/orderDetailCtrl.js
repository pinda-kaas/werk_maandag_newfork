app.controller('OrderDetailCtrl', function ($scope, $filter, $location, configService, orderDetails) {

    debugger;
    $scope.orderDetails = orderDetails;

    $scope.collapsed = true;

    //$scope.detailRows= orderDetail.rows;
    console.log('orderdetail ctrl', orderDetails);

});
