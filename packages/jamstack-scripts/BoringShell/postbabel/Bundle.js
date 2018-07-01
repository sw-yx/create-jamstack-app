'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Bundle = undefined;

var Bundle = (exports.Bundle = (function() {
  var _ref = _asyncToGenerator(
    /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
      var path, bundler, bundle;
      return regeneratorRuntime.wrap(
        function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                path = NodePath.join(__dirname, './BoringShell.js');
                bundler = new _parcelBundler2.default(path);
                _context.next = 4;
                return bundler.bundle().catch(console.error);

              case 4:
                bundle = _context.sent;

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        },
        _callee,
        this
      );
    })
  );

  return function Bundle() {
    return _ref.apply(this, arguments);
  };
})());

var _parcelBundler = require('parcel-bundler');

var _parcelBundler2 = _interopRequireDefault(_parcelBundler);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _asyncToGenerator(fn) {
  return function() {
    var gen = fn.apply(this, arguments);
    return new Promise(function(resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(
            function(value) {
              step('next', value);
            },
            function(err) {
              step('throw', err);
            }
          );
        }
      }
      return step('next');
    });
  };
}

var NodePath = require('path');
