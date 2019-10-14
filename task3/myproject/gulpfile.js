var gulp = require('gulp');

//var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var del = require('del');
var browserSync = require('browser-sync').create();

//Порядок подключения .css файлов
var cssFiles = [
    './src/css/reset.css',
    './src/css/main.css',
    './src/css/image.css',
    './src/css/margin.css',
    './src/css/padding.css',
    './src/css/theme.css',
    './src/css/text.css',
    './src/css/media.css'
]

//Порядок подключения .js файлов
var jsFiles = [
    //Нет файлов
]

//Таск на стили
function styles() {
    return gulp.src(cssFiles)

        .pipe(concat('style.css'))

        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))

        .pipe(cleanCSS({
            level: 2
        }))

        .pipe(gulp.dest('./build/css'))
        .pipe(browserSync.stream());
}

//Таск на картинки
function images() {
    return gulp.src('./src/Image/*.jpg')

    .pipe(gulp.dest('./build/Image'))
}

//Таск на скрипты
function scripts() {
    return gulp.src(jsFiles)

        .pipe(concat('script.js'))

        .pipe(uglify({
            toplevel: true
        }))

        .pipe(gulp.dest('./build/js'))
        .pipe(browserSync.stream());
}

//Удалить всё в указанной папке
function clean() {
    return del(['build/*'])
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    //Слежка за .css файлами
    gulp.watch('./src/css/**/*.css', styles)
    //Слежка за .js файлами
    gulp.watch('./src/js/**/*.js', scripts)
    //Синхронизация при изменении .html файла
    gulp.watch("./*.html").on('change', browserSync.reload);
}

//gulp.task('styles', styles);

//gulp.task('images', images);

//gulp.task('scripts', scripts);

//gulp.task('del', clean);

gulp.task('watch', watch);

gulp.task('build', gulp.series(clean, gulp.parallel(styles, images, scripts)));

gulp.task('dev', gulp.series('build', 'watch'));