module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    app: {
      name: 'addresses',
      livereload: 35729
    },

    watch: {
      js: {
        files: ['<%= app.name %>/**/*.js'],
        options: {
          livereload: '<%= app.livereload %>'
        }
      },
      livereload: {
        options: {
          livereload: '<%= app.livereload %>'
        },
        files: [
          '<%= app.name %>/**/*.js',
          '<%= app.name %>/**/*.less',
          '<%= app.name %>/**/*.mustache',
          '<%= app.name %>/**/*.html',
        ]
      }
    },

    connect: {
      options: {
        port: 9001,
        hostname: 'localhost',
        livereload: '<%= app.livereload %>'
      },
      server: {
        options: {
          open: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('serve', ['connect', 'watch']);

};