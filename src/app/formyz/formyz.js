'use strict';

app.config(function ($stateProvider) {
    $stateProvider
      .state('formyz', {
        url: '/formyz',
        templateUrl: 'app/formyz/formyz.html',
        controller: 'validateCtrl'
      });
  });
