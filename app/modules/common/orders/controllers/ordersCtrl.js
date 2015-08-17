app.controller('OrdersCtrl', function ($scope, $filter, $location,configService) {

  console.log('ordersctrl started');

  var testing = configService.config('development');

  console.log(testing.url);



});
