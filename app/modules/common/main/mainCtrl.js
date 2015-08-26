app.controller('mainCtrl', function ($scope,$state) {

  console.log('mainctrl started');

  $scope.gotoOrdersTab= function(){
    debugger;
    $state.go('orders');
    console.log('go to orders tab from mainctrl');
  };

  $scope.gotoSettlementsTab=function(){
    debugger;
    $state.go('settlements');
    console.log('go to settlements tab from mainctrl');
  };

  $scope.gotoCompleteOrders=function(){
    debugger;
    $state.go('completeOrders');
    console.log('go to complete tab from mainctrl!');
  }




});
