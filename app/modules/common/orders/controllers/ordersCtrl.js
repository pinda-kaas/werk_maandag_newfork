app.controller('OrdersCtrl', function ($scope, $filter, $location,configService, orderService) {

  console.log('ordersctrl started');

  var testing = configService.config('development');

  var testing2 = orderService.getData(testing.url).then(function(result){
    debugger;
   console.log('mock data json',result);
 });


});
