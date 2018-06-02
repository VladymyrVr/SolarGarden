var gulp = require("gulp");

var sass = require("gulp-sass"),
    cssnano = require("gulp-cssnano"),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify"),
    rename = require("gulp-rename");

gulp.task("html", function() {
    return gulp.src("src/index.html")
        .pipe(gulp.dest("dist"));
});

gulp.task("htmlfiles", function() {
    return gulp.src("src/html/*.html")
        .pipe(gulp.dest("dist/html"));
});

gulp.task("sass", function() {
    return gulp.src("src/styles/scss/main.scss")
        .pipe(concat('main.scss'))
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: false
        }))
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest("dist/styles/stylesheets"));
});

gulp.task("scripts", function() {
    return gulp.src("src/js/*.js")
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest("dist/js"));
});

gulp.task('imgs', function() {
    return gulp.src("src/img/*.+(jpg|jpeg|png|gif|ico)")
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            interlaced: true
        }))
        .pipe(gulp.dest("dist/img"))
});

gulp.task('imgFile', function() {
    return gulp.src("src/img/gallery-photo/*")
        .pipe(gulp.dest("dist/img/gallery-photo"));
});


gulp.task("watch", function() {
    gulp.watch("src/*.html", ["html"]);
    gulp.watch("src/js/*.js", ["scripts"]);
    gulp.watch("src/sass/*.sass", ["sass"]);
    gulp.watch("src/images/*.+(jpg|jpeg|png|gif)", ["imgs"]);
});

gulp.task("default", ["html", "htmlfiles", "sass", "scripts", "imgs", "watch"]);
