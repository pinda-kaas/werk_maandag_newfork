angular.module('WIP').factory('configService', function($http) {
  return {
    config: function(environment) {
      switch (environment) {
        case 'development':
          return {
            url: 'modules/common/orders/mock/ordersTabMockData.json'
          }
      }
    }
  };
});
