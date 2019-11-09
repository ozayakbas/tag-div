module.exports = function(grunt) {
    grunt.initConfig({
        less: {
          development: {
            options: {
              compress: true,
              yuicompress: true,
              optimization: 2
            },
            files: {
              "assets/css/tag-div.css": "assets/css/less/tag-div.less"
            }
          }
        },
    //  concat: {
      //  options: {
      //    separator: ';',
       // },
       // dist: {
        //  src: ['_assets/js/a.js', '_assets/js/b.js'],
        //  dest: '_assets/js/deneme.js',
       // },
     // },
      watch: {
        styles: {
          files: ['**/*.less'], // which files to watch
          tasks: ['less'],
          options: {
            nospawn: true
          }
        },

     //   script: {
       //   files: ['**/*.js'],
       //   tasks: ['concat'],
        //  options: {
        //    nospawn: true
        //  }
       // },

      },
      browserSync: {
          dev: {
              bsFiles: {
                  src : [
                    '**/**.css',
                    '**/**.less',
                    '**/**.js',
                    '**/**.html'
                  ]
              },
              options: {
                  server: {
                      baseDir: "./"
                  },
                  watchTask: true
              }
          }
      }                                                                                                                                                                                                                                                             
    });

    require('jit-grunt')(grunt);
    grunt.registerTask('default', ['less',  'browserSync', 'watch']);
};