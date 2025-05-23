// local dependency use the i flag

// global dependency - use it in any project, use the -g flag

// package.json - manifest file (stores important info abuot project/package)

// npm init -y

const _ = require('lodash');
const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log("hello world");