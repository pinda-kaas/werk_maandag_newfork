app.controller('mainCtrl', function ($scope) {

  console.log('mainstarted');

  $scope.gotoOrdersTab= function(){
    $state.go('orders');
    console.log('orders');
  }

  $scope.gotoSettlementsTab=function(){
    $state.go('settlements');
    console.log('settlements');
  }


});
