'use strict';

angular.module('app').controller('randomStudentCtrl', function($scope, $http) {
  var randomStudentId = Math.random() * 101;
  $http.get('students/' + randomStudentId).then(function(response) {
    $scope.currentStudent = response.data;
  });
});

function randomStudentUrlMatcher(url) {
  if(url.substr(0, 9) === 'students/') {
    return true;
  } else {
    return false;
  }
}
