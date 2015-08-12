app.directive('tableFilter', function ($filter) {
  return {
    restrict: 'E',
    templateUrl: 'modules/common/orders/partials/tableFilter.html',
    link: function ($scope) {
      $scope.assetTypes = [
        {id: 1, title: 'SMA'},
        {id: 2, title: 'Super'},
        {id: 3, title: 'Pension'},
        {id: 0, title: 'All'}
      ];
      $scope.$watch('choice', function (newVal, oldVal) {
        console.log(newVal);
        console.log(oldVal);

        if (newVal == 0) {
          $scope.filtered=$scope.data;
        }
        else {
          $scope.filtered = $filter('filter')($scope.data, {id: $scope.assetType});
        }
      });
    }
  };
});
