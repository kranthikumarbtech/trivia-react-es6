// *************************************
//
//   webserver.js
//
// *************************************
//
// Available tasks:
//  'gulp webserver'
//  'gulp webserver:base'
//
// *************************************


// -------------------------------------
//   Modules
// -------------------------------------
//
// gulp                       : The streaming build system
// gulp-html-partial          : Including HTML files into each other
//
// -------------------------------------

var gulp = require('gulp');
var webserver = require('gulp-webserver');


// -------------------------------------
//   Task: Webserver All
// -------------------------------------

gulp.task('webserver', ['webserver:base']);

// // -------------------------------------
// //   Task: Webserver Base
// // -------------------------------------


gulp.task('webserver:base', () => {
    gulp.src('build')
    .pipe(webserver({
      livereload: true,
      open: true,
      fallback: 'index.html'
    }));
});