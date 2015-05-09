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

Add the task config to the grunt initConfig block.

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