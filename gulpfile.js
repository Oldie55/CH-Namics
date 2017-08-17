var gulp = require('gulp'),
    util = require('gulp-util'),
    less = require('gulp-less'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean'),
    uglify = require('gulp-uglify'),
    refresh = require('gulp-refresh'),

    lessFiles = [
        'css/*.less'
    ],

    cssFiles = [
        'css/reset.css',
        'css/box-sizing.css',
        'css/tempCss/styles.css'
    ]
;

gulp.task('concatenateLessFiles', function () {
    return gulp.src(lessFiles)
        .pipe(concat('styles.less'))
        .pipe(gulp.dest('css/tempLess'))
});


gulp.task('lessToCss', ['concatenateLessFiles'], function () {
    return gulp.src('css/tempLess/styles.less')
        .pipe(less())
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest('css/tempCss'))
});

gulp.task('concatenateCss', ['lessToCss'], function () {

    return gulp.src(cssFiles)
        .pipe(concat('apps.css'))
        .pipe(gulp.dest('css'))
});

gulp.task('watch', function () {
    gulp.watch('css/*.less', ['concatenateCss']);
    gulp.watch('css/*.css', ['concatenateCss']);
    gulp.watch('*.html', ['concatenateCss']);

});

gulp.task('default', ['concatenateCss', 'watch']);







