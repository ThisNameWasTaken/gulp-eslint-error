const { src } = require('gulp');
const eslint = require('gulp-eslint');
const eslintConfig = require('./.eslintrc.js');

const lint = () =>
  src('src/js/*.js')
    .pipe(eslint(eslintConfig))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());

module.exports = {
  lint,
  default: lint,
};
