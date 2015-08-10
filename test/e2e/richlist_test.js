describe('celebrity e2e tests', function () {
  it('should display 3 ozzies', function () {
    browser.get('http://localhost:9000/#/');
    element(by.model('birthPlace')).sendKeys('Australia');
    var table = element(by.css(".table-striped"));
    var persons = element.all(by.repeater('person in list'));
    expect(persons.count()).toEqual(3);
  });

  it('should display 2 dutchies', function () {
    browser.get('http://localhost:9000/#/');
    element(by.model('birthPlace')).sendKeys('Netherlands');
    var table = element(by.css(".table-striped"));
    var persons = element.all(by.repeater('person in list'));
    expect(persons.count()).toEqual(2);
  });
});
