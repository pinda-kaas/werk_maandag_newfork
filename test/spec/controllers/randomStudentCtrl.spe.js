describe('randomStudentCtrl', function() {
  var $controller;

  beforeEach(module('app'));

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  describe('load', function() {
    it('should get data from the correct endpoint', inject(function($httpBackend, $rootScope) {
      var scope = $rootScope.$new();
      var controller = $controller('randomStudentCtrl', { $scope: scope });
      //var mockStudent = {name: 'Bilbo Baggins', gpa: 0.8}
      var mockStudent = {ted:'beer'};

      $httpBackend.expectGET(randomStudentUrlMatcher).respond(200, mockStudent);
      $httpBackend.flush();

      expect(scope.currentStudent).toEqual(mockStudent)
    }));
  });
});
