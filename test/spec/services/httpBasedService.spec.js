describe('orderService', function () {
  var orderService,
      httpBackend;

  beforeEach(function (){
    // load the module.
    module('WIP');

    // get your service, also get $httpBackend
    // $httpBackend will be a mock, thanks to angular-mocks.js
    inject(function($httpBackend, _orderService_) {
      orderService = _orderService_;
      httpBackend = $httpBackend;
    });
  });

  // make sure no expectations were missed in your tests.
  // (e.g. expectGET or expectPOST)
  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  it('should call getdata.', function (){

    var returnData = { test:'hello'};

    httpBackend.expectGET('/api/data').respond(returnData);

    var returnedPromise = orderService.getData('/api/data');

    var result;
    returnedPromise.then(function(response) {
      result = response;
    });

    httpBackend.flush();

    expect(result).toEqual(returnData);
  });
});
