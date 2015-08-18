angular.module('WIP').factory('configService', function($http) {
  return {
    config: function(environment) {
      switch (environment) {
        case 'mock_orders':
          return {
            url: 'modules/common/orders/mock/ordersTabMockData.json'
          };
        case 'mock_settlements':
          return {
            url: 'modules/common/orders/mock/settlementsTabMockData.json'
          }
      }
    }
  };
});
