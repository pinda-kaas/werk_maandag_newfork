app.controller('AwaitingSettlementsCtrl', function ($scope, $filter, $location,configService, settlementData) {

  console.log('awaiting settlements ctrl started');

  $scope.settlements=  settlementData;

  console.log('settlementdata in ctrl',settlementData);

  //todo remove this begin date stuff

  $scope.datePerformancePreference = null;
  $scope.dateRangeIsCustom = false;
  $scope.pikadayMaxDate = moment().subtract(1, 'days');
  $scope.datepickerFormat = 'dd MMMM yyyy';


  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };

  function getDateData() {

    $scope.datePreferencesLoading = promiseTracker();

    var datePreferencesPromise = reportPreferencesService.getPreferences();
    $scope.datePreferencesLoading.addPromise(datePreferencesPromise);
    datePreferencesPromise.then(function(response) {

      // console.log('*****GET date controller response');
      // console.log(response);



      $scope.dateData = {};
      $scope.dateRanges = {};


      if(response.errors && response.errors.length > 0) {
      } else {

        $scope.dateRanges = response.dateRange ? response.dateRange : null;

        if(response.preferredOptions && response.preferredOptions.PERIOD) {
          $scope.setDateRange(response.preferredOptions.PERIOD);
        }


        // broadcast to other controllers
        $timeout(function(){
          newDatesBroadcast($scope.fromDateInput, $scope.toDateInput);
        });


      }


      // // console.log('$scope.dateRange');
      // // console.log($scope.dateRange);
    });

  };

  $scope.$on('userAuthRequestSuccess', function(){
    // // console.log('---------------------userAuthRequestSuccess--------------------');
    getDateData();
  });



  function generateRanges(selectOptionName) {
    $scope.dateRanges[selectOptionName] = [];
    angular.forEach($scope.dateData, function(o){
      if(o && o.optionName == selectOptionName) {
        $scope.dateRanges[selectOptionName] = o.availableOptions;
      }
    });
  }



  $scope.setDateRange = function(range) {
    $scope.preferredDateRange = range ? range : null;
    $scope.dateRangeIsCustom = false;

    var yesterday = moment().subtract(1, 'days');
    var yesterdayYear = moment().subtract(1, 'days').get('year');

    var sixMonthsAgo = moment().subtract(6, 'months');

    var twelveMonthsAgo = moment().subtract(1, 'years');
    var twelveMonthsAgoYear = moment().subtract(12, 'months').get('year');

    var twoYearsAgoYear = moment().subtract(2,'years').get('year');

    if(!range || range === '6M') {
      $scope.preferredDateRange = '6M';
      setDateInputs(new Date(sixMonthsAgo), new Date(yesterday));
    } else if (range === '12M') {
      setDateInputs(new Date(twelveMonthsAgo), new Date(yesterday));
    } else if (range === 'YTD') {
      if(moment(yesterday).isAfter('07-01-'+yesterdayYear)) {
        setDateInputs(new Date('07-01-' + yesterdayYear), new Date(yesterday));
      } else {
        setDateInputs(new Date('07-01-' + twelveMonthsAgoYear), new Date(yesterday));
      }

    } else if (range === 'LFY') {
      if(moment(yesterday).isAfter('06-30-'+yesterdayYear)) {
        setDateInputs(new Date('07-01-' + twelveMonthsAgoYear), new Date('06-30-'+yesterdayYear));
      } else {
        setDateInputs(new Date('07-01-' + twoYearsAgoYear), new Date('06-30-'+twelveMonthsAgoYear));
      }
    }
  };


  function setDateInputs(fromDate, toDate) {
    if(fromDate) {
      $scope.fromDateInput = moment(fromDate).format('DD MMMM YYYY');
    }
    if(toDate) {
      $scope.toDateInput = moment(toDate).format('DD MMMM YYYY');
    }
    // // console.log('old fromDate: ' + fromDate);
    // // console.log('old toDate: ' + toDate);
    // // console.log('new fromDate: ' + $scope.fromDateInput);
    // // console.log('new toDate: ' + $scope.toDateInput);
  }





  $scope.dateSubmit = function(fromDateOriginal, toDateOriginal, dateRange) {
    var fromDate = null;
    var toDate = null;
    var isBefore = false;

    if(moment(fromDateOriginal).isBefore(toDateOriginal)) {
      isBefore = true;
    } else {
      isBefore = false;
    }

    if(fromDateOriginal && toDateOriginal && dateRange && isBefore) {
      $scope.dateLoading = true;

      // console.log('fromDateOriginal: ' + fromDateOriginal);
      // console.log('toDateOriginal: ' + toDateOriginal);


      fromDate = moment(fromDateOriginal);
      toDate = moment(toDateOriginal);

      // format from and to date to whole month based on Time weighted return in prferences
      if($scope.datePerformancePreference == 'TWR' || $scope.datePerformancePreference == 'twr') {
        fromDate = moment(fromDateOriginal).startOf('month');

        if(moment(toDateOriginal).format('DD MMMM YYYY') !== moment(toDateOriginal).endOf('month').format('DD MMMM YYYY')) {
          toDate = moment(toDateOriginal).subtract('months', 1).endOf('month');
        }
      }


      $timeout(function(){
        setDateInputs(fromDate, toDate);
        newDatesBroadcast(fromDate, toDate);

        var submitData = [
          { optionName: 'PERIOD', optionValue: dateRange}
        ];

        $scope.dateSaveTracker = promiseTracker();
        var dateSavePromise = reportPreferencesService.putPreferences(submitData);
        $scope.dateSaveTracker.addPromise(dateSavePromise);

        dateSavePromise.then(function(response) {

          // // console.log('***************date SAVED response --> Trigger display refresh');
          // // console.log(response);
          $scope.dateLoading = false;

        }, function(error){
          // console.log('***date save error');
          // console.log(error);
        });

      });

    }


  };



  function newDatesBroadcast(fromDate, toDate) {
    if(fromDate && toDate) {
      var from = moment(fromDate).format('YYYY-MM-DD');
      var to = moment(toDate).format('YYYY-MM-DD');

      // // console.log('new dates to broadcast: ');
      // // console.log(from + '; ' + to);

      $rootScope.$broadcast('dateUpdated', {fromDate: from, toDate: to});
    }
  }



  $scope.onCalendarSelect = function(piker, inputName) {
    $scope.dateRangeIsCustom = true;
  };




  $scope.dateFromOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.dateToOptions = {
    formatYear: 'yy',
    startingDay: 1
  };





  //end date stuff


});
