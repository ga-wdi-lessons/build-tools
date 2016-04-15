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

### You-do: Setup

`git checkout webpack_starter`

run: `npm install webpack --save-dev`

Try testing it out by running `webpack` in the terminal

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

<details>
<summary>
What does this tell us?
</summary>
<br>

```
We haven't configured what we actually want to do with webpack yet!
```
<br>
<br>
</details>

## STOP

### You Do: Configuring the Webpack

To actually configure our webpack, we need to create a new file in the root of our directory: `webpack.config.js`

Here we will need to define the folders and files that we want bundled, as well as any additional functionality from our tool. We are going to add in a few pieces of code:

```js
const path = require('path');

const PATHS = {
  js: path.join(__dirname, 'js'),
  build: path.join(__dirname, 'build')
};
```

<details>
<summary>
What do you think this first part is doing?
</summary>
<br>

```
This simply defines two folders within our app that we will be either reading or modifying with webpack.

*Note* 'path' is a node method
```
<br>
<br>
</details>

```js
module.exports = {
  // Entry accepts a path or an object of entries. We'll be using the
  // latter form given it's convenient with more complex configurations.
  entry: {
    js: PATHS.js
  }
```

<details>
<summary>
What do you think this next section does?
</summary>
<br>

```
Here we are defining the entry point of our webpack. In other words, whatdirectory do we want to look into and bundle?
```
<br>
<br>
</details>

Lastly, we will need to define the output. Where are we going to put thebundled code?

```js
,
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  }
};
```  

**Try running `webpack` in your terminal again. What happens?**

Check out your public folder and see what file was added in!

## STOP

### Setting up Webpack Server

Having to run `webpack` every time you make a change will get frustrating (and boring) quickly. We can set up the `webpack-dev-server` to help us out!

One of the best features of the dev server is Hot Module Replacement (HMR). The module will allow us to make changes, and see them automatically without a full page refresh.

To get started, run the following in you command line:

`npm i webpack-dev-server --save-dev`

We can now add this directly to our `package.json` file, allowing us the ability to start up our application immediately on the webpack dev server. Include the following in your `scripts` object in the `package.json` file:

`"start": "webpack-dev-server --content-base build"`

Go ahead and run `npm start` in your terminal. You should see something like:

![npm Start](npmStart.png)

If you open your browser to `localhost:8080`, you should see your index.html and any html rendered through your index.js file on the browser!

This is cool and all, but not really any different than before other than running a different command in your terminal. We want to be able to make changes to our code and see the updates without having to do any additional refreshing.

We will have to install another package to get this up and running: `npm i webpack-merge --save-dev`

This package allows us to merge objects together. In this case, we will be merging the object that sets our paths, with HMR.

In webpack.config.js, include the following on line 2:

```js
const merge = require('webpack-merge');
const webpack = require('webpack');
const TARGET = process.env.npm_lifecycle_event;
```

We will then replace everything from `module.exports` and down with the following:

```js
const common = {

  // Entry accepts a path or an object of entries. We'll be using the
  // latter form given it's convenient with more complex configurations.
  entry: {
    app: PATHS.js
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  }
};

// Default configuration
if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {});
}

if(TARGET === 'build') {
  module.exports = merge(common, {});
}
```

<details>
<summary>
What is this doing??
</summary>
<br>

```
Depending on the command we run (start, or build) we will be merging the 'common' object with whatever we include in the empty objects
```
<br>
<br>
</details>

Now all we are missing is adding in the HMR. Let's edit the first `if` statement to include this:

```js
if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devServer: {
      contentBase: PATHS.build,
      // Enable history API fallback so HTML5 History API based
      // routing works. This is a good default that will come
      // in handy in more complicated setups.
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      // Display only errors to reduce the amount of output.
      stats: 'errors-only',
      // Parse host and port from env so this is easy to customize.
      // If you use Vagrant or Cloud9, set
      // host: process.env.HOST || '0.0.0.0';
      // 0.0.0.0 is available to all network devices unlike default
      // localhost
      host: process.env.HOST,
      port: process.env.PORT
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}
```

And remove ` --content-base build` from your `package.json`

**COOL**. Everytime we make a change to the js file and save the browser is automatically updated!

## You Do: Add in CSS watch!

### Bonus: Figure out SASS configuration

## Travis

## Closing (5 min)

### Additional Resources

[Grunt Tutorial](http://www.brianchu.com/blog/2013/07/11/grunt-by-example-a-tutorial-for-javascripts-task-runner/)
[Travis](https://travis-ci.org/)
[Webpack as middleware](https://webpack.github.io/docs/webpack-dev-middleware.html)
