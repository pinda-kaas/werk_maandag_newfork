app.controller('OrdersCtrl', function ($scope, $filter, $location,configService, orderService) {

  console.log('ordersctrl started');

  debugger;

  //$scope.accounts=[];

  var testing = configService.config('development');

  var testing2 = orderService.getData(testing.url).then(function(result){
    debugger;

    $scope.accounts =result;
    console.log('scope.accounts:',$scope.accounts);
 });

});
