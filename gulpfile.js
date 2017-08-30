const gulp = require('gulp');
// const path = require('path');
// const pug = require('gulp-pug');
const less = require('gulp-less');
const webpack = require('webpack');
const config = require('./webpack.config.js');
const webpackStream = require('webpack-stream');
// const browserSync = require('browser-sync').create();

const SOURCE_DIR = './src';
const OUTPUT_DIR = './public';

function swallowError(error) {
    console.log(error.message.toString());
    this.emit('end')
}

// gulp.task('pug', function () {
//     gulp.src([
//         'src/pug/pages/*.pug',
//         'src/pug/pages/jachting/*.pug'
//     ])
//         .pipe(pug({ pretty: true }))
//         .on('error', swallowError)
//         .pipe(gulp.dest(OUTPUT_DIR))
//         .pipe(browserSync.reload({ stream: true }))
// });

gulp.task('less', function () {
    return gulp.src(SOURCE_DIR + '/less/styles.less')
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

// gulp.task('browser-sync', ['less', 'pug'], function () {
//     browserSync.init({
//         server: {
//             baseDir: OUTPUT_DIR,
//             notify: true,
//             serveStatic: ['.', '/img'],
//             serveStaticOptions: {
//                 extensions: ['html']
//             }
//         }
//     });
// });

gulp.task('copy-assets', function () {
    console.log('Copying images...');
    gulp.src('./img/**/*')
        .pipe(gulp.dest(OUTPUT_DIR + '/img'));

    console.log('Copying fonts...');
    gulp.src(SOURCE_DIR + '/fonts/*')
        .pipe(gulp.dest(OUTPUT_DIR + '/fonts'));
});

gulp.task('watch', function () {
    gulp.watch(['src/less/**/*.less'], ['less']);
    // gulp.watch(['src/pug/**/*.pug'], ['pug']);
    // gulp.watch(['img/**/*'], ['copy-assets']);
});

// gulp.task('start', ['browser-sync', 'copy-assets', 'watch']);
gulp.task('start-frontend', ['copy-assets', 'watch']);
// gulp.task('deploy', ['copy-assets', 'js', 'less', 'pug']);
