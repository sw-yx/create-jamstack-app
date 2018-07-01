'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

exports.default = function() {
  // go through getRoutes to know what to generate
  _constants.config
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

  return (0, _Bundle.Bundle)();
};

var _SSR = require('./SSR');

var _Bundle = require('./Bundle');

var _constants = require('./constants');

function _objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
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
