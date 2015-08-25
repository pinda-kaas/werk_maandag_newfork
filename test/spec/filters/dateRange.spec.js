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
    var dates=[{'date':'8/10/2013'},{'date':'8/10/2016'}]
    expect($filter('dateRange')(dates,'08/10/2015','08/11/2017','date')).toEqual([{ date: '8/10/2016' }]);
  });

});

