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

    }
  };
})
