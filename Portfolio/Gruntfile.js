'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        dom_munger: {
            dist: {
                options: {
                    read: [
                      { selector: 'script', attribute: 'src', writeto: 'jsRefs', isPath: true },
                      { selector: 'script', attribute: 'src', writeto: 'jsRefsWithoutPath', isPath: false }
                    ],
                    remove: ['script'],
                    append: [{ selector: 'body', html: '<script src="application.min.js"></script>' }]
                },
                src: 'index.html',
                dest: 'dist/index.html'
            }
        },

        copy: {
            dist: {
                cwd: '.',
                src: ['fonts/**', 'images/**', 'views/**', 'favicon.ico', 'old-browser.html', 'styles/application.min.css'],
                dest: 'dist',
                expand: true
            }
        },

        clean: {
            dist: {
                src: ['dist']
            }
        },

        htmlmin: {
            dist: {
                options: {
                    removeComments: true
                },
                expand: true,
                cwd: 'dist',
                src: ['**/*.html'],
                dest: 'dist/'
            }
        },

        uglify: {
            dist: {
                src: '<%= dom_munger.data.jsRefs %>',
                dest: 'dist/application.min.js'
            }
        }
    });

    grunt.registerTask(
        'default',
        'Compiles all of the assets and copies the files to the dist directory',
        ['clean:dist', 'dom_munger:dist', 'copy:dist', 'uglify:dist', 'htmlmin:dist']
    );

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-dom-munger');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
};
