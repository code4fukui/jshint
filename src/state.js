import NameStack from "./name-stack.js";

var state = {
  syntax: {},

  /**
   * Determine if the code currently being linted is strict mode code.
   *
   * @returns {boolean}
   */
  isStrict: function() {
    return !!this.directive["use strict"] || this.inClassBody ||
      this.option.module || this.option.strict === "implied";
  },

  /**
   * Determine if the current state warrants a warning for statements outside
   * of strict mode code.
   *
   * While emitting warnings based on function scope would be more intuitive
   * (and less noisy), JSHint observes statement-based semantics in order to
   * preserve legacy behavior.
   *
   * This method does not take the state of the parser into account, making no
   * distinction between global code and function code. Because the "missing
   * 'use strict'" warning is *also* reported at function boundaries, this
   * function interprets `strict` option values `true` and `undefined` as
   * equivalent.
   */
  stmtMissingStrict: function() {
    if (this.option.strict === "global") {
      return true;
    }

    if (this.option.strict === false) {
      return false;
    }

    if (this.option.globalstrict) {
      return true;
    }

    return false;
  },

  allowsGlobalUsd: function() {
    return this.option.strict === "global" || this.option.globalstrict ||
      this.option.module || this.impliedClosure();
  },

  /**
   * Determine if the current configuration describes an environment that is
   * wrapped in an immediately-invoked function expression prior to evaluation.
   *
   * @returns {boolean}
   */
  impliedClosure: function() {
    return this.option.node || this.option.phantom || this.option.browserify;
  },

  // Assumption: chronologically ES3 < ES5 < ES6 < Moz

  inMoz: function() {
    return this.option.moz;
  },

  /**
   * Determine if constructs introduced in ECMAScript 11 should be accepted.
   *
   * @returns {boolean}
   */
  inES11: function() {
    return this.esVersion >= 11;
  },

  /**
   * Determine if constructs introduced in ECMAScript 10 should be accepted.
   *
   * @returns {boolean}
   */
  inES10: function() {
    return this.esVersion >= 10;
  },

  /**
   * Determine if constructs introduced in ECMAScript 9 should be accepted.
   *
   * @returns {boolean}
   */
  inES9: function() {
    return this.esVersion >= 9;
  },

  /**
   * Determine if constructs introduced in ECMAScript 8 should be accepted.
   *
   * @returns {boolean}
   */
  inES8: function() {
    return this.esVersion >= 8;
  },

  /**
   * Determine if constructs introduced in ECMAScript 7 should be accepted.
   *
   * @returns {boolean}
   */
  inES7: function() {
    return this.esVersion >= 7;
  },

  /**
   * Determine if constructs introduced in ECMAScript 6 should be accepted.
   *
   * @param {boolean} strict - When `true`, do not interpret the `moz` option
   *                           as ECMAScript 6
   *
   * @returns {boolean}
   */
  inES6: function(strict) {
    if (!strict && this.option.moz) {
      return true;
    }

    return this.esVersion >= 6;
  },

  /**
   * Determine if constructs introduced in ECMAScript 5 should be accepted.
   *
   * @returns {boolean}
   */
  inES5: function() {
    return !this.esVersion || this.esVersion >= 5 || this.option.moz;
  },

  /**
   * Determine the current version of the input language by inspecting the
   * value of all ECMAScript-version-related options. This logic is necessary
   * to ensure compatibility with deprecated options `es3`, `es5`, and
   * `esnext`, and it may be drastically simplified when those options are
   * removed.
   *
   * @returns {string|null} - the name of any incompatible option detected,
   *                          `null` otherwise
   */
  inferEsVersion: function() {
    var badOpt = null;

    if (this.option.esversion) {
      if (this.option.es3) {
        badOpt = "es3";
      } else if (this.option.es5) {
        badOpt = "es5";
      } else if (this.option.esnext) {
        badOpt = "esnext";
      }

      if (badOpt) {
        return badOpt;
      }

      if (this.option.esversion === 2015) {
        this.esVersion = 6;
      } else {
        this.esVersion = this.option.esversion;
      }
    } else if (this.option.es3) {
      this.esVersion = 3;
    } else if (this.option.esnext) {
      this.esVersion = 6;
    }

    return null;
  },

  reset: function() {
    this.tokens = {
      prev: null,
      next: null,
      curr: null
    };

    this.option = { unstable: {} };
    this.esVersion = 5;
    this.funct = null;
    this.ignored = {};
    /**
     * A lookup table for active directives whose keys are the value of the
     * directives and whose values are the tokens which enabled the directives.
     */
    this.directive = Object.create(null);
    this.jsonMode = false;
    this.lines = [];
    this.tab = "";
    this.cache = {}; // Node.JS doesn't have Map. Sniff.
    this.ignoredLines = {};
    this.forinifcheckneeded = false;
    this.nameStack = new NameStack();
    this.inClassBody = false;
  }
};

export default state;
