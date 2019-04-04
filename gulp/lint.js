// *************************************
//
//   lint.js
//
// *************************************
//
// Available tasks:
//  'gulp lint'
//  'gulp lint:js'
//
// Available params:
//  '--fix'
//
// *************************************


// -------------------------------------
//   Modules
// -------------------------------------
//
// gulp                       : The streaming build system
// gulp-eslint                : JavaScript code quality tool
// gulp-if                    : Allows basic login in pipes
// yargs                      : Allows passing arguments to tasks
//
// -------------------------------------


var argv = require('yargs').argv;
var eslint = require('gulp-eslint');
var gulp = require('gulp');
var gulpIf = require('gulp-if');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');

function isFixed (file) {
  // Has ESLint fixed the file contents?
  return file.eslint !== null && file.eslint.fixed;
}


// -------------------------------------
//   Task: Lint All
// -------------------------------------

gulp.task('lint', ['lint:js']);


// -------------------------------------
//   Task: Lint JS
// -------------------------------------

gulp.task('lint:js', ['lint:js', 'react:lint:js']);


// -------------------------------------
//   Task: Lint JS
// -------------------------------------

gulp.task('lint:js', () => {
  return gulp.src([
    'src/**/*.js',
    '!src/**/vendor/**/*.js',
    '!src/**/compiled/**/*.js',
  ])
    .pipe(plumber({
      errorHandler: (err) => {
        notify.onError({
          title: 'Gulp error in ' + err.plugin,
          message: err.toString(),
        })(err);
      },
    }))
    .pipe(eslint({
      'fix': (argv.fix !== undefined),
    }))
    .pipe(eslint.format())
    .pipe(gulpIf(isFixed, gulp.dest('src')));
});

// -------------------------------------
//   Task: React Lint JS
// -------------------------------------

gulp.task('react:lint:js', () => {
  return gulp.src([
    'src/app/**/*.js'
  ])
    .pipe(plumber({
      errorHandler: (err) => {
        notify.onError({
          title: 'Gulp error in ' + err.plugin,
          message: err.toString(),
        })(err);
      },
    }))
    .pipe(eslint({
      'fix': (argv.fix !== undefined),
    }))
    .pipe(eslint.format())
    .pipe(gulpIf(isFixed, gulp.dest('src/app')));
});