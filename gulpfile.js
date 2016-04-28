var gulp = require('gulp');
var mocha = require('gulp-mocha');
var nodemon = require('gulp-nodemon')
var casperJs = require('gulp-casperjs')
var flatten = require('gulp-flatten')
var app = require('./app.js')

gulp.task('copyScripts', function(){
  gulp.src('scripts/*.js').pipe(gulp.dest('public/scripts'))
})

gulp.task('flattenBower',['copyScripts'], function(){
  gulp.src('bower_components/**/*.min.js')
  .pipe(flatten())
  .pipe(gulp.dest('public/scripts'));
})

gulp.task('copyPublic',['flattenBower'], function(){
  gulp.src('server/dist/**/*')
  .pipe(gulp.dest('public/'));
})

gulp.task('copyMisc',['copyPublic'] , function(){
  return gulp.src([ 'server/css/default.css','server/images/*.png'], {base: '.'})
  .pipe(gulp.dest('./public/'));
});

gulp.task('copyTest',['copyMisc'],  function(){
  return gulp.src(['./app.js', 'public/**/*'], {base: '.'})
  .pipe(gulp.dest('server/tests/'));
});

gulp.task('test', ['casper'], function(){
    return gulp.src('./server/tests/app.spec.js').pipe(mocha()).once('end', function(){
      process.exit();
    })
});
gulp.task('casper', ['copyTest'], function(){
    var port =8080;
    var server = app.listen(port);
    return gulp.src('./server/tests/casper.spec.js').pipe(casperJs());
})

gulp.task('default', function(){
  nodemon({
    script: './app.js'
  }).on('start', ['copyTest'])
})
