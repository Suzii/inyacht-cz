const gulp = require('gulp');
const path = require('path');
const pug = require('gulp-pug');
const less = require('gulp-less');
const browserSync = require('browser-sync');

const OUTPUT_DIR = './dist';

function swallowError (error) {
    console.log(error.message.toString());
    this.emit('end')
}

gulp.task('pug', function(){
    gulp.src(['src/pug/index.pug'])
        .pipe(pug({pretty: true}))
        .on('error', swallowError)
        .pipe(gulp.dest(OUTPUT_DIR))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('less', function(){
    return gulp.src('src/less/styles.less')
        .pipe(less())
        .on('error', swallowError)
        .pipe(gulp.dest(OUTPUT_DIR + '/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', ['less', 'pug'],function(){
    browserSync({
        server: {baseDir: OUTPUT_DIR},
        notify: true,
        serveStatic: ['.', './img']
    })
});

gulp.task('watch', function(){
    gulp.watch(['src/less/**/*.less'], ['less']);
    gulp.watch(['src/pug/**/*.pug'], ['pug']);
});

gulp.task('default', ['browser-sync', 'watch']);
