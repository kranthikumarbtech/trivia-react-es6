// *************************************
//
//   js.js
//
// *************************************
//
// Available tasks:
//  'gulp js'
//  'gulp js:main
//  'gulp js:main:base'
//  'gulp js:main:components'
//  'gulp js:main:vendor'
//
// *************************************


// -------------------------------------
//   Modules
// -------------------------------------
//
// gulp                       : The streaming build system
// gulp-concat                : Concatenate files
// gulp-rename                : Rename files
// gulp-uglify                : Uglify (minify) js
//
// -------------------------------------

var concat = require('gulp-concat');
var gulp = require('gulp');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');


// -------------------------------------
//   Task: JS All
// -------------------------------------

gulp.task('js', ['js:base']);


// -------------------------------------
//   Task: JS Main Base
// -------------------------------------

gulp.task('js:base', () => {
  return gulp.src(['src/base/js/**/*.js', 'src/components/js/**/*.js'])
    .pipe(plumber({
      errorHandler: function (err) {
        notify.onError({
          title: 'Gulp error in ' + err.plugin,
          message: err.toString(),
        })(err);
      },
    }))
    .pipe(concat('base.js'))
    .pipe(gulp.dest('src/base/compiled'))
    .pipe(rename('base.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/base/js'))
    .pipe(gulp.dest('docs/base/js'));
});