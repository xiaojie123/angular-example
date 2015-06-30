'use strict';

app.config(function ($stateProvider) {
    $stateProvider
      .state('book', {
        url: '/book',
        templateUrl: 'app/book/book.html',
        controller: 'BookCtrl'
      });
  });
