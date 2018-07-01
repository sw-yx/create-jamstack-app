'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = BoringShell;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Chrome = require('./Chrome');

var _Chrome2 = _interopRequireDefault(_Chrome);

var _src = require('../../src');

var _src2 = _interopRequireDefault(_src);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// TODO doublecheck, may need to shift

function BoringShell(props) {
  var title = props.title,
    _props$assets = props.assets,
    assets = _props$assets === undefined ? {} : _props$assets,
    children = props.children;

  return _react2.default.createElement(
    _Chrome2.default,
    { title: title, assets: assets },
    _react2.default.createElement(_src2.default, null, children)
  );
}

// Render your app
if (typeof document !== 'undefined') {
  var renderMethod = _reactDom2.default.hydrate || _reactDom2.default.render;
  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(Comp, null), document);
  };

  // Render!
  render(BoringShell);
}
