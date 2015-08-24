app.filter('dateRange', function () {
    return function (input, dateFrom, dateTo,dateName) {
        console.log('daterange filter kicksin');
        console.log('df', dateFrom);
        console.log('dt', dateTo);
        console.log('datename', dateName);
        return _.filter(input, function (d) {
            var result = Date.parse(d[dateName]) >= Date.parse(dateFrom) &&  Date.parse(d[dateName]) <= Date.parse(dateTo)
            console.log('input',input);
            console.log(result);
            return result;
        });
    }
});
