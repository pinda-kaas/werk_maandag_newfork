app.filter('dateRange', function () {
    return function (input, dateFrom, dateTo,dateName) {
        console.log('daterange filter kicksin');
        console.log('df', dateFrom);
        console.log('dt', dateTo);
        return _.filter(input, function (d) {
            var testing = Date.parse(d.prop('dateName')) >= Date.parse(dateFrom) && Date.parse(d.dateName) <= Date.parse(dateTo)
            //console.log('testing filter result:',testing);
            //var testing= Date.parse(d.settlementDate) == Date.parse(dateFrom) ;///&& Date.parse(d.settlementDate) <= Date.parse(dateTo)

            console.log('nput',input);
            console.log(testing);

            console.log(d.prop('dateName'));
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

