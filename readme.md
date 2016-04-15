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

---------
In summary, build tools help us to compile our code so we don't have to do it manually and repeatedly.

## Grunt


![Grunt](grunt.jpg)

>"Why use a task runner?
In one word: automation."

> ~ Grunt Documentation

Grunt is a popular Javascript automation tool used for various front-end tasks including refreshing the browser when you change a script, minifying code, running tests, etc..

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
### You-do: Grunt SASS (25 min)


## Webpack

[Webpack Documentation](https://webpack.github.io/)

Webpack is a code bundler.

It is used to bundle JavaScript files to run in our browsers, and can be used for transforming, bundling, or packaging assets and resources.

In essence, it takes your code, transforms and bundles it, then returns a brand new version of your code.

We will be using Webpack with React!

## You-do: Setup

Checkout back to the starter branch of Bamsay, and then `git checkout -b <branch name>` to a new branch.

run: `npm install webpack --save-dev`

Try testing it out by running `webpack` in the terminal
>if that doesn't work, try `node_modules/.bin/webpack`

You should see something like:

```bash
webpack 1.12.12
Usage: https://webpack.github.io/docs/cli.html

Options:
  --help, -h, -?
  --config
  --context
  --entry
...
  --display-cached-assets
  --display-reasons, --verbose, -v

Output filename not configured.
```

## We-Do: Initial Webpack Installation

Each loader is an object, the first key value pair is what type of file you want to apply it to, ex anything that ends in `.js`, and what types of files do we not want to. The last one, we want to apply loader(package),

After the loader is applied, specify where to send the results. Specify an output filename(what it is called), and then tell it the path(where to put it)

Convention put it in the `'dist'`, or `distribution` directory, the folder will be creating by using this.


Let's load another package:

`webpack html plugin`

The last property is where where you want script tag to go, head or body, that will be pointing to our bundled code

Pass in config as object to plugins

-run webpack

npm install -g webpack

1. watch, waits for any changes
2. minifies code

`Babel.js`:

Finally, in package.json, we need to add this to our scripts key:

`"start": 'webpack -w'`


## Travis

## Closing (5 min)

### Additional Resources

[Grunt Tutorial](http://www.brianchu.com/blog/2013/07/11/grunt-by-example-a-tutorial-for-javascripts-task-runner/)
[Travis](https://travis-ci.org/)
[Webpack as middleware](https://webpack.github.io/docs/webpack-dev-middleware.html)
