'use strict';  
module.exports = function(grunt) {
  //load all grunt plugin
  require('load-grunt-tasks')(grunt);
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    //browserify config
    browserify: {
      dist: {
        files: {
          './js/main.min.js': ['./js/**']
        },
        options: {
          transform: ['babelify']
        }
      }
    },
})
  //run Tasks
  grunt.registerTask('default', ['browserify']);
};