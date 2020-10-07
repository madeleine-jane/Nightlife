//  Require Gulp into file and define the variable
var gulp = require('gulp');

//  Run the example task, if installed correctly and "gulp talktome" is ran, "Hello From Zestcode" should be printed in the logs
gulp.task('talktome', function() {
console.log('Hello From Zestcode');
});