'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        dom_munger: {
            dist: {
                options: {
                    read: [
                      { selector: 'link', attribute: 'href', writeto: 'cssRefs', isPath: true },
                      { selector: 'script', attribute: 'src', writeto: 'jsRefs', isPath: true },
                      { selector: 'link', attribute: 'href', writeto: 'cssRefsWithoutPath', isPath: false },
                      { selector: 'script', attribute: 'src', writeto: 'jsRefsWithoutPath', isPath: false }
                    ],
                    remove: ['link', 'script'],
                    append: [
                      { selector: 'head', html: '<link href="application.min.css" rel="stylesheet">' },
                      { selector: 'body', html: '<script src="application.min.js"></script>' }
                    ]
                },
                src: 'app/index.html',
                dest: 'dist/index.html'
            },
            devbuild: {
                options: {
                    read: [
                      { selector: 'link', attribute: 'href', writeto: 'cssRefs', isPath: true },
                      { selector: 'script', attribute: 'src', writeto: 'jsRefs', isPath: true },
                      { selector: 'link', attribute: 'href', writeto: 'cssRefsWithoutPath', isPath: false },
                      { selector: 'script', attribute: 'src', writeto: 'jsRefsWithoutPath', isPath: false }
                    ],
                    remove: ['link'],
                    append: [
                      { selector: 'head', html: '<link href="application.css" rel="stylesheet">' },
                    ]
                },
                src: 'app/index.html',
                dest: 'devbuild/index.html'
            },
        },

        copy: {
            dist: {
                cwd: 'app',
                src: ['fonts/**', 'images/**'],
                dest: 'dist',
                expand: true
            },
            devbuild: {
                cwd: 'app',
                src: ['<%= dom_munger.data.jsRefsWithoutPath %>', '<%= dom_munger.data.cssRefsWithoutPath %>', 'fonts/**', 'images/**', 'views/**'],
                dest: 'devbuild',
                expand: true
            },
            fonts: {
                cwd: 'app',
                src: ['fonts/**'],
                dest: 'devbuild',
                expand: true
            },
            images: {
                cwd: 'app',
                src: ['images/**'],
                dest: 'devbuild',
                expand: true
            },
        },

        clean: {
            dist: {
                src: ['dist']
            },
            devbuild: {
                src: ['devbuild']
            },
            devstylesheets: {
                src: ['devbuild/**/*.css', 'devbuild/**/*.less', 'devbuild/**/*.sass', 'devbuild/**/*.scss', '!devbuild/application.css']
            },
            diststylesheets: {
                src: ['dist/**/*.css', 'dist/**/*.less', 'dist/**/*.sass', 'dist/**/*.scss', '!dist/application.min.css']
            },
            distscripts: {
                src: ['dist/**/*.js', '!dist/application.min.js']
            }
        },

        less: {
            dist: {
                files: {
                    'dist/application.css': 'app/styles/application.less'
                }
            },
            devbuild: {
                files: {
                    'devbuild/application.css': 'app/styles/application.less'
                }
            }
        },

        autoprefixer: {
            dist: {
                cwd: 'dist',
                src: ['application.css'],
                dest: 'dist',
                expand: true
            },
            devbuild: {
                cwd: 'devbuild',
                src: ['application.css'],
                dest: 'devbuild',
                expand: true
            }
        },

        cssmin: {
            dist: {
                src: 'dist/application.css',
                dest: 'dist/application.min.css'
            }
        },

        jshint: {
            dist: {
                options: {
                    jshintrc: '.jshintrc',
                    reporter: require('jshint-stylish'),
                    force: true
                },
                files: {
                    src: ['app/scripts/**/*.js']
                }
            },
        },

        uglify: {
            dist: {
                src: '<%= dom_munger.data.jsRefs %>',
                dest: 'dist/application.min.js'
            }
        },

        watch: {
            options: {
                livereload: true
            },
            dist: {
                files: ['app/**'],
                tasks: ['dist']
            },
            devbuild: {
                files: ['app/**/*.{html,htm,md,js,json,css,less,sass,scss,png,jpg,jpeg,gif,ico,webp,svg,woff,ttf,eot}', '!app/bower_components/**'],
                tasks: ['dom_munger', 'less:devbuild', 'autoprefixer:devbuild', 'copy:fonts', 'copy:images', 'copy:devbuild']
            }
        },

        connect: {
            devbuild: {
                options: {
                    port: 4000,
                    livereload: true,
                    open:true,
                    base: 'devbuild/',
                    hostname: 'localhost'
                }
            },
            dist: {
                options: {
                    port: 4000,
                    livereload: true,
                    open: true,
                    base: 'dist/',
                    hostname: 'localhost'
                }
            }
        },
    });

    grunt.registerTask(
        'dist',
        'Compiles all of the assets and copies the files to the dist directory',
        ['clean:dist', 'dom_munger:dist', 'copy:dist', 'less:dist', 'autoprefixer:dist', 'cssmin', 'jshint', 'uglify', 'clean:diststylesheets', 'clean:distscripts']
    );

    grunt.registerTask(
        'devbuild',
        'Compiles all of the assets and copies the files to the devbuild directory',
        ['clean:devbuild', 'dom_munger:devbuild', 'copy:devbuild', 'less:devbuild', 'autoprefixer:devbuild', 'clean:devstylesheets']
    );

    grunt.registerTask(
        'servedist',
        'Watches the project for changes, automatically builds them and runs a server',
        ['connect:dist', 'watch:dist']
    );

    grunt.registerTask(
        'servedev',
        'Watches the project for changes, automatically creates a development build and serves the build',
        ['connect:devbuild', 'watch:devbuild']
    );

    grunt.registerTask(
        'default',
        'Builds a development build, and begins serving from the directory',
        ['devbuild', 'servedev']
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
};
