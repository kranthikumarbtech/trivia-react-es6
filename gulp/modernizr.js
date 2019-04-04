// *************************************
//
//   modernizr.js
//
// *************************************
//
// Available tasks:
//  'gulp modernizr'
//  'gulp modernizr:main
//
// *************************************


// -------------------------------------
//   Modules
// -------------------------------------
//
// gulp                       : The streaming build system
// gulp-modernizr             : Modernizr wrapper, automatically builds Modernizr file
// gulp-uglify                : Minify JavaScript with UglifyJS
//
// -------------------------------------


var gulp = require('gulp');
var modernizr = require('gulp-modernizr');
var uglify = require('gulp-uglify');


// -------------------------------------
//   Task: Modernizr All
// -------------------------------------

gulp.task('modernizr', ['modernizr:main']);


// -------------------------------------
//   Task: Modernizr Main
// -------------------------------------

gulp.task('modernizr:main', () => {
  return gulp.src([
    'src/**/*.js',
    '!src/**/vendor',
    'src/**/*.scss',
    '!src/**/vendor/',
  ])
    .pipe(modernizr('modernizr-custom.js', {
      'cache': true,
    }))
    .pipe(gulp.dest('src/vendor/compiled'))
    .pipe(uglify())
    .pipe(gulp.dest('build/vendor/modernizr'));
});
