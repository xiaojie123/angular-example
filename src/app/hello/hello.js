'use strict';

app.config(function ($stateProvider) {
    $stateProvider
      .state('hello', {
        url: '/hello',
        templateUrl: 'app/hello/hello.html',
        controller: 'helloCtrl'
      });
  });
