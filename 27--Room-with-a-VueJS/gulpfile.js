var gulp = require('gulp');

gulp.task('do-something', function(){
  console.log(arguments);
  console.log('I did something!');
});

gulp.task('sass', function(){
  // If I was just using Node JS...
  // var sass = require('node-sass');
  //
  // // node-sass src/scss/main.scss -o src/css/
  // sass.render({
  //   file: 'src/scss/main.scss',
  //   outFile: 'src/css/main.css'
  // });

  var sass = require('gulp-sass');

  gulp.src('src/scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/css/'))
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('dist/css/'))
}); // END gulp.task(sass)

gulp.task('watch', function(){
  gulp.watch('src/scss/*.scss', [ 'sass' ], function(){
    console.log('In your Sass files...', 'Building your CSS');
  });
  gulp.watch('src/*.html', [ 'build' ]);
})

gulp.task('clean', function(done){
  var del = require('del');

  del([
    'dist/**/*',
    'dist/**/.*',
    '!dist/.gitignore'
  ], done);
}); // END gulp.task(clean)

gulp.task('build', [ 'clean', 'sass' ], function(){
  gulp.src([ // gulp.from()
    'src/*', '!src/scss'
  ])
    .pipe(gulp.dest('dist/')); // gulp.into
});
