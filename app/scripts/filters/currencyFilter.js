'use strict';

angular.module('app').filter('currency', function() {
  var defaultCurrency = 'USD$';
  return function(input, currencySymbol) {
    var out = '';
    currencySymbol = currencySymbol || defaultCurrency;

    switch(currencySymbol) {
      case '£':
        out = 0.609273137 * input; // google
        break;
      case 'USD$':
        out = 1 * input; // google
        break;

      case 'AUD$':
        out = 1.29 * input; // google
        break;

      case 'EUR€':
        out = 0.93 * input; // google
        break;

      default:
        out = input;
    }
    return currencySymbol + ' ' +out;
  };
});
