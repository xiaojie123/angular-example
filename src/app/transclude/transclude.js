'use strict';

app.config(function ($stateProvider) {
    $stateProvider
      .state('transclude', {
        url: '/transclude',
        templateUrl: 'app/transclude/transclude.html',
        controller: 'transcludeCtrl'
      });
  });
