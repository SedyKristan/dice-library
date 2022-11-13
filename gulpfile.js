const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

// Responsible for compiling the sass into css
function buildStyles() {
    return src('dice/**/*.scss')
    .pipe(sass())
    .pipe(dest('css'))
}

// Actively watch the changes in sass file and automatically run buildStyles function
function watchTask() {
    watch(['dice/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)