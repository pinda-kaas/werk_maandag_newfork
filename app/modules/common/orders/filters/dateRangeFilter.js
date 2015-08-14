app.filter('dateRange', function() {
  return function(input,dateFrom,dateTo) {
    console.log(dateFrom);
    console.log(dateTo);
    return _.filter(input, function(d) {
      var testing= Date.parse(d.date) >= Date.parse(dateFrom) && Date.parse(d.date) <= Date.parse(dateTo)
      //console.log('testing filter result:',testing);
      console.log(testing);
      return testing;
    });
  }
});

//app.filter('dateRangefilter',function(){
//  return function(dateFrom,dateTo)
//  {
//    console.log('rangefilter');
//    _.where($scope.data,function(row){
//      row.date>= dateFrom && row.date<= dateTo
//    });
//  }
//});

