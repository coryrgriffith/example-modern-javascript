// load math.js
import * as math from 'mathjs'

var moment = require('moment');

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
// use math.js
console.log(math.sqrt(-4)); // 2i

console.log(math.round(math.e, 15));