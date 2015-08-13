//app.filter('dateRangefilter', function() {
//  return function(input) {
//    //console.log('rangefilter');
//    return _.filter(input, function(d) {
//      var testing= Date.parse(d.date) >= Date.parse('01/01/2000') && Date.parse(d.date) <= Date.parse('01/08/2022')
//      //console.log('testing filter result:',testing);
//      //console.log('testing filter date:', d.date);
//      return testing;
//    });
//  }
//});

//app.filter('dateRangefilter',function(){
//  return function(dateFrom,dateTo)
//  {
//    console.log('rangefilter');
//    _.where($scope.data,function(row){
//      row.date>= dateFrom && row.date<= dateTo
//    });
//  }
//});
