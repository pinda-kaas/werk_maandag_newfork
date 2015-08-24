'use strict';

describe('Filter: daterange', function () {

    var $filter;
    beforeEach(function () {
        module('WIP');
        //module('_');
    });

    beforeEach( inject(function (_$filter_) {
        $filter = _$filter_;
        //_ =window('_');
    }));

    it('should be in the range',function(){
        expect($filter('dateRange')('08/10/2015','08/01/2015','08/30/2015','blaat')).toBeTruthy;
    });

});

