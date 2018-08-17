// load math.js
require("babel-polyfill");
// import * as math from 'mathjs'

var moment = require('moment');

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
// use math.js
// console.log(math.sqrt(-4)); // 2i

// console.log(math.round(math.e, 15));

let fibonacci = {
  [Symbol.iterator]() {
    let pre = 0, cur = 1;
    return {
      next() {
        [pre, cur] = [cur, pre + cur];
        return { done: false, value: cur }
      }
    }
  }
}

for (var n of fibonacci) {
  // truncate the sequence at 1000
  if (n > 1000)
    break;
  console.log(n);
}