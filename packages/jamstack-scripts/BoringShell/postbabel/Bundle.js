'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Bundle = Bundle;

var _parcelBundler = require('parcel-bundler');

var _parcelBundler2 = _interopRequireDefault(_parcelBundler);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var NodePath = require('path');

// starts bundling
// returns parcel-bundler object
function Bundle() {
  // (maybe; might not need to) adds the app's index.js to BoringShell
  var path = NodePath.join(__dirname, './BoringShell.js');
  var bundler = new _parcelBundler2.default(path);
  return bundler.bundle().catch(console.error);
}
