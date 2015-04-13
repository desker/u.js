var version = require('./package.json').version;

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    bsync = require('browser-sync'),
    reload = bsync.reload;

gulp.task('js:lint', function() {
  return gulp.src('./src/*.js')
    .pipe($.plumber({errorHandler: $.notify("Error js:lint")}))
    .pipe($.jshint())
    .pipe($.notify(function (file) {
      if (file.jshint.success) return false;
 
      var errors = file.jshint.results.map(function (data) {
        if (data.error) {
          return "(" + data.error.line + ':' + data.error.character + ') ' + data.error.reason;
        }
      }).join("\n");
      return file.relative + " (" + file.jshint.results.length + " errors)\n" + errors;
    }));
});

gulp.task('js:concat', function() {
  return gulp.src('./src/*.js')
    .pipe($.plumber({errorHandler: $.notify("Error js:concat")}))
    .pipe($.replace("@VERSION", version))
    .pipe($.concat('u.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('js:min', ['js:concat'], function() {
  return gulp.src('./dist/u.js')
    .pipe($.plumber({errorHandler: $.notify("Error js:min")}))
    .pipe($.uglify())
    .pipe($.rename({ suffix: '.min' }))
    .pipe(gulp.dest('./dist'))
    .pipe(reload({stream: true}));
});

gulp.task('js', ['js:lint', 'js:concat', 'js:min'])

gulp.task('default', ['js'], function() {
  bsync({
    server: {
      baseDir: ['./dist', './examples/']
    }
  });

  gulp.watch('./src/**/*.js', ['js']);
});