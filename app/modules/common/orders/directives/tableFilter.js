app.directive('tableFilter', function ($filter) {
  return {
    restrict: 'E',
    templateUrl: 'modules/common/orders/partials/tableFilter.html',
    controller:function($scope){
       $scope.container = {
         one: null,
         two: null
       };

       $scope.open = function($event) {
         $event.preventDefault();
         $event.stopPropagation();

         $scope.opened = true;
       };

       $scope.dateOptions = {
         formatYear: 'yy',
         startingDay: 1
       };

       $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
       $scope.format = $scope.formats[0];
    },
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

    }
  };
});
