'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = Chrome;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function Chrome(_ref) {
  var _ref$assets = _ref.assets,
    assets = _ref$assets === undefined ? {} : _ref$assets,
    title = _ref.title,
    children = _ref.children;

  return _react2.default.createElement(
    'html',
    { lang: 'en' },
    _react2.default.createElement(
      'head',
      null,
      _react2.default.createElement('meta', { charSet: 'utf-8' }),
      _react2.default.createElement('meta', {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      }),
      _react2.default.createElement('link', {
        rel: 'shortcut icon',
        href: 'favicon.ico',
      }),
      assets['main.css'] &&
        _react2.default.createElement('link', {
          rel: 'stylesheet',
          href: assets['main.css'],
        }),
      _react2.default.createElement('title', null, title)
    ),
    _react2.default.createElement(
      'body',
      null,
      _react2.default.createElement('noscript', {
        dangerouslySetInnerHTML: {
          __html: '<b>Enable JavaScript to run this app.</b>',
        },
      }),
      children,
      _react2.default.createElement('script', { src: assets['main.js'] })
    )
  );
}
