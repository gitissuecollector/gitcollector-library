module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jst: {
            compile: {
                options: {
                    amd: false,
                    namespace: 'gcTemplates',
                    prettify: true,
                    processName: function (src) {
                        return src.split("/").slice(-1)[0];
                    },
                    templateSettings: {
                        variable: 'data',
                        interpolate : /\{\{(.+?)\}\}/g
                    }
                },
                files: {
                    "www/app/templates.js": ["www/app/layouts/*.html"]
                }
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['www/lib/*.js', 'www/app/*.js'],
                dest: 'www-built/GitCollector.js'
            }
        },
        uglify: {
            GitCollector: {
                files: {
                    'www-built/GitCollector.min.js': ['www-built/GitCollector.js']
                }
            }
        },
        compress: {
            main: {
                options: {
                    mode: 'gzip',
                    archive: 'www-built/GitCollector.min.js',
                    level: 8
                },
                src: ['www-built/GitCollector.min.js'],
                dest: 'www-built/GitCollector.min.js'
            }
        },
        copy: {
            main: {
                src: 'www/index.html',
                dest: 'www-built/index.html'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jst');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-copy');


    grunt.registerTask('default', ['jst', 'concat', 'uglify', 'compress', 'copy']);

};
