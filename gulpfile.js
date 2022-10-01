var {src, dest}  = require('gulp');
var sass = require('gulp-sass')(require('node-sass'));

function css()
{
    return src('src/*.scss')
    .pipe(sass())
    .pipe(dest('dist/css'))
};

exports.default = css;