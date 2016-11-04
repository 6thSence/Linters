const gulp = require('gulp');
const stylelintGulp = require('gulp-stylelint');
const eslint = require('gulp-eslint');
const notify = require('gulp-notify');
const stylelint = require('stylelint');
const reporter = require('postcss-browser-reporter');
const postcss = require('gulp-postcss');

gulp.task('stylelint', () => {
   gulp.src('./src/style.css')
    .pipe(stylelintGulp({
       reporters: [
          {formatter: 'string', console: true}
       ]
    }))
    .on('error', notify.onError({ message: 'There is a JS error, please look the console for details'}));
});

// gulp.task('stylelint', () => {
//    const processors = [
//       stylelint(),
//       reporter({
//          selector: 'body:before'
//       })
//    ];
//
//    return gulp.src('./src/style.css')
//       .pipe(postcss(processors))
//       .pipe(gulp.dest('./bundle'));
// });

gulp.task('eslint', () => {
   gulp.src('./src/script.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .on('error', notify.onError({ message: 'There is a JS error, please look the console for details'}));
});