[![Build Status](https://img.shields.io/travis/smravi/grunt-docco-plus.svg?style=flat-square)](https://travis-ci.org/smravi/grunt-docco-plus)
[![Code Climate](https://img.shields.io/codeclimate/github/smravi/grunt-docco-plus.svg?style=flat-square)](https://codeclimate.com/github/smravi/grunt-docco-plus)
[![Documentation](https://img.shields.io/badge/documentation-plus-green.svg?style=flat-square)](http://smravi.github.io/grunt-docco-plus/)

[![Dependency Status](https://img.shields.io/david/smravi/grunt-docco-plus.svg?style=flat-square)](https://david-dm.org/smravi/grunt-docco-plus)
[![devDependency Status](https://img.shields.io/david/dev/smravi/grunt-docco-plus.svg?style=flat-square)](https://david-dm.org/smravi/grunt-docco-plus#info=devDependencies)
[![peerDependency Status](https://img.shields.io/david/peer/smravi/grunt-docco-plus.svg?style=flat-square)](https://david-dm.org/smravi/grunt-docco-plus#info=peerDependencies)

[![NPM](https://nodei.co/npm/grunt-docco-plus.png)](https://nodei.co/npm/grunt-docco-plus/)
[![NPM](https://nodei.co/npm-dl/grunt-docco-plus.png?months=9&height=1)](https://nodei.co/npm/grunt-docco-plus/)


# grunt-docco-plus

Grunt plugin for [docco-plus](https://www.npmjs.com/package/docco-plus).

## Getting Started
Install this grunt plugin next to your project's [grunt.js gruntfile](http://gruntjs.com/) with

```

npm install grunt-docco-plus --save-dev`

```

Then add this line to your project's `grunt.js` gruntfile:

```javascript

grunt.loadNpmTasks('grunt-docco-plus');

```


## Documentation

Add the task config to the grunt initConfig block. All the options that are supported for [docco-plus](https://www.npmjs.com/package/docco-plus) can be passed.

```javascript

'docco-plus': {
  debug: {
    src: ['test/**/*.js'],
    options: {
      output: 'docs/'
    }
  }
}

```