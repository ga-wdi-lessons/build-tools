# Build Tools

## Learning Objectives

* Define build tools
* Understand how we can use build tools
* Use build tools to automate workflow

## Framing (5 min)

What type of build tools have we already worked with throughout this course?

## Grunt

>"Why use a task runner?
In one word: automation."

What is Grunt?
Grunt is an Javascript automation tool used for various front-end tasks including refreshing the browser when you change a script, minifying code, running tests.

It's really similar to `rake` in Ruby!

[GRUNT DOCUMENTATION](http://gruntjs.com/getting-started)

[NPM](https://www.npmjs.com/package/grunt)

```bash
$ npm install -g grunt-cli
```
```bash
$ npm install grunt --save
```

```bash
$ touch Gruntfile.js
```
>This needs to be installed in your root directory and will contain all of your related task configuration


[Grunt plugins](http://gruntjs.com/plugins)


>Each time grunt is run, it looks for a locally installed Grunt using node's require() system. Because of this, you can run grunt from any subfolder in your project.


In our Gruntfile:

```js
module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
      jshint: {
        all:  ['Gruntfile.js', 'app/**/*.js', '*.js']
      }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');


};

```

## Jenkins

## Gulp

## Travis

## Bower
