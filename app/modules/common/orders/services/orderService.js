angular.module('WIP').factory('orderService', function($http) {
  return  {
    getData: function(url) {
      console.log('getdata method on orderservice');
      return $http.get(url)
        .then(function(result) {
          return result.data;
        });
    }
  };
});
