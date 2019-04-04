// *************************************
//
//   copy.js
//
// *************************************
//
// Available tasks:
//  'gulp copy'
//  'gulp clean:images'
//  'gulp copy:images
//  'gulp clean:fonts'
//  'gulp copy:fonts'
//  'gulp clean:vendor'
//  'gulp copy:vendor'
//
// *************************************


// -------------------------------------
//   Modules
// -------------------------------------
//
// gulp                       : The streaming build system
// gulp-clean                 : Remove files or directories
//
// -------------------------------------


var clean = require('gulp-clean');
var gulp = require('gulp');


// -------------------------------------
//   Task: Copy All
// -------------------------------------

gulp.task('copy', ['copy:images', 'copy:fonts', 'copy:vendor']);


// -------------------------------------
//   Task: Copy
// -------------------------------------

gulp.task('clean:images', () => {
  return gulp.src(['build/base/images', 'docs/base/images'], { read: false })
    .pipe(clean({ force: true }));
});

gulp.task('copy:images', ['clean:images'], () => {
  return gulp.src('src/base/images/**/*')
    .pipe(gulp.dest('build/base/images'))
    .pipe(gulp.dest('docs/base/images'));
});

gulp.task('clean:fonts', () => {
  return gulp.src(['build/base/fonts', 'docs/base/fonts'], { read: false })
    .pipe(clean({ force: true }));
});

gulp.task('copy:fonts', ['clean:fonts'], () => {
  return gulp.src('src/base/fonts/**/*')
    .pipe(gulp.dest('build/base/fonts'))
    .pipe(gulp.dest('docs/base/fonts'));
});

gulp.task('clean:vendor', () => {
  return gulp.src(['build/vendor', 'docs/vendor'], { read: false })
    .pipe(clean({ force: true }));
});

gulp.task('copy:vendor', ['clean:vendor'], () => {
  return gulp.src('src/vendor/**/*')
    .pipe(gulp.dest('build/vendor'))
    .pipe(gulp.dest('docs/vendor'));
});


