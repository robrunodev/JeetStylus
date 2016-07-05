'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// gulp.task('sass', function () {
//   return gulp.src('dist/**/*.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('css'));
// });
//
// gulp.task('watch', function () {
//   gulp.watch('dist/**/*.scss', ['sass']);
// });

//-------------------------------------------

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("dist/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("dist/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
