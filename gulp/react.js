// *************************************
//
//   react.js
//
// *************************************
//
// Available tasks:
//  'gulp react'
//  
//
// *************************************


// -------------------------------------
//   Modules
// -------------------------------------
//
// gulp                       : The streaming build system
// gulp-clean                 : Remove files or directories
// gulp-babel                 : Transpiler
// gulp-sourcemaps            : Transpiler
// gulp-concat                : Transpiler
// gulp-uglify                : Transpiler
//
// -------------------------------------


// var gulp = require('gulp');
// var babel = require("gulp-babel");
// var sourcemaps = require('gulp-sourcemaps');
// var concat = require('gulp-concat');
// var uglify = require('gulp-uglify');


// -------------------------------------
//   Task: react all
// -------------------------------------

//gulp.task('react', ['react:js']);



// -------------------------------------
//   Task: Copy
// -------------------------------------

// gulp.task('react:js', () => {
//   return gulp.src('src/app/index.js')
//     .pipe(sourcemaps.init())
//     .pipe(babel({
//         presets: ['es2015','react']
//     }))
//     .pipe(concat('app.js'))
//     .pipe(uglify())
//     .pipe(sourcemaps.write('.'))
//     .pipe(gulp.dest('build/base/js'));
// });

var gulp       = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var source     = require('vinyl-source-stream');
var buffer     = require('vinyl-buffer');
var browserify = require('browserify');
var watchify   = require('watchify');
var babel      = require('babelify');


var conf = {
  // JavaScript
  appName:  'index.js',
  srcJs:    'src/app',
  destName: 'app.js',
  destJs:   'build/base/js',
  destDocJs:   'docs/base/js',
};

function compile() {
  var bundler = watchify(
    browserify(conf.srcJs + '/' + conf.appName, { debug: true })
      .transform(babel.configure({ presets: ['es2015', 'react'] }))
    );

  function rebundle() {
    bundler.bundle()
      .on('error', function(err) { console.error(err); this.emit('end'); })
      .pipe(source(conf.destName))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(conf.destJs))
      .pipe(gulp.dest(conf.destDocJs));
  }
  rebundle();
}

gulp.task('react', function() { return compile(); });









