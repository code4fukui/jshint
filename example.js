//import jshint from "./src/jshint.js";
import jshint from "./jshint.js";

const src = `
function main() {
  return 'Hello, World!'


main();
`;

const config = {};
const globals = {};

if (!jshint(src, config, globals)) {
  jshint.errors.forEach(function(err) {
    if (err) {
      console.log(err);
    }
  });
}
const lintData = jshint.data();
console.log(lintData);
