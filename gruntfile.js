module.exports = function (grunt) {

    // configure tasks
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        // 'string-replace': {
        //     build: {
        //         options: {
        //             replacements: [{
        //                 pattern: /Build: (\d+)\.(\d+)\.(\d+)/g,
        //                 replacement: function(match, p1, p2, p3) {
        //                     p3++;
        //                     return "Build: " + p1 + '.' + p2 + '.' + p3;
        //                 }
        //             }]
        //         },
        //         files: [{
        //             expand: true,
        //             flatten: true,
        //             src: ['index.html']
        //         }]
        //     }
        // },
        less: {
            development: {
                files: {
                    'release/css/jquery.spinner-control.css': 'src/css/jquery.spinner-control.less'
                }
            }
        },
        cssmin: {
            options: {
                sequence: false
            },
            development: {
                files: {
                    'release/css/jquery.spinner-control.min.css': 'release/css/jquery.spinner-control.css'
                }
            }
        },
        watch: {
            styles: {
                files: ['src/css/*.less'], // which files to watch
                tasks: ['less', 'cssmin'],
                options: {
                    nospawn: true
                }
            },
            scripts: {
                files: ['scr/js/*.js', '!js/*.min.js'],
                tasks: ['uglify'],
                options: {
                    nospawn: true
                }
            }
        },
        // concat: {
        //     dist_main: {
        //         src: [
        //             // utility module
        //             'js/utility.module.js',
        //             'js/utility.page.provider.js',
        //             'js/utility.dashNothing.filter.js',
        //             // github module
        //             'js/github.module.js',
        //             'js/github.gitBase.provider.js',
        //             'js/github.gitService.provider.js',
        //             'js/github.kinveyBase.provider.js',
        //             'js/github.kinveyService.provider.js',
        //             'js/github.auth.controller.js',
        //             // main module
        //             'js/main.module.js',
        //             'js/main.home.controller.js',
        //             'js/main.search.controller.js',
        //             'js/main.user.controller.js'
        //         ],
        //         dest: 'js/app.compiled.js',
        //     },
        //     dist_libs: {
        //         src: [
        //             'bower_components/jquery/dist/jquery.min.js',
        //             'bower_components/angular/angular.min.js',
        //             'bower_components/angular-ui-router/release/angular-ui-router.min.js',
        //             'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
        //             'bower_components/ngStorage/ngStorage.min.js',
        //             'bower_components/bootstrap/dist/js/bootstrap.min.js',
        //             'bower_components/angulartics/dist/angulartics.min.js',
        //             'bower_components/angulartics-google-analytics/dist/angulartics-ga.min.js'
        //         ],
        //         dest: 'js/libs.min.js',
        //     },
        //     dist_css: {
        //         src: [
        //             'bower_components/bootstrap/dist/css/bootstrap.min.css',
        //             'css/main.min.css'
        //         ],
        //         dest: 'css/app.compiled.min.css',
        //     }
        // },
        copy: {
            demo: {
                files: [
                    // includes files within path
                    {
                        expand: true,
                        cwd: 'bower_components/jquery/dist/',
                        src: ['jquery.min.js'],
                        dest: 'demo/',
                        filter: 'isFile'
                    }
                ],
            },
        },
        uglify: {
            development: {
                files: {
                    // 'js/app.min.js': ['js/app.js'],
                    // 'js/app.main.controller.min.js': ['js/app.main.controller.js'],
                    // 'js/app.gitService.provider.min.js': ['js/app.gitService.provider.js'],
                    'release/js/jquery.spinner-control.min.js': 'src/js/jquery.spinner-control.js'
                }
            }
        }
    });

    // load plugins
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    // grunt.loadNpmTasks('grunt-string-replace');

    // register tasks
    grunt.registerTask('default', ['copy', 'less', 'cssmin', 'uglify', 'watch']);
}
