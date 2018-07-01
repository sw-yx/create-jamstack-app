// these are strings which may be needed for the lib to interact with the outside world.
// will want to tweak at first and then never touch again

import bconfig from '../../../../boring.config'; // todo - make async?
export const config = bconfig;

import bApp from '../../../../src'; // TODO doublecheck, may need to shift
export const App = bApp;

export const DIR = 'dist';
