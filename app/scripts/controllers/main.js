'use strict';

/**
 * @ngdoc function
 * @name angularmainForkApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularmainForkApp
 */
angular.module('app')
  .controller('MainCtrl', function ($scope) {
    $scope.hello = 'hi';
  });
//.directive('sayHello',function(){
//  return {
//    restrict: 'E',
//    template:'<div>{{hello}}</div>',
//    controller: function ($scope) {
//      $scope.hello = $scope.hello + ' and hello from controller';
//    },
//    link: function (scope) {
//      scope.hello = scope.hello + ' hello from link';
//    }
//  }
//})
