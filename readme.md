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

## Gulp (5 min)

![Gulp](gulp.jpg)

Gulp is an popular open-source automation tool built on Node.js that runs tasks to manipulate files on your system.

It is commonly used for bundling, minificiation, ES6 support, etc..

It's really similar to `rake` in Ruby!

[Gulp Documentation](http://gulpjs.com/)

## You-Do: Gulp Linter Example (15 min)

Fork and Clone this Repo: https://github.com/ga-wdi-exercises/gulp-bamsay

[Solution Code](https://github.com/ga-wdi-exercises/gulp-bamsay/tree/jshint-solution)

#### Installation

```bash
$ npm install gulp -g
```

>install globally

```bash
$ npm install gulp --save-dev
```
>install as dependency in project


```bash
$ touch `gulpfile.js`
```
>This needs to be installed in your root directory and will contain all of your related task configuration

```bash
$ gulp

```
```bash

[10:36:31] Using gulpfile ~/wdi8/lessons/build-tools/gulp-example/gulpfile.js
[10:36:32] Task 'default' is not in your gulpfile
[10:36:32] Please check the documentation for proper gulpfile formatting


```
>Uh oh! - we ran into a problem! We need to define a `gulp task`

#### Gulp Tasks

<details>
<summary>
What is a task?</summary>
<br>

```

In Gulp, we create tasks that can transform our code.
A task may perform one job; it may also perform many at once.

```
<br>
<br>
</details>

----------

In our `gulpfile.js` we need to include the gulp module. To do this, we should define a variable: `var gulp = require('gulp');` This will allow us to call upon Gulp to create a task.

#### My First (Default) Task

By default, Gulp requires a default task. It is the first task that Gulp will look for when reading your `gulpfile.js`.

Let's define our first (default) task below in our `gulpfile.js`:

```js
var gulp = require('gulp');

//define a task with the name of 'default'
// and a callback to perform when the task is ran
gulp.task('default', function() {
  console.log('I am the default task!');
});

```
In your terminal, run `$ gulp`.

>This will have the library look for a default task in your `gulpfile.js`. It will then execute the callback that you define for your task.

You should see something like the following:

```bash
[10:37:37] Using gulpfile ~/wdi8/lessons/build-tools/gulp-example/gulpfile.js
[10:37:37] Starting 'default'...
I am the default task!
[10:37:37] Finished 'default' after 104 μs
```

<details>
<summary>
Does the string `'default'` matter what we call it?
</summary>
<br>

```
Yes, and no. While you can certainly change `default` to `pizza`, it could not be semantic or convention.

Also, whatever you name gulp.task('name', callbackFunction)

To run gulp in our command line we need to do:

`$ gulp <name>`

```
<br>
<br>
</details>


## STOP

## Review (5 min)

Let's Review and Answer questions!

## Plugins (5 min)

[Gulp plugins](http://gulpjs.com/plugins/)

Gulp has many additional plugins that we can use in our applications. We need to install them each individually using `npm install <dependency-name> --save-dev`

>Note we are having to --save-dev instead of --save. This is add separate  `"devDependencies"` object in which we will be saving our dependences. Don't worry too much about the difference for now, just know these would be used differently in production!

## You-Do: Jshint Plugin Example (15 min)

We are going to be working with Jshint plugin and Jshint stylish so we can easily identify any javascript errors in our code!

```bash
$ npm install jshint gulp-jshint --save-dev
$ npm install --save-dev jshint-stylish
```

In our `gulpfile.js`, let's add the following modules for jshint:

```js
var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
```

>Nothing new here, just requiring our dependencies

Now, let's add our task!

```js
gulp.task('jshint', function() {
  return gulp.src('./js/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter(stylish));
});
```
<details>
<summary>
What is `gulp.src`?
</summary>
<br>

```
`gulp.src` is specifying our file source paths. It can also take an array of source paths.


```
<br>
<br>
</details>


<details>
<summary>
What do you think `'./js/*.js'` represents ?
</summary>
<br>

```
Linting all of of javascript files in our `js` directory

```
<br>
<br>
</details>


<details>
<summary>
What is `.pipe()` in gulp?
</summary>
<br>

```
.pipe() is used to pipe the source file(s) into a plugin. These Pipes chain tasks together so you can add as many plugins as you need!

```
<br>
<br>
</details>


``` bash
$ gulp jshint

```
## Bonus

## STOP

### We-do: Gulp SASS (25 min)

## Gulp-Sass

Let's use Gulp to compile our `SASS`! We are going to be using the following `gulp-sass` plugin.

[Gulp-Sass Documentation npm](https://www.npmjs.com/package/gulp-sass).

Feel free to continue along on the same `gulpfile.js`. However, if you can check out the `gulp-sass-starter` as well.


```bash
$ npm install gulp-sass --save-dev

```
```js
var gulp = require('gulp');
var sass = require("gulp-sass");
```
>requiring the dependency for gulp-sass

And then let's add the following in our code:

```js
gulp.task('sass', function () {
 return gulp.src('./css/**/*.scss')
   .pipe(sass().on('error', sass.logError))
   .pipe(gulp.dest('./css/'))
});
```

<details>
<summary>
What do we see here in this task thats different?
</summary>
<br>

```
1. sass.logError which will display an error
2. gulp.dest()

`gulp.dest` will copies our results to a given directory. In this case to our `css` directory.

```
<br>
<br>
</details>

```bash
$ gulp sass

```

Great, it worked? But how is that helpful when compiling sass?

### Gulp Watcher & Connect
We are now going to install two additional gulp plugins/dependencies:

We are going to add these dependencies so any of our sass code changes is reflected in the browser without manual reload or page refresh. We will be integrating all the tasks to help automate our workflow.


```bash
$  npm install --save-dev gulp-watch

$ npm install --save-dev gulp-watch.

```

[Gulp Watch](https://www.npmjs.com/package/gulp-watch)

[Gulp Connect](https://www.npmjs.com/package/gulp-connect)

```js

var gulp = require('gulp');
var sass = require("gulp-sass");
var watch = require('gulp-watch');
var connect = require('gulp-connect');
```


```js
// Watch Files For Changes
gulp.task('watch', function () {
 gulp.watch('./css/**/*.scss', ['sass']);
});

```

```js
gulp.task('connect', function() {
  connect.server({
    livereload: true
  })
});

```


<details>
<summary>
What do you think `connect.server({livereload: true})` is doing?
</summary>
<br>

```

```
<br>
<br>
</details>

Let's now add `.pipe(connect.reload())` to our `sass` task:

```
gulp.task('sass', function () {
 return gulp.src('./css/**/*.scss')
   .pipe(sass().on('error', sass.logError))
   .pipe(gulp.dest('./css/'))
   .pipe(connect.reload());
});

```
Finally, let's add the following at the bottom of our `gulpfile.js`:

```
gulp.task('default', ['sass', 'connect', 'watch']);

```

```bash
$ gulp

```

<details>
<summary>
Why do we not need to specify our task in the above command?
</summary>
<br>

```
Because we used `default`, gulp will automatically execute the `default` command
```
<br>
<br>
</details>


```
[13:25:59] Using gulpfile ~/wdi8/sandbox/bamsay/gulpfile.js
[13:25:59] Starting 'sass'...
[13:25:59] Starting 'connect'...
[13:25:59] Finished 'connect' after 18 ms
[13:25:59] Starting 'watch'...
[13:25:59] Finished 'watch' after 15 ms
[13:25:59] Server started http://localhost:8080
[13:25:59] LiveReload started on port 35729
[13:25:59] Finished 'sass' after 72 ms
[13:25:59] Starting 'default'...
[13:25:59] Finished 'default' after 3.63 μs

```

## Webpack

[Webpack Documentation](https://webpack.github.io/)

Webpack is a code bundler.

It is used to bundle JavaScript files to run in our browsers, and can be used for transforming, bundling, or packaging assets and resources.

In essence, it takes your code, transforms and bundles it, then returns a brand new version of your code.

We will be using Webpack with React!

## I-DO: Initial Webpack Installation

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
