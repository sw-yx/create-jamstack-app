import Bundler from 'parcel-bundler';
const NodePath = require('path');

// starts bundling
// returns parcel-bundler object
export function Bundle() {
  // (maybe; might not need to) adds the app's index.js to BoringShell
  const path = NodePath.join(__dirname, './BoringShell.js');
  const bundler = new Bundler(path);
  return bundler.bundle().catch(console.error);
}
