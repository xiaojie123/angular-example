'use strict';

app.config(function ($stateProvider) {
    $stateProvider
      .state('scopelz1', {
        url: '/scopelz1',
        templateUrl: 'app/scopelz1/scopelz1.html',
        controller: 'MainController'
      });
  });
