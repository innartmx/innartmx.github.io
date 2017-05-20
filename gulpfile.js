var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-ruby-sass'),
    jshint = require('gulp-jshint'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cleanCSS  = require('gulp-clean-css');

gulp.task('sass', function () {
   return sass('source/sass/**/*.scss')
      .on('error', sass.logError)
      .pipe(cleanCSS()) 
      .pipe(gulp.dest('assets'));
});

gulp.task('build-js', function() {
   return gulp.src('source/js/*.js')
      .pipe(sourcemaps.init())
      .pipe(concat('bundle.js'))
      .pipe(uglify()) 
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('assets'));
});

gulp.task('build-vendor-js', function() {
   return gulp.src('source/js/lib/**/*.js')
      .pipe(sourcemaps.init())
      .pipe(concat('vendor.js'))
      .pipe(uglify()) 
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('assets'));
});

gulp.task('watch', function() {
   gulp.watch('source/js/**/*.js', ['build-js']);
   gulp.watch('source/sass/**/*.scss', ['sass']);
});

gulp.task('build', ['sass', 'build-js', 'build-vendor-js']);

gulp.task('default', ['build']);