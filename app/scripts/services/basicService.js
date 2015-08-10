angular.module('app').factory('basicService', function(){
  return {
    exciteText: function(msg) {
      return msg + '!!!'
    }
  };
});
