app.controller('OrderDetailCtrl', function ($scope, $filter, $location,configService, orderDetail) {

  $scope.orderDetail=  orderDetail;

  $scope.detailRows= orderDetail.rows;
  console.log('orderdetail ctrl',orderDetail);

});
