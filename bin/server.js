var fs = require('fs'); //eslint-disable-line

var babelrc = fs.readFileSync('./.babelrc'); //eslint-disable-line
var config; //eslint-disable-line

try {
  config = JSON.parse(babelrc);
} catch (err) {
  console.error('==>     ERROR: Error parsing your .babelrc.');
  console.error(err);
}

require('babel-core/register')(config);
require('../server');
