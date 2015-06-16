'use strict';

var app = angular.module('angular example',
  ['ngAnimate',
    'ngCookies',
    'ngSanitize',
    'restangular',
    'ui.router',
    'ui.bootstrap',
    'ui.grid',
    'ui.grid.edit',
    'ui.grid.selection',
    'ui.grid.exporter',
    'ui.grid.pagination',
    'ipCookie',
    'ngFileUpload',
    'blockUI',
    'inform',
    'inform-exception',
    'dialogs.main',
    'dialogs.default-translations',
    'textAngular',
    'ngStorage'
  ])
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
  }
  ]).config(function(blockUIConfig) {
    blockUIConfig.message = '请求处理中...';
    blockUIConfig.delay = 100;
    blockUIConfig.autoBlock = true;
    blockUIConfig.requestFilter = function(config) {
      var message;
      switch(config.method) {
        case 'GET':
          message = '获取数据中 ...';
          break;
        case 'POST':
          message = '提交数据中 ...';
          break;
        case 'DELETE':
          message = '删除数据中 ...';
          break;
        case 'PUT':
          message = '更新数据中 ...';
          break;
      }
      return message;
    };
  })
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');
    $locationProvider.html5Mode(true).hashPrefix('!');
  })
  .constant('Endpoint',{
  });
