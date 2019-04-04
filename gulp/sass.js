// *************************************
//
//   sass.js
//
// *************************************
//
// Available tasks:
//  'gulp sass'
//  'gulp sass:base'
//  'gulp sass:components'
//
// *************************************


// -------------------------------------
//   Modules
// -------------------------------------
//
// gulp                       : The streaming build system
// gulp-autoprefixer          : Prefix CSS
// gulp-clean-css             : Clean CSS
// gulp-plumber               : Better error handling
// gulp-rename                : Rename files
// gulp-sass                  : Compile Sass
// node-sass-tilde-importer   : Import sass from node_modules with tilde
//
// -------------------------------------

var autoprefixer = require('gulp-autoprefixer');
var gulp = require('gulp');
var clean = require('gulp-clean-css');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var tildeImporter = require('node-sass-tilde-importer');


// -------------------------------------
//   Task: Sass All
// -------------------------------------

gulp.task('sass', ['sass:base', 'sass:components']);

// -------------------------------------
//   Task: Sass Base
// -------------------------------------

gulp.task('sass:base', () => {
  return gulp.src([
    'src/base/scss/base.scss',
  ])
    .pipe(plumber({
      errorHandler: function (err) {
        notify.onError({
          title: 'Gulp error in ' + err.plugin,
          message: err.toString(),
        })(err);
      },
    }))
    .pipe(sass({
      errorLogToConsole: true,
      importer: tildeImporter,
      includePaths: [
        './',
      ],
    })
      .on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 3 versions'],
      cascade: false,
    }))
    .pipe(gulp.dest('src/base/compiled'))
    .pipe(rename('base.min.css'))
    .pipe(clean({ compatibility: '*' }));
});


// -------------------------------------
//   Task: Sass Components
// -------------------------------------

gulp.task('sass:components', () => {
  return gulp.src([
    'src/components/scss/components.scss',
  ])
    .pipe(plumber({
      errorHandler: (err) => {
        notify.onError({
          title: 'Gulp error in ' + err.plugin,
          message: err.toString(),
        })(err);
      },
    }))
    .pipe(sass({
      errorLogToConsole: true,
      importer: tildeImporter,
      includePaths: [
        './',
      ],
    })
      .on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 3 versions'],
      cascade: false,
    }))
    .pipe(gulp.dest('src/components/compiled'))
    .pipe(rename('styles.min.css'))
    .pipe(clean({ compatibility: '*' }))
    .pipe(gulp.dest('build/base/css'))
    .pipe(gulp.dest('docs/base/css'));
});


