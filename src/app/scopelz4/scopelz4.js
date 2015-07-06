'use strict';

app.config(function ($stateProvider) {
    $stateProvider
      .state('scopelz4', {
        url: '/scopelz4',
        templateUrl: 'app/scopelz4/scopelz4.html',
        controller: 'MainController4'
      });
  });
