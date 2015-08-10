angular.module('app').factory('httpBasedService', function($http) {
  return {
    sendMessage: function(msg) {
      return $http.get('somthing.json?msg=' + msg)
        .then(function(result) {
          return result.data;
        });
    }
  };
});
