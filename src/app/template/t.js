'use strict';

app.config(function ($stateProvider) {
    $stateProvider
      .state('t', {
        url: '/t',
        templateUrl: 'app/template/t.html',
        controller: 'TCtrl'
      });
  });
