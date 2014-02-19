module.exports = function(grunt) {

  // Modules
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('bootcamp');

  // Grunt Tasks
  grunt.initConfig({

    dir : {
      src : 'stylesheets',
      dist : 'dist'
    },

    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n',
      },
      dist: {
        src: [
          '<%= dir.src %>/settings/_order.scss',
          '<%= dir.src %>/helpers/_str-compare.scss',
          '<%= dir.src %>/helpers/_swap.scss',
          '<%= dir.src %>/algorithms/_bubble-sort.scss',
          '<%= dir.src %>/algorithms/_comb-sort.scss',
          '<%= dir.src %>/algorithms/_insertion-sort.scss',
          '<%= dir.src %>/algorithms/_quick-sort.scss',
          '<%= dir.src %>/algorithms/_selection-sort.scss',
          '<%= dir.src %>/algorithms/_shell-sort.scss',
          '<%= dir.src %>/helpers/_sort.scss'
        ],
        dest: '<%= dir.dist %>/_<%= pkg.name %>.scss',
      },
    },

    // Sass
    sass: {
      test: {
        options: {
          style: 'expanded',
          quiet: 'true',
          loadPath: './node_modules/bootcamp/dist' // or './bower_components/bootcamp/dist'
        },
        files: {
          './tmp/results.css': './test/test.scss'
        }
      }
    },

    // Bootcamp
    bootcamp: {
      test: {
        files: {
          src: ['./tmp/results.css']
        }
      }
    },

    // Watch
    watch: {
      dist: {
        files: [
                './test/**/*.scss',
                './<%= dir.src %>/**/*.scss'
                ],
        tasks: ['test']
      }
    }
  });

  // Tasks
  grunt.registerTask('test', ['sass', 'bootcamp']);
  grunt.registerTask('dev', ['test', 'watch']);
  grunt.registerTask('build', ['concat']);

};
