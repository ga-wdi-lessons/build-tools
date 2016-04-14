# Build Tools

## Learning Objectives

* Define build tools
* Understand how we can use build tools
* Use build tools to automate workflow

## Framing (5 min)

<details>
<summary>
What type of tools have we already worked with throughout this course when building applications?
</summary>
<br>

```
rake
```
<br>
<br>
</details>

## Grunt

>"Why use a task runner?
In one word: automation."
> - Grunt Documentation


Grunt is an Javascript automation tool used for various front-end tasks including refreshing the browser when you change a script, minifying code, running tests.

It's really similar to `rake` in Ruby!

[Grunt Documentation](http://gruntjs.com/getting-started)

### Installation

```bash
$ npm install -g grunt-cli
```

>install globally

```bash
$ npm install grunt --save
```
>install as dependency in project


```bash
$ touch `Gruntfile.js`
```
>This needs to be installed in your root directory and will contain all of your related task configuration


### Plugins

[Grunt plugins](http://gruntjs.com/plugins)

Grunt has many additional plugins that we can use in our applications. We need to install them each individually using `npm install <plugin> --save`

### I-Do: Jshint Example (10 min)

We are going to be working with JSHINT plugin.

```bash
$ npm install grunt-contrib-jshint --save
```

In our `Gruntfile.js`, let's add the following:


```js
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
};
```
>We are loading in our dependency and using module.exports.

```js
module.exports = function(grunt) {
  grunt.initConfig({

  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
};

```
> Our initial configuration will be placed in a nested object


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

``` bash


```

## Jenkins

## Gulp

## Travis

## Bower


## Closing (5 min)

### Additional Resources

[Grunt Tutorial](http://www.brianchu.com/blog/2013/07/11/grunt-by-example-a-tutorial-for-javascripts-task-runner/)
