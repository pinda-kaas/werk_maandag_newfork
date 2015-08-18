describe('wipService', function () {
  var wipService,
      httpBackend;

  beforeEach(function (){
    // load the module.
    module('WIP');

    inject(function($httpBackend, _wipService_) {
      wipService = _wipService_;
      httpBackend = $httpBackend;
    });
  });

  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  it('should call getdata.', function (){
    var returnData = { test:'helloss'};
    httpBackend.expectGET('/api/data').respond(returnData);
    var returnedPromise = wipService.getData('/api/data');
    var result;
    returnedPromise.then(function(response) {
      result = response;
    });
    httpBackend.flush();
    expect(result).toEqual(returnData);
  });
});
