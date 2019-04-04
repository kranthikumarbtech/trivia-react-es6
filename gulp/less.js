// *************************************
//
//   sass.js
//
// *************************************
//
// Available tasks:
//  'gulp less'
//  'gulp less:base'
//  'gulp less:components'
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
// gulp-less                  : Compile Sass
//// node-sass-tilde-importer   : Import sass from node_modules with tilde
//
// -------------------------------------

var autoprefixer = require('gulp-autoprefixer');
var gulp = require('gulp');
var clean = require('gulp-clean-css');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var less = require('gulp-less');
var LessAutoprefix = require('less-plugin-autoprefix');
var autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });
var onError = function (err) {
    gutil.log(gutil.colors.red("ERROR", taskName), err);
    this.emit("end", new gutil.PluginError(taskName, err, { showStack: true }));
  };
  var tildeImporter = require('node-sass-tilde-importer');
// -------------------------------------
//   Task: Sass All
// -------------------------------------

gulp.task('less', ['less:base', 'less:components']);

// -------------------------------------
//   Task: Sass Base
// -------------------------------------

gulp.task('less:base', (success, error) => {
  return gulp.src([
    'src/base/less/**/*.less',
  ])
  .pipe(less({
    plugins: [autoprefix]
  }))
  // .pipe(plumber({
  //     errorHandler: (err) => {
  //       notify.onError({
  //         title: 'Gulp error in ' + err.plugin,
  //         message: err.toString(),
  //       })(err);
  //     },
  //   }))
  //   //.pipe(less().on('error', onError))
  //   .pipe(less().on('error', ()=>{
  //     console.log(error);
  //   }))
  // .pipe(plumber({
  //     errorHandler: function (err) {
  //       notify.onError({
  //         title: 'Gulp error in ' + err.plugin,
  //         message: err.toString(),
  //       })(err);
  //     },
  //   }))
  //   .pipe(less({
  //     errorLogToConsole: true,
  //     importer: tildeImporter,
  //     includePaths: [
  //       './',
  //     ],
  //   })
  //     .on('error', onError))
    // .pipe(LessAutoprefix({
    //   browsers: ['last 3 versions'],
    //   cascade: false,
    // })) 
  .pipe(gulp.dest('src/base/compiled'))
  .pipe(clean({ compatibility: '*' }));
});


// -------------------------------------
//   Task: Sass Components
// -------------------------------------

gulp.task('less:components', () => {
  return gulp.src([
    'src/components/less/**/*.less',
  ])
    .pipe(less({
    plugins: [autoprefix]
  }))
    .pipe(gulp.dest('src/components/compiled'))
    .pipe(clean({ compatibility: '*' }));
});


