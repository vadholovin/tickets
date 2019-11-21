module.exports = function () {
  $.gulp.task('watch', function () {
    $.gulp.watch('./app/pug/**/*.pug', $.gulp.series('pug'));
    $.gulp.watch('./app/scss/**/*.scss', $.gulp.series('styles:app'));
    $.gulp.watch(['./app/img/**/*.{png,jpg,gif,svg}',
      './app/img/**/*.{png,jpg,gif,svg}'
    ], $.gulp.series('img:app'));
    $.gulp.watch('./app/img/svg/*.svg', $.gulp.series('svg'));
    $.gulp.watch('./app/js/**/*.js', $.gulp.series('js:app'));
  });
};