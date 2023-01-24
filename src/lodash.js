import has from "https://code4fukui.github.io/lodash/has.js";
import each from "https://code4fukui.github.io/lodash/each.js";
import clone from "https://code4fukui.github.io/lodash/clone.js";
import isEmpty from "https://code4fukui.github.io/lodash/isEmpty.js";
import values from "https://code4fukui.github.io/lodash/values.js";

export default {
  has,
  each,
  extend: (a, b) => Object.assign(a, b),
  clone,
  isEmpty,
  values,
};
