const gulp = require("gulp");
const concat = require("gulp-concat");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const del = require("del");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const browserSync = require("browser-sync").create();

const jsFiles = ["./src/js/lib.js", "./src/js/main.js"];

function styles() {
  return gulp
    .src("./src/css/**/*.css")
    .pipe(concat("style.css"))
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false,
      })
    )
    .pipe(
      cleanCSS({
        level: 2,
      })
    )
    .pipe(gulp.dest("./build/css"))
    .pipe(browserSync.stream());
}

function sassStyles() {
  return gulp
    .src("./src/scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("./src/css"))
    .pipe(browserSync.stream());
}

function scripts() {
  return gulp
    .src(jsFiles)
    .pipe(concat("script.js"))
    .pipe(
      uglify({
        toplevel: true,
      })
    )
    .pipe(gulp.dest("./build/js"))
    .pipe(browserSync.stream());
}

function move() {
  return gulp
    .src(["./*.html", "./src/css/**/*.map"])
    .pipe(gulp.dest("./build/"));
}

function moveImages() {
  return gulp.src(["./src/img/*"]).pipe(gulp.dest("./build/img/"));
}

function clean() {
  return del(["build/*"]);
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./build/",
    },
  });
  gulp.watch("./src/scss/**/*.scss", gulp.series(sassStyles));
  gulp.watch("./src/css/**/*.css", styles);
  gulp.watch("./src/js/**/*.js", scripts);
  gulp.watch("./src/img/*", moveImages);
  gulp.watch("./*.html", move);
  gulp.watch("./*.html").on("change", browserSync.reload);
}

gulp.task("styles", styles);
gulp.task("sass", sassStyles);
gulp.task("scripts", scripts);
gulp.task("watch", watch);
gulp.task(
  "build",
  gulp.series(
    clean,
    gulp.parallel(styles, scripts, sassStyles, move, moveImages)
  )
);
gulp.task("dev", gulp.series("build", "watch"));
