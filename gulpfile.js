var gulp = require('gulp');
var mocha = require('gulp-mocha');
var nodemon = require('gulp-nodemon')
var casperJs = require('gulp-casperjs')
var flatten = require('gulp-flatten')
var app = require('./app.js')
var eslint = require('gulp-eslint')
var htmlmin = require('gulp-htmlmin');
var csso = require('gulp-csso');

gulp.task('lint', function(){
  return gulp.src('server/dist/**/*.js').pipe(eslint({
    rules:{
      "no-console": 1
    }
  })).pipe(eslint.format()).pipe(eslint.failAfterError())
})

gulp.task('minifyHtml', function(){
  return gulp.src('public/**/*.html')
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest('public/'))
})

gulp.task('minifyCSS', function(){
  return gulp.src('public/css/default.css')
  .pipe(csso())
  .pipe(gulp.dest('public/css/'))
})

gulp.task('minify', ['minifyHtml', 'minifyCSS']);

gulp.task('copyScripts', function(){
  gulp.src('scripts/*.js').pipe(gulp.dest('server/dist/scripts'))
})

gulp.task('flattenBower',['copyScripts'], function(){
  gulp.src('bower_components/**/*.min.js')
  .pipe(flatten())
  .pipe(gulp.dest('server/dist/scripts'));
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
