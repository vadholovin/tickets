let imagemin = require('gulp-imagemin'),
    imageminJpegRecompress = require('imagemin-jpeg-recompress'),
    pngquant = require('imagemin-pngquant'),
    cache = require('gulp-cache'),
    imgPATH = {
        input: ["./app/img/**/*.{png,jpg,gif,svg}",
            '!./app/img/svg/*'],
        ouput: "./dist/img/"
    };

module.exports = function () {
    $.gulp.task('img:app', () => {
        return $.gulp.src(imgPATH.input)
            .pipe($.gulp.dest(imgPATH.ouput));
    });

    $.gulp.task('img:dist', () => {
        return $.gulp.src(imgPATH.input)
            .pipe(imagemin([
                imagemin.gifsicle({interlaced: true}),
                imagemin.jpegtran({progressive: true}),
                imageminJpegRecompress({
                    loops: 5,
                    min: 70,
                    max: 75,
                    quality: 'medium'
                }),
                imagemin.svgo(),
                imagemin.optipng({optimizationLevel: 3}),
                pngquant({quality: '65-70', speed: 5})
            ], {
                verbose: true
            }))
            .pipe($.gulp.dest(imgPATH.ouput));
    });
};
