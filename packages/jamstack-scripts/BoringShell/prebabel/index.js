const fs = require('fs');
import { SSR } from './SSR';
import { Bundle } from './Bundle';

import { DIR, config } from './constants';
// if (!fs.existsSync(DIR)) fs.mkdirSync(DIR); // ensure dist folder is there?

// pointfree utility
const write = filepath => data => {
  console.log(`writing to ${filepath}`);
  fs.writeFileSync(filepath, data);
};

// bundle the files based on the preset rules
export default function() {
  // go through getRoutes to know what to generate
  config
    .getRoutes()
    .then(routes => {
      routes.forEach(({ path, ...props }) => {
        SSR(path)
          .then(write(`${DIR}${path === '/' ? '/index' : path}.html`))
          .catch(console.error);
      });
      // insist on 404
      SSR('/404')
        .then(write(`${DIR}/404.html`))
        .catch(console.error);
    })
    .catch(err => {
      console.error('getRoutes failed');
      console.error(err);
    });

  return Bundle();
}
