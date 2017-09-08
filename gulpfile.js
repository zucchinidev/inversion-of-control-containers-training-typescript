'use strict'
const gulp = require('gulp')
const tslint = require('gulp-tslint')
const tsc = require('gulp-typescript')
const runSequence = require('run-sequence')

gulp.task('lint', function () {
  const config = { formatter: 'verbose' }
  return gulp.src([
    'src/**/**.ts'
  ])
    .pipe(tslint(config))
    .pipe(tslint.report())
})

const tstProject = tsc.createProject('tsconfig.json', { typescript: require('typescript') })

gulp.task('build', function () {
  return gulp.src([
    'src/**/*.ts'
  ])
    .pipe(tstProject())
    .on('error', function () {
      process.exit(1)
    })
    .js.pipe(gulp.dest('dist/'))
})

gulp.task('default', function (cb) {
  runSequence('lint', 'build', cb)
})
