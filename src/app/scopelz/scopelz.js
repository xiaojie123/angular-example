'use strict';

app.config(function ($stateProvider) {
    $stateProvider
      .state('scopelz', {
        url: '/scopelz',
        templateUrl: 'app/scopelz/scopelz.html',
        controller: 'myController'
      });
  });
