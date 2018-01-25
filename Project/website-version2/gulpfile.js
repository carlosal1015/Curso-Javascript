const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const plumber = require('gulp-plumber');
const livereload = require('gulp-livereload');
const stylus = require('gulp-stylus');

gulp.task('stylus', () => {
  gulp.src('./public/css/*.styl')
    .pipe(plumber())
    .pipe(stylus())
    .pipe(gulp.dest('./public/css'))
    .pipe(livereload());
});

gulp.task('watch', () => {
  gulp.watch('./public/css/*.styl', ['stylus']);
});

gulp.task('develop', () => {
  livereload.listen();
  nodemon({
    script: 'app.js',
    ext: 'js coffee pug',
    stdout: false
  }).on('readable', function () {
    this.stdout.on('data', (chunk) => {
      if (/^Express server listening on port/.test(chunk)) {
        livereload.changed(__dirname);
      }
    });
    this.stdout.pipe(process.stdout);
    this.stderr.pipe(process.stderr);
  });
});

gulp.task('default', [
  'stylus',
  'develop',
  'watch'
]);
