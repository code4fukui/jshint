import has from "https://code4fukui.github.io/lodash/has.js";
import each from "https://code4fukui.github.io/lodash/each.js";
import clone from "https://code4fukui.github.io/lodash/clone.js";
import isEmpty from "https://code4fukui.github.io/lodash/isEmpty.js";
import values from "https://code4fukui.github.io/lodash/values.js";
import includes from "https://code4fukui.github.io/lodash/includes.js";
import reject from "https://code4fukui.github.io/lodash/reject.js";
import isNumber from "https://code4fukui.github.io/lodash/isNumber.js";
import zip from "https://code4fukui.github.io/lodash/zip.js";
import some from "https://code4fukui.github.io/lodash/slice.js";
import findLastIndex from "https://code4fukui.github.io/lodash/findLastIndex.js";

export default {
  has,
  each,
  extend: (a, b) => Object.assign(a, b),
  clone,
  isEmpty,
  values,
  includes,
  reject,
  isNumber,
  zip,
  some,
  findLastIndex,
};
