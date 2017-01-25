/*
 * grunt-svgstore
 * https://github.com/FWeinb/grunt-svgstore
 *
 * Copyright (c) 2014 Fabrice Weinberg
 * Licensed under the MIT license.
 */

'use strict';

var multiline = require('multiline');

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // Configuration to be run (and then tested).
    svgstore: {
      options: {
        cleanup: ['fill']
      },
      defaults: {
        files: {
          'src/app/core/svg-sprite/svg-sprite.component.html': ['assets/icons/*.svg']
        },
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  grunt.loadNpmTasks('grunt-svgstore');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'svgstore', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);
  grunt.registerTask('svg', ['svgstore']);

};
