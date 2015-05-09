// grunt-docco
// https://github.com/DavidSouther/grunt-docco
//
// Copyright (c) 2012 David Souther
// Licensed under the MIT license.

"use strict";
var doccoPlus = require('docco-plus');

module.exports = function (grunt) {
  grunt.registerMultiTask('docco-plus', 'Docco-plus processor.', function () {
    // Either set the destination in the files block, or (prefferred) in { options: output }
    doccoPlus.document(this.options({
      args: this.filesSrc
    }), this.async());
  });
};
