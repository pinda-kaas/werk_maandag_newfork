'use strict';

/**
 * @ngdoc function
 * @name angularmainForkApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularmainForkApp
 */
angular.module('app')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
