// ## grunt-docco-plus
"use strict";
var doccoPlus = require('docco-plus');

module.exports = function (grunt) {
  grunt.registerMultiTask('docco-plus', 'Docco-plus processor.', function () {
    // call docco-plus document method here
    doccoPlus.document(this.options({
      args: this.filesSrc
    }), this.async());
  });
};
