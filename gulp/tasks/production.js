var gulp = require('gulp');

gulp.task('production', ['images', 'fonts', 'minifyCss', 'uglifyJs']);
