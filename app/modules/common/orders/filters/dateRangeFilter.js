app.filter('dateRange', function () {
    return function (input, dateFrom, dateTo,dateName) {
        console.log('daterange filter kicksin');
        console.log('df', dateFrom);
        console.log('dt', dateTo);
        return _.filter(input, function (d) {
            var tst=dateName;
            console.log(d[dateName]);
            var result = Date.parse(d[dateName]) >= Date.parse(dateFrom) &&  Date.parse(d[dateName]) <= Date.parse(dateTo)

            console.log('input',input);
            console.log(result);

            //console.log(d.prop('dateName'));
            return result;
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

