app.directive('datePicker',function($compile,$timeout){
  return {
    replace:true,
    templateUrl:'datepicker.html',
    scope: {
      ngModel: '=',
      dateOptions: '@',
      dateDisabled: '@',
      opened: '=',
      min: '@',
      max: '@',
      popup: '@',
      options: '@',
      name: '@',
      id: '@'
    },
    link: function($scope, $element, $attrs, $controller){

    },
    controller:function($scope){

      console.log('inside controller code');
      $scope.container = {
        one: null,
        two: null
      };

      $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
      };

      $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
      };

      $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
      $scope.format = $scope.formats[0];
    }
  };
})
