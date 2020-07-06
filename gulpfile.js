const { series, parallel } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const watch = require('gulp-watch')


function transformaCSS() {
    return gulp.src('sass/index.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({ "uglifyComments": true}))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('css'))
}

function modificaArquivos() {
    gulp.watch('sass/**/*.sass', transformaCSS)
}

function geraBuild() {
}

exports.default = series(
    modificaArquivos
)