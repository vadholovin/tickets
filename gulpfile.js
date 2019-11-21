'use strict';

global.$ = {
  path: {
    task: require('./gulp/path/tasks.js')
  },
  gulp: require('gulp'),
  browserSync: require('browser-sync').create(),
  del: require('del')
};

$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('app', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'pug',
    'fonts',
    'styles:app',
    'img:app',
    'libsJS:app',
    'libs',
    'js:app',
    'svg'
  )
));

$.gulp.task('product', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'pug',
    'fonts',
    'styles:dist-min',
    'img:dist',
    'libsJS:dist',
    'libs',
    'js:dist-min',
    'svg'
  )
));

$.gulp.task('default', $.gulp.series(
  'app',
  $.gulp.parallel(
    'watch',
    'serve'
  )
));
