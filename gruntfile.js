module.exports = function (grunt) {

    // configure tasks
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
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
                tasks: ['less', 'cssmin', 'copy'],
                options: {
                    nospawn: true
                }
            },
            scripts: {
                files: ['scr/js/*.js', '!js/*.min.js'],
                tasks: ['uglify', 'copy'],
                options: {
                    nospawn: true
                }
            }
        },
        copy: {
            toDemo: {
                files: [{
                    expand: true,
                    cwd: 'bower_components/jquery/dist/',
                    src: ['jquery.min.js'],
                    dest: 'demo/js/',
                    filter: 'isFile'
                },
                {
                    expand: true,
                    cwd: 'release/js/',
                    src: ['jquery.spinner-control.min.js'],
                    dest: 'demo/js/',
                    filter: 'isFile'
                },
                {
                    expand: true,
                    cwd: 'release/css/',
                    src: ['jquery.spinner-control.min.css'],
                    dest: 'demo/css/',
                    filter: 'isFile'
                }],
            },
        },
        uglify: {
            development: {
                files: {
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
    grunt.loadNpmTasks('grunt-contrib-copy');

    // register tasks
    grunt.registerTask('default', ['less', 'cssmin', 'uglify', 'copy', 'watch']);
}
