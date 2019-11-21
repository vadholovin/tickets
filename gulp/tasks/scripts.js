let uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  scriptsPATH = {
    "input": "./app/js/",
    "ouput": "./dist/js/"
  };

module.exports = function () {
  $.gulp.task('libsJS:app', () => {
    return $.gulp.src([
        'node_modules/intersection-observer/intersection-observer.js',
        'node_modules/classlist-polyfill/src/index.js',
        // 'node_modules/array.prototype.find/polyfill.js',
    ])
      .pipe(concat('libs.min.js'))
      .pipe($.gulp.dest(scriptsPATH.ouput));
  });

  $.gulp.task('libsJS:dist', () => {
    return $.gulp.src([
      'node_modules/intersection-observer/intersection-observer.js',
      'node_modules/classlist-polyfill/src/index.js',
      // 'node_modules/array.prototype.find/polyfill.js',
    ])
      .pipe(concat('libs.min.js'))
      .pipe(uglify())
      .pipe($.gulp.dest(scriptsPATH.ouput));
  });

  $.gulp.task('js:app', () => {
    return $.gulp.src([scriptsPATH.input + '*.js',
        '!' + scriptsPATH.input + 'libs.min.js'
      ])
      .pipe($.gulp.dest(scriptsPATH.ouput))
      .pipe($.browserSync.reload({
        stream: true
      }));
  });

  $.gulp.task('js:dist', () => {
    return $.gulp.src([scriptsPATH.input + '*.js',
        '!' + scriptsPATH.input + 'libs.min.js'
      ])
      .pipe($.gulp.dest(scriptsPATH.ouput))
  });

  $.gulp.task('js:dist-min', () => {
    return $.gulp.src([scriptsPATH.input + '*.js',
        '!' + scriptsPATH.input + 'libs.min.js'
      ])
      .pipe(concat('main.min.js'))
      .pipe(uglify())
      .pipe($.gulp.dest(scriptsPATH.ouput))
  });
};