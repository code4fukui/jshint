# JSHint, A Static Code Analysis Tool for JavaScript

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

[ [Use it online](http://jshint.com/) •
[Docs](http://jshint.com/docs/) • [FAQ](http://jshint.com/docs/faq) •
[Install](http://jshint.com/install/) •
[Contribute](http://jshint.com/contribute/) •
[Blog](http://jshint.com/blog/) • [Twitter](https://twitter.com/jshint/) ]

[
![NPM version](https://img.shields.io/npm/v/jshint.svg?style=flat)
](https://www.npmjs.com/package/jshint)
[
![Linux Build Status](https://img.shields.io/travis/jshint/jshint/master.svg?style=flat&label=Linux%20build)
](https://travis-ci.org/jshint/jshint)
[
![Windows Build status](https://img.shields.io/appveyor/ci/jshint/jshint/master.svg?style=flat&label=Windows%20build)
](https://ci.appveyor.com/project/jshint/jshint/branch/master)
[
![Coverage Status](https://img.shields.io/coveralls/jshint/jshint.svg?style=flat)
](https://coveralls.io/r/jshint/jshint?branch=master)

JSHint is a community-driven tool that detects errors and potential problems in JavaScript code. It is highly flexible, allowing you to adjust it to your specific coding guidelines and the environment you expect your code to execute in.

## Our Goal

The project aims to help JavaScript developers write complex programs without worrying about typos and language gotchas.

## Installation

JSHint is distributed as a Node.js module. The recommended way to install it is globally using npm:

```bash
npm install -g jshint
```

## Usage

### Command-Line Interface (CLI)

Once installed, you can lint your JavaScript files from the command line:

```bash
jshint myfile.js
jshint my/directory/
```

For a full list of CLI options and configuration details, see the [JSHint documentation](http://jshint.com/docs/cli/).

### Programmatic API

You can also use JSHint programmatically in your Node.js applications.

```javascript
const { JSHINT } = require("jshint");

const source = [
  "function main() {",
  "  return 'Hello, World!'",
  "}",
  "",
  "main();"
];

// JSHint returns `true` if the code passes linting.
if (!JSHINT(source)) {
  console.log("Linting errors:");
  JSHINT.errors.forEach(function(err) {
    if (err) {
      console.log(`- ${err.reason} (line ${err.line}, col ${err.character})`);
    }
  });
}

// The `data()` method returns an object with linting details.
const data = JSHINT.data();
console.log("\nFunctions found:", data.functions);
```

## Reporting a bug

To report a bug, simply create a [new GitHub Issue](https://github.com/jshint/jshint/issues/new) and describe your problem or suggestion.

## Who uses JSHint?

Engineers from these companies and projects use JSHint:

* [Mozilla](https://www.mozilla.org/)
* [Wikipedia](https://wikipedia.org/)
* [Facebook](https://facebook.com/)
* [Twitter](https://twitter.com/)
* [Disqus](https://disqus.com/)
* [Medium](https://medium.com/)
* [Yahoo!](https://yahoo.com/)
* [jQuery UI](https://jqueryui.com/) ([Source](https://github.com/jquery/jquery-ui/blob/master/package.json))
* [jQuery Mobile](https://jquerymobile.com/) ([Source](https://github.com/jquery/jquery-mobile/blob/master/package.json#))
* And many more!

## The JSHint Team

JSHint is currently maintained by [Rick Waldron](https://github.com/rwaldron/), [Caitlin Potter](https://github.com/caitp/), [Mike Pennisi](https://github.com/jugglinmike/), and [Luke Page](https://github.com/lukeapage). You can reach them via admin@jshint.org.

## License

JSHint is licensed under the [MIT Expat license](https://www.gnu.org/licenses/license-list.html#Expat).

## Thank you!

We really appreciate all kinds of feedback and contributions. Thanks for using and supporting JSHint