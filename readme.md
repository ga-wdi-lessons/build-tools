# Build Tools

## Learning Objectives

* Define build tools
* Introduce available build tools
* Use build tools to automate workflow

## Framing (5 min)

<details>
<summary>
What is minified code and why do we do it use it?</summary>
<br>

```
Code in which all unnecessary characters have been removed from source code without changing its functionality at all.
```
<br>
<br>
</details>


<details>
<summary>
When have you seen minified code before?</summary>
<br>

```
CDN files
```
<br>
<br>
</details>


<details>
<summary>
What is complied code and what is used for?</summary>
<br>

```
Taking things like SASS, CoffeeScript, HAML, etc and converting it into css/html/javascript so our browser knows how to read it!
```
<br>
<br>
</details>


Build tools compling our code so we don't have to do it manually and repeatedly 

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
>We are loading in our dependency and using module.exports to have access in our node application

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
      all:  ['Gruntfile.js', 'js/**/*.js']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');


};
```
<details>
<summary>
What do you think `'js/**/*.js'` is doing here?
</summary>
<br>

```
Linting all of of javascript files in our `js` directory
```
<br>
<br>
</details>

``` bash
$ grunt jshint
```
```
$ grunt jshint
Running "jshint:all" (jshint) task
>> 5 files lint free.

Done.
```
### You-do: Grunt SASS (20 min)

## Jenkins

## Travis

## Bower

## Webpack (React Preview :) )

3 Inital Steps:

Like a machine, apply transformations, what get out is a bundle of code. Complicated but powerful.

Webpack, at its core, is a code bundler. It takes your code, transforms and bundles it, then returns a brand new version of your code.

Each loader is an object, the first key value pair is what tpyoe of file you want to apply it to, ex anything that ends in .js, what types of files do we not want to. The last one, we want to apply loader(package),

preformance reasons, different in production.

After the loader is applied, specifiy where to send the results. Specificy an output filename(what it is called), and then tell it the path(where to put it)

-convention put it in the 'dist', distribution, the folder will be creating by using this.

Issue?

How do you tell html file to load that file.

Load another package
webpack html plugin

last one-where do you want script tag to go, head or body, pointing to our bundle code

Everytime it resaves

pass in config as object to plugins

-run webpack

npm install -g webpack

1. watch-waits for any changes
2. minifies code

`Babel.js`: Another transformation anything in ES6

in package.json, there is a scripts key-

"start": 'webpack' -w'


## Closing (5 min)

### Additional Resources

[Grunt Tutorial](http://www.brianchu.com/blog/2013/07/11/grunt-by-example-a-tutorial-for-javascripts-task-runner/)
