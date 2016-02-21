'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');
var runSequence = require('run-sequence');
var merge = require('merge-stream');
var path = require('path');
var fs = require('fs');

var AUTOPREFIXER_BROWSERS = [
	'ie >= 10',
	'ie_mob >= 10',
	'ff >= 30',
	'chrome >= 34',
	'safari >= 7',
	'opera >= 23',
	'ios >= 7',
	'android >= 4.4',
	'bb >= 10'
];

var DIST = 'dist';

var dist = function(subpath) {
	return !subpath ? DIST : path.join(DIST, subpath);
};

var styleTask = function(stylesPath, srcs) {
	return gulp.src(srcs.map(function(src) {
			return path.join('app', stylesPath, src);
		}))
		.pipe($.changed(stylesPath, {extension: '.css'}))
		.pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
		.pipe(gulp.dest('.tmp/' + stylesPath))
		.pipe($.minifyCss())
		.pipe(gulp.dest(dist(stylesPath)))
		.pipe($.size({title: stylesPath}));
};

var imageOptimizeTask = function(src, dest) {
	return gulp.src(src)
		.pipe($.imagemin({
			progressive: true,
			interlaced: true
		}))
		.pipe(gulp.dest(dest))
		.pipe($.size({title: 'images'}));
};

var optimizeHtmlTask = function(src, dest) {
	var assets = $.useref.assets({
		searchPath: ['.tmp', 'app']
	});

	return gulp.src(src)
		.pipe(assets)
		// Concatenate and minify JavaScript
		.pipe($.if('*.js', $.uglify({
			preserveComments: 'some'
		})))
		// Concatenate and minify styles
		// In case you are still using useref build blocks
		.pipe($.if('*.css', $.minifyCss()))
		.pipe(assets.restore())
		.pipe($.useref())
		// Minify any HTML
		.pipe($.if('*.html', $.minifyHtml({
			quotes: true,
			empty: true,
			spare: true
		})))
		// Output files
		.pipe(gulp.dest(dest))
		.pipe($.size({
			title: 'html'
		}));
};

// Compile and automatically prefix stylesheets
gulp.task('styles', function() {
	return styleTask('styles', ['**/*.css']);
});

gulp.task('elements', function() {
	return styleTask('elements', ['**/*.css']);
});

// Optimize images
gulp.task('images', function() {
	return imageOptimizeTask('app/images/**/*', dist('images'));
});

// Copy all files at the root level (app)
gulp.task('copy', function() {
	var app = gulp.src([
		'app/*',
		'!app/test',
		'!app/elements',
		'!app/bower_components',
		'!**/.DS_Store'
	], {
		dot: true
	}).pipe(gulp.dest(dist()));

	// Copy over only the bower_components we need
	// These are things which cannot be vulcanized
	var bower = gulp.src([
		'app/bower_components/{webcomponentsjs,promise-polyfill}/**/*'
	]).pipe(gulp.dest(dist('bower_components')));

	return merge(app, bower)
		.pipe($.size({
			title: 'copy'
		}));
});

// Copy web fonts to dist
gulp.task('fonts', function() {
	return gulp.src(['app/fonts/**'])
		.pipe(gulp.dest(dist('fonts')))
		.pipe($.size({
			title: 'fonts'
		}));
});

// Scan your HTML for assets & optimize them
gulp.task('html', function() {
	return optimizeHtmlTask(
		['app/**/*.html', '!app/{elements,test,bower_components}/**/*.html'],
		dist());
});

// Vulcanize granular configuration
gulp.task('vulcanize', function() {
	return gulp.src('app/elements/elements.html')
		.pipe($.vulcanize({
			stripComments: true,
			inlineCss: true,
			inlineScripts: true
		}))
		.pipe(gulp.dest(dist('elements')))
		.pipe($.size({title: 'vulcanize'}));
});

// Clean output directory
gulp.task('clean', function() {
	return del(['.tmp', dist()]);
});

// Build production files, the default task
gulp.task('default', ['clean'], function(cb) {
	// Uncomment 'cache-config' if you are going to use service workers.
	runSequence(
		['copy', 'styles'],
		'elements',
		['images', 'fonts', 'html'],
		'vulcanize'
		cb);
});

// Load tasks for web-component-tester ???
// Adds tasks for `gulp test:local` and `gulp test:remote`
require('web-component-tester').gulp.init(gulp);
