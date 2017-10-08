/**
 * Created by steve on 10/20/15.
 */
module.exports = function(grunt) {
	require('time-grunt')(grunt);
	require('jit-grunt')(grunt);

	grunt.initConfig({
		clean: {
			dev: ['css', 'img', 'js/app.js', 'js/app.min.js', 'build/**/*.html'],
			build: ['build'],
			dist: ['dist']
		},
		concat: {
			options: {
				separator: ';'
			},
			vendor: {
				src: [
					'vendor/angular/angular.min.js',
					'vendor/angular-material/angular-material.min.js',
					'vendor/angular-animate/angular-animate.min.js',
					'vendor/angular-aria/angular-aria.min.js',
					'vendor/angular-resource/angular-resource.min.js',
					'vendor/angular-ui-router/release/angular-ui-router.min.js',
					'vendor/isteven-angular-omni-bar/isteven-omni-bar.js'
				],
				dest: 'build/js/vendor.js'
			},
			app: {
				src: ['app/js/**/*.js'],
				dest: 'build/js/app.js'
			}
		},
		connect: {
			server: {
				options: {
					port: 8000,
					hostname: '*',
					base: 'build',
					livereload: 35729
				}
			}
		},
		copy: {
			build: {
				files: [
					{
						expand: true,
						flatten: true,
						src: ['app/*.html'],
						dest: 'build',
						filter: 'isFile'
					},
					{
						expand: true,
						flatten: true,
						src: ['app/css/{style,vendor-styles}.css'],
						dest: 'build/css',
						filter: 'isFile'
					},
					{
						expand: true,
						cwd: 'app/img/',
						src: ['**/*.{png,jpg,svg}'],
						dest: 'build/img',
						filter: 'isFile'
					}
				]
			},
			dist: {
				files: [
					{
						expand: true,
						flatten: true,
						src: ['app/*.html'],
						dest: 'dist',
						filter: 'isFile'
					},
					{
						expand: true,
						flatten: true,
						src: ['app/css/{style,vendor-styles}.css'],
						dest: 'dist/css',
						filter: 'isFile'
					},
					{
						expand: true,
						flatten: true,
						src: ['build/js/vendor.js', 'build/js/app.min.js', 'build/js/app.js'],
						dest: 'dist/js',
						filter: 'isFile'
					}
				]
			}
		},
		imagemin: {
			dist: {
				files: [
					{
						expand: true,
						cwd: 'app/img',
						src: ['**/*.{png,jpg,gif}'],
						dest: 'dist/img'
					}
				]
			}
		},
		sass: {
			build: {
				options: {
					style: 'expanded'
				},
				files: {
					'app/css/vendor-styles.css': 'app/css/vendor-styles.scss',
					'app/css/style.css': 'app/css/style.scss'
				}
			},
			app: {
				files: {
					'app/css/style.css': 'app/css/style.scss'
				}
			},
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'app/css/vendor-styles.css': 'app/css/vendor-styles.scss',
					'app/css/style.css': 'app/css/style.scss'
				}
			}
		},

		uglify: {
			app: {
				options: {
					mangle: false
				},
				files: {
					'build/js/app.min.js': ['build/js/app.js']
				}
			}
		},

		watch: {
			all: {
				files: ['app/*.html', 'app/css/**/*.scss', 'app/js/**/*.js', 'app/js/app.js'],
				tasks: ['clean:dev', 'sass:app', 'copy:build', 'concat:app', 'uglify']
			},
			options: {
				livereload: true
			}
		}
	});

	grunt.registerTask('cleanse', ['clean']);

	grunt.registerTask('default', [
		'clean',
		'sass:build',
		'copy:build',
		'concat',
		'uglify',
		'connect',
		'watch:all'
	]);

	grunt.registerTask('dist', ['clean', 'sass:dist', 'concat', 'uglify', 'copy', 'imagemin:dist']);
};
