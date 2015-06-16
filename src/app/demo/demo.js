'use strict';

app.config(function ($stateProvider) {
    $stateProvider
      .state('demo', {
        url: '/demo',
        templateUrl: 'app/demo/demo.html',
        controller: 'DemoCtrl'
      });
  });
