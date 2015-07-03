'use strict';

app.config(function ($stateProvider) {
    $stateProvider
      .state('jiaohu', {
        url: '/jiaohu',
        templateUrl: 'app/jiaohu/jaiohu.html',
        controller: 'jiaohuCtrl'
      });
  });
