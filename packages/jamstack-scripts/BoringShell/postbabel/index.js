'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(
  _objectWithoutProperties2
);

exports.default = function() {
  // go through getRoutes to know what to generate
  _constants.config
    .getRoutes()
    .then(function(routes) {
      routes.forEach(function(_ref) {
        var path = _ref.path,
          props = (0, _objectWithoutProperties3.default)(_ref, ['path']);

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

  return (0, _Bundle.Bundle)();
};

var _SSR = require('./SSR');

var _Bundle = require('./Bundle');

var _constants = require('./constants');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var fs = require('fs');

// if (!fs.existsSync(DIR)) fs.mkdirSync(DIR); // ensure dist folder is there?

// pointfree utility
var write = function write(filepath) {
  return function(data) {
    console.log('writing to ' + filepath);
    fs.writeFileSync(filepath, data);
  };
};

// bundle the files based on the preset rules
