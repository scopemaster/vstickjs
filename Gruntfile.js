'use strict';

module.exports = function(grunt) {

    var watchFiles = {
        clientViews: ['index.html'],
        clientJS: ['src/**/*.js', 'src/*.js'],
        clientCSS: ['app/*.css'],
        otherJS: ['Gruntfile.js'],
        otherViews: ['app/*.js']
    };
    
    var path = require('path');
    var reloadPort = 35749, files;

    // Project Configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
       
        express: {
          options: {
            port: 1339,
            hostname: 'localhost'
          },
          livereload: {
            options: {
              livereload: reloadPort,
              serverreload: false,
              bases:['.']
            }
          },
        },
        watch: {
            otherJS: {
                files: watchFiles.otherJS,
                options: {
                    livereload: reloadPort
                }
            },
            otherViews: {
                files: watchFiles.otherViews,
                options: {
                    livereload: reloadPort
                }
            },
            clientViews: {
                files: watchFiles.clientViews,
                options: {
                    livereload: reloadPort,
                }
            },
            clientJS: {
                files: watchFiles.clientJS,
                options: {
                    livereload: reloadPort
                }
            },
            clientCSS: {
                files: watchFiles.clientCSS,
                options: {
                    livereload: reloadPort
                }
            }
        },

       closurecompiler: {
            minify: {
                files: {
                    "build/vstickjs.min.js": ['src/VStickJS.js','src/styles/*.js','src/skins/*.js','src/core/*.js','src/controls/*.js']
                },
                options: {
                    "compilation_level": "WHITESPACE_ONLY"
                }
            }
       }
       
    });

    // Tasks
    require('load-grunt-tasks')(grunt);
    grunt.registerTask('serve', ['express','watch']);
    grunt.registerTask('build', ['closurecompiler:minify']);
};