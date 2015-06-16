'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')();
var series = require('stream-series')

var wiredep = require('wiredep').stream;

module.exports = function (options) {
  gulp.task('inject', ['scripts', 'styles'], function () {
    var injectStyles = gulp.src([
      options.tmp + '/serve/{app,components}/**/*.css',
      '!' + options.tmp + '/serve/app/vendor.css'
    ], {read: false});

    var injectIndexScripts = gulp.src(
      options.src + '/app/index.js'
    )
      .pipe($.angularFilesort()).on('error', options.errorHandler('AngularFilesort'));

    var injectScripts = gulp.src([
      options.src + '/{app,components}/**/*.js',
      '!' + options.src + '/app/index.js',
      '!' + options.src + '/{app,components}/**/*.spec.js',
      '!' + options.src + '/{app,components}/**/*.mock.js'
    ])
      .pipe($.angularFilesort()).on('error', options.errorHandler('AngularFilesort'));

    var injectOptions = {
      ignorePath: [options.src, options.tmp + '/serve'],
      addRootSlash: false
    };

    var wiredepOptions = {
      directory: 'bower_components',
      exclude: [/bootstrap\.js/, /bootstrap\.css/]
    };

    return gulp.src(options.src + '/*.html')
      .pipe($.inject(injectStyles, injectOptions))
      .pipe($.inject(series(injectIndexScripts,injectScripts), injectOptions))
      .pipe(wiredep(wiredepOptions))
      .pipe(gulp.dest(options.tmp + '/serve'));

  });
};
