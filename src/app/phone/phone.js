'use strict';

app.config(function ($stateProvider) {
    $stateProvider
      .state('phone', {
        url: '/phone',
        templateUrl: 'app/phone/phone.html',
        controller: 'PhoneCtrl'
      });
  });
