const plumber = require('gulp-plumber'),
  pug = require('gulp-pug'),
  prettify = require('gulp-jsbeautifier'),
  pugInheritance = require('gulp-pug-inheritance'),
  changed = require('gulp-changed'),
  cached = require('gulp-cached'),
  gulpif = require('gulp-if'),
  filter = require('gulp-filter');

const sourceDir = 'app/pug/';
const source = 'app/pug/**/*.pug';
const dest = 'dist'; 

module.exports = function () {
  $.gulp.task('pug', () => {
    return $.gulp.src(source)
      .pipe(plumber())
      .pipe(changed(dest, {
        extension: '.html'
      }))
      .pipe(gulpif(global.isWatching, cached('pug')))
      .pipe(pugInheritance({
        basedir: sourceDir,
        skip: 'node_modules'
      }))
      .pipe(filter(function (file) {
        return !/\/_/.test(file.path) && !/^_/.test(file.relative);
      }))
      .pipe(pug())
      .pipe(prettify({
        braceStyle: 'expand',
        indentSize: 2,
        indentWithTabs: false,
        indentInnerHtml: true,
        preserveNewlines: true,
        endWithNewline: true,
        wrapLineLength: 120,
        maxPreserveNewlines: 50,
        wrapAttributesIndentSize: 1,
        unformatted: ['use'],
        "html": {
          "end_with_newline": true,
          "indent_size": 2,
          preserveNewlines: true,
          "indent-empty-lines": true,
          wrapAttributesIndentSize: 1,
          inline: [],
        },
      }))
      .pipe(plumber.stop())
      .pipe($.gulp.dest(dest))
      .on('end', $.browserSync.reload);
  });
};