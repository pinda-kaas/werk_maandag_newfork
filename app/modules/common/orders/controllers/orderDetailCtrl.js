app.controller('OrderDetailCtrl', function ($scope, $filter, $location,configService, orderDetail) {

  $scope.orderDetail=  orderDetail;
  console.log('orderdetail ctrl',orderDetail);

});
