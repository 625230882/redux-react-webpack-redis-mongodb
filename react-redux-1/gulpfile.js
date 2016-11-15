const gulp = require("gulp");
const gulpWatch = require("gulp");
const concatenate = require("gulp-concat");
const babel = require("gulp-babel");
var sass = require('gulp-sass');


//const jsxFiles = "./index.js";
const scssFiles = "./styles/**/*.scss";



gulp.task('styles', () => {
    gulp.src(scssFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./styles'))
});


// gulp.task("jsx", () => {
//     return gulp
//         .src(jsxFiles)
//         .pipe(babel({
//             presets: ['es2015', 'react']
//         }))
//         .pipe(concatenate("components.js"))
//         .pipe(gulp.dest("./components"));
// });



gulp.task("watch", () => {
    //gulp.watch(jsxFiles, ["jsx"]);
    gulp.watch(scssFiles,['styles']);
});

gulp.task("default", ["watch"]);
