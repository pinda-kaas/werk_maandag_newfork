app.directive('tableFilter', function ($filter) {
  return {
    restrict: 'E',
    templateUrl: 'modules/common/orders/partials/tableFilter.html',
    link: function ($scope) {
      $scope.assetTypes = [
        {id: 1, name: 'SMA'},
        {id: 2, name: 'Super'},
        {id: 3, name: 'Pension'},
        {id: 0, name: 'All'}
      ];

      $scope.tradeTypes=[
        {id: 1, name: 'SELL'},
        {id: 2, name: 'BUY'},
        {id: 0, name: 'All'}];

      //$scope.$watch('tradeType', function (newVal, oldVal) {
      //
      //  console.log('scope.dt:',$scope.dt);
      //  console.log(newVal);
      //  console.log(oldVal);
      //
      //  if (newVal == 0) {
      //    $scope.filtered=$scope.dt;
      //  }
      //  else {
      //    $scope.filtered = $filter('filter')($scope.dt, {id: $scope.tradeType});
      //  }
      //});


    }
  };
});
