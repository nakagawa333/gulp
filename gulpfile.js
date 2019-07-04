const gulp = require("gulp");
const sass = require("gulp-sass");

sass.compiler = require("node-sass");

gulp.task("default",function(){
	return(
		gulp
		   .src("css/style.sass")
		   .pipe(sass())
		   ,pipe(gulp.dest("css"))
		)
})


// gulp.task('sass', function () {
//   return gulp.src('./sass/*.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('./css'));
// });

// gulp.task('css',function(){
// 	gulp.src('./css/')
// 	 .pipe(uglifycss({
// 	 	"maxLineLen":80,
// 	 	"uglyComments":true
// 	 }))
// 	   .pipe(gulp.dest('./dist/'));
// })

// gulp.task("sass:watch",function(){
// 	gulp.watch('./sass/**/*.scss', ['sass']);
// })