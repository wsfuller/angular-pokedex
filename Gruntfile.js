/**
 * Created by steve on 10/20/15.
 */
module.exports = function(grunt) {
  require('time-grunt')(grunt);
  require('jit-grunt')(grunt);

  grunt.initConfig({


    watch:{
      all:{
        files:[
          'app/*.html',
          'app/css/**/*.scss',
          'app/js/**/*.js',
          'app/js/app.js'
        ],
        tasks: [
          'clean',
          'sass:app',
          'copy',
          'concat:scripts'
        ]
      },
      options: {
        livereload: true
      }
    },

    sass: {
      build: {
        options: {
          style: 'expanded'
        },
        files:{
          'app/css/vendor-styles.css' : 'app/css/vendor-styles.scss',
          'app/css/style.css': 'app/css/style.scss'
        }
      },
      app:{
        files:{
          'app/css/style.css': 'app/css/style.scss'
        }
      }
    },

    copy: {
      main: {
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
      }
    },

    concat: {
      options: {
        separator: ';',
      },
      scripts: {
        src: [
          'vendor/angular/angular.js',
          'vendor/angular-material/angular-material.js',
          'vendor/angular-animate/angular-animate.js',
          'vendor/angular-aria/angular-aria.js',
          'vendor/angular-resource/angular-resource.js',
          'vendor/isteven-angular-omni-bar/isteven-omni-bar.js',
          'app/js/**/*.js'
        ],
        dest: 'build/js/app.js',
      },
    },

    clean: {
      build: [
        'build'
      ]
    },


    connect: {
      server: {
        options: {
          port: 8000,
          hostname: '*',
          //open: true,
          base: 'build',
          livereload: 35729
        }
      }
    }
  });



  grunt.registerTask('cleanse', ['clean']);
  //grunt.registerTask('concatScripts', ['concat:scripts']);

  grunt.registerTask('sassy', ['sass:build:app']);


  grunt.registerTask('default', [
    'clean',
    'sass:build',
    'copy',
    'concat:scripts',
    'connect',
    'watch:all'
  ]);









};