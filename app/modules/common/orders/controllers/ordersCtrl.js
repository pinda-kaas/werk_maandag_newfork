app.controller('OrdersCtrl', function ($scope, $filter, $location,configService, orderService) {

  console.log('ordersctrl started');

  debugger;

  $scope.accounts=[];

  var testing = configService.config('development');

  var testing2 = orderService.getData(testing.url).then(function(result){
    //debugger;

    $scope.accounts =result;
    console.log('mock data json',$scope.accounts);
 });

});
//
//app
//  .directive('pageSelect', function() {
//    return {
//      restrict: 'E',
//      template: '<input type="text" class="select-page" ng-model="inputPage" ng-change="selectPage(inputPage)">',
//      link: function(scope, element, attrs) {
//        scope.$watch('currentPage', function(c) {
//          scope.inputPage = c;
//        });
//      }
//    }
//  });
