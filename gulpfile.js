const gulp = require('gulp');
const path = require('path');
const pug = require('gulp-pug');
const less = require('gulp-less');
const browserSync = require('browser-sync').create();

const OUTPUT_DIR = './dist';

function swallowError(error) {
    console.log(error.message.toString());
    this.emit('end')
}

gulp.task('pug', function () {
    gulp.src([
        'src/pug/pages/*.pug',
        'src/pug/pages/jachting/*.pug'
    ])
        .pipe(pug({ pretty: true }))
        .on('error', swallowError)
        .pipe(gulp.dest(OUTPUT_DIR))
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('less', function () {
    return gulp.src('src/less/styles.less')
        .pipe(less())
        .on('error', swallowError)
        .pipe(gulp.dest(OUTPUT_DIR + '/css'))
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('browser-sync', ['less', 'pug'], function () {
    browserSync.init({
        server: {
            baseDir: OUTPUT_DIR,
            notify: true,
            serveStatic: ['.', '/img'],
            serveStaticOptions: {
                extensions: ['html']
            }
        }
    });
});

gulp.task('copy-assets', function () {
    gulp.src('./img/**/*')
        .pipe(gulp.dest(OUTPUT_DIR + '/img'))
});

gulp.task('watch', function () {
    gulp.watch(['src/less/**/*.less'], ['less']);
    gulp.watch(['src/pug/**/*.pug'], ['pug']);
    gulp.watch(['img/**/*'], ['copy-assets']);
});

gulp.task('start', ['browser-sync', 'watch']);
gulp.task('deploy', ['copy-assets', 'less', 'pug']);
