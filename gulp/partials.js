// *************************************
//
//   partials.js
//
// *************************************
//
// Available tasks:
//  'gulp partials'
//  'gulp partials:base'
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
var htmlPartial = require('gulp-html-partial');


// -------------------------------------
//   Task: Partials All
// -------------------------------------

gulp.task('partials', ['partials:base']);

// // -------------------------------------
// //   Task: partials Base
// // -------------------------------------


gulp.task('partials:base', () => {
    gulp.src(['src/prototypes/*.html'])
    .pipe(htmlPartial({
        basePath: 'src/prototypes/',
        tagName: 'htmlPartial',
        variablePrefix: '@@'
    }))
    .pipe(gulp.dest('build'))
    .pipe(gulp.dest('docs'));
});