var gulp = require('gulp');

gulp.task('default', function() {
  console.log('I am the default task!');
});

gulp.task('date', function(){
  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth()+1;
  var year = today.getFullYear();
  console.log("Yay, today is " + month + '/' + day + '/' + year);
});
