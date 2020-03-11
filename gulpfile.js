var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var sass = require("gulp-sass");
const url = "http://localhost:3000";

function watch() {
  browserSync.init({
    injectChanges: true,
    // server: {
    //   baseDir: "./"
    // },
    socket: {
      domain: url
    },
    notify: false,
    open: false,
    proxy: url,
    hostname: url,
    port: 3000    
  });
  gulp.watch("./static/sass/**/*.scss", style);
}

function style() {
  return gulp
    .src("static/sass/style.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./"))
    .pipe(browserSync.stream());
}

exports.style = style;
// // exports.template = template;
exports.watch = watch;
