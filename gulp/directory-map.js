// *************************************
//
//   directory-map.js
//
// *************************************
//
// Available tasks:
//  'gulp directory-map'
//  'gulp directory-map:base'
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
var directoryMap = require("gulp-directory-map");


// -------------------------------------
//   Task: Directory-map All
// -------------------------------------

gulp.task('directory-map', ['directory-map:base']);

// // -------------------------------------
// //   Task: directory-map Base
// // -------------------------------------


gulp.task('directory-map:base', () => {
    gulp.src('src/**/*')
  .pipe(directoryMap({
    filename: 'urls.json'
  }))
  .pipe(gulp.dest('build'));
});