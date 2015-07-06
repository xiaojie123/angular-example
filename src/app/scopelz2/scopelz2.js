'use strict';

app.config(function ($stateProvider) {
    $stateProvider
      .state('scopelz2', {
        url: '/scopelz2',
        templateUrl: 'app/scopelz2/scopelz2.html',
        controller: 'MainController2'
      });
  });
