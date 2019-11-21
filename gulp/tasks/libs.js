module.exports = function () {
  $.gulp.task('libs', () => {
    return $.gulp.src('./app/libs/**/*.*')
      .pipe($.gulp.dest('./dist/libs/'));
  });
};