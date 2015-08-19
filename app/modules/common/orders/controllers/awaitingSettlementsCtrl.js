app.controller('AwaitingSettlementsCtrl', function ($scope, $filter, $location,configService, settlementData) {

  console.log('awaiting settlements ctrl started');

  debugger;

  $scope.settlements=  settlementData;

  console.log('settlementdata in ctrl',settlementData);

});
