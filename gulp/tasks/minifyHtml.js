var gulp = require('gulp');
var config = require('../config').markup;
var htmlmin = require('gulp-htmlmin');
var size = require('gulp-filesize');

gulp.task('minifyHtml', function() {
    return gulp.src(config.src)
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true,
            removeAttributeQuotes: true,
            removeStyleLinkTypeAttributes: true
        }))
        .pipe(gulp.dest(config.dest))
        .pipe(size());
});
