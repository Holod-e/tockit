var gulp = require("gulp"),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	browsersync = require('browser-sync').create();

//static server + watching scss/html files
gulp.task('serve',['sass'], function() {
	browsersync.init ({
		server: "./app"
	});
	gulp.watch("app/sass/*.scss", ['sass']);
	gulp.watch("app/*.html").on('change', browsersync.reload);
});



//sass
gulp.task('sass', function () {
	return gulp.src('app/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({ browsers: ['last 25 versions'],
            cascade: false}))
    .pipe(gulp.dest('app/css'))
    .pipe(browsersync.stream());

});


// task default
gulp.task('default', ['serve']);
