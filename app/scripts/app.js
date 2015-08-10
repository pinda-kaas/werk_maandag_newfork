'use strict';

/**
 * @ngdoc overview
 * @name angularmainForkApp
 * @description
 * # angularmainForkApp
 *
 * Main module of the application.
 */
var app=angular.module('app', [
    'ngRoute',
    'ui.bootstrap'
  ]);

  app.config(function ($routeProvider) {
    $routeProvider
      .when('/contact', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/', {
        templateUrl: 'views/richlist.html',
        controller: 'RichListCtrl'
      })
      .when('/validation', {
        templateUrl: 'views/customvalidation.html'
      })
      .when('/gutter', {
        templateUrl: 'views/gutter.html'
      })
      .when('/modal', {
        templateUrl: 'views/modal_filter_for_grid.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('_',window._);
