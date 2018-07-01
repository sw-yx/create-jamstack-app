'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.SSR = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

// should return html string to be written into the path
var SSR = (exports.SSR = (function() {
  var _ref = (0, _asyncToGenerator3.default)(
    /*#__PURE__*/ _regenerator2.default.mark(function _callee(path) {
      var assets, html;
      return _regenerator2.default.wrap(
        function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                assets = void 0;

                if (process.env.NODE_ENV === 'development') {
                  assets = {
                    'main.js': 'BoringShell.js',
                    'main.css': '',
                  };
                } else {
                  // TODO: needs to change to real address
                  assets = require('../build/asset-manifest.json');
                }
                html = (0, _server.renderToString)(
                  _react2.default.createElement(
                    _router.ServerLocation,
                    { url: path },
                    _react2.default.createElement(_BoringShell2.default, {
                      assets: assets,
                    })
                  )
                );
                // There's no way to render a doctype in React so prepend manually.
                // Also append a bootstrap script tag.

                return _context.abrupt('return', '<!DOCTYPE html>' + html);

              case 4:
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

  return function SSR(_x) {
    return _ref.apply(this, arguments);
  };
})());

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _router = require('@reach/router');

var _BoringShell = require('./BoringShell');

var _BoringShell2 = _interopRequireDefault(_BoringShell);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var fs = require('fs');
