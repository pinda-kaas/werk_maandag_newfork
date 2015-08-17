angular.module('WIP').factory('orderService', function($http) {
  return  {
    getData: function(url) {
      return $http.get(url)
        .then(function(result) {
          return result.data;
        });
    }
  };
});
