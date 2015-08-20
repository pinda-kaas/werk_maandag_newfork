app.directive('tableFilter', function ($filter) {
  return {
    restrict: 'E',
    templateUrl: 'modules/common/orders/partials/tableFilter.html',
    controller: function ($scope) {

      //todo remove this begin date stuff


      //end date stuff

      //todo remove hardcoded
      $scope.assetTypes = [
        {name: 'SMA'},
        {name: 'Super'},
        {name: 'Aus. Equities'},
        {name: 'Intl. Equities'},
        {name: 'Managed Investments'},
        {name: 'TD\'s'},
        {name: 'Pension'},
        {name: 'All'}
      ];

      $scope.tradeTypes = [
        {name: 'SELL'},
        {name: 'BUY'},
        {name: 'All'}];
    },
    link: function ($scope) {


    }
  };
});
