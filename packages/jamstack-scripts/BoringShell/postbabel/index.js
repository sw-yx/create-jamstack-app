'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _boring = require('../boring.config');

var _boring2 = _interopRequireDefault(_boring);

var _SSR = require('./SSR');

var _Bundle = require('./Bundle');

var _constants = require('./constants');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}

var fs = require('fs'); // todo - make async?

// ensure dist folder is there

if (!fs.existsSync(_constants.DIR)) fs.mkdirSync(_constants.DIR);
var write = function write(filepath) {
  return function(
    data // pointfree
  ) {
    return (
      console.log('writing to ' + filepath) || fs.writeFileSync(filepath, data)
    );
  };
};

// go through getRoutes to know what to generate
_boring2.default
  .getRoutes()
  .then(function(routes) {
    routes.forEach(function(_ref) {
      var path = _ref.path,
        props = _objectWithoutProperties(_ref, ['path']);

      (0, _SSR.SSR)(path)
        .then(
          write(
            '' + _constants.DIR + (path === '/' ? '/index' : path) + '.html'
          )
        )
        .catch(console.error);
    });
    // insist on 404
    (0, _SSR.SSR)('/404')
      .then(write(_constants.DIR + '/404.html'))
      .catch(console.error);
  })
  .catch(function(err) {
    console.error('getRoutes failed');
    console.error(err);
  });

// bundle the files based on the preset rules
exports.default = (0, _Bundle.Bundle)();
