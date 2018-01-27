const gulp = require('gulp');
const less = require('gulp-less');
const webpack = require('webpack');
const config = require('./webpack.config.js');
const webpackStream = require('webpack-stream');

const SOURCE_DIR = './src';
const OUTPUT_DIR = './public';

function swallowError(error) {
    console.log(error.message.toString());
    this.emit('end')
}

gulp.task('less', function () {
    return gulp.src([
      SOURCE_DIR + '/less/styles.less',
      SOURCE_DIR + '/less/oops.less',
      SOURCE_DIR + '/less/booking-manager-small.less',
      SOURCE_DIR + '/less/booking-manager.less'
    ])
        .pipe(less())
        .on('error', swallowError)
        .pipe(gulp.dest(OUTPUT_DIR + '/css'))
        //.pipe(browserSync.reload({ stream: true }))
});

gulp.task('js', function() {
    return gulp.src(SOURCE_DIR + '/js/index.ts')
        .pipe(webpackStream(config, webpack))
        .pipe(gulp.dest(OUTPUT_DIR + '/js/'));
});


gulp.task('copy-assets', function () {
    console.log('Copying images...');
    gulp.src('./assets/**/*')
        .pipe(gulp.dest(OUTPUT_DIR + '/img'));

    console.log('Copying fonts...');
    gulp.src(SOURCE_DIR + '/fonts/*')
        .pipe(gulp.dest(OUTPUT_DIR + '/fonts'));
});

gulp.task('copy-pseudo-public', function () {
  console.log('Copying filder __public__...');
  gulp.src('./__public__/**/*')
    .pipe(gulp.dest(OUTPUT_DIR));
});

gulp.task('watch', function () {
    gulp.watch(['src/less/**/*.less'], ['less']);
});

gulp.task('start-frontend', ['copy-assets', 'watch']);
gulp.task('build-frontend', ['copy-assets', 'copy-pseudo-public', 'less', 'js']);
