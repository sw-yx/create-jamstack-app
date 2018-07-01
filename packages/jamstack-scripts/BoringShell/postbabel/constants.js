'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.DIR = exports.App = exports.config = undefined;

var _boring = require('../../../../boring.config');

var _boring2 = _interopRequireDefault(_boring);

var _src = require('../../../../src');

var _src2 = _interopRequireDefault(_src);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// todo - make async?
var config = (exports.config = _boring2.default); // these are strings which may be needed for the lib to interact with the outside world.
// will want to tweak at first and then never touch again

// TODO doublecheck, may need to shift
var App = (exports.App = _src2.default);

var DIR = (exports.DIR = 'dist');
