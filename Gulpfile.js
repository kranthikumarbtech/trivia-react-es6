// *************************************
//
//   Gulpfile
//
// *************************************
//
// Available tasks:
//   'gulp'
//   'gulp build'
//
// *************************************


// -------------------------------------
//   Modules
// -------------------------------------
//
// gulp                       : The streaming build system
// run-sequence               : Organize gulp tasks
// require-dir                : Organize gulp tasks in a sub-directory
//
// -------------------------------------


var gulp = require('gulp');
var runSequence = require('run-sequence');

require('require-dir')('./gulp');


// -------------------------------------
//   Task: Build
// -------------------------------------

gulp.task('build', function () {
  runSequence(
    // 'modernizr',
    'react',
    'js',
    'sass',
    'less',
    'copy',
    'partials',
    'webserver',
    'watch'
  );
});

// -------------------------------------
//   Task: Default
// -------------------------------------
gulp.task('default', ['build']);

// gulp.task('watch', ["build"], function() {
//     return gulp.start(['webserver']);
// });
