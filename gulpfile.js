var gulp = require('gulp');
var mocha = require('gulp-mocha');
var nodemon = require('gulp-nodemon')
var casperJs = require('gulp-casperjs')
var app = require('./app.js')

gulp.task('copy', function(){
  return gulp.src(['./default.js', './index.html', './css/default.css','./images/*.png'], {base: '.'})
  .pipe(gulp.dest('./public/'));
});

gulp.task('copyTest', function(){
  return gulp.src(['./app.js', './public/'], {base: '.'})
  .pipe(gulp.dest('./tests/'));
});

gulp.task('test', ['copyTest'], function(){
    return gulp.src('./tests/app.spec.js').pipe(mocha()).once('end', function(){
      process.exit();
    })
});
