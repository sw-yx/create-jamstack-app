module.exports = {
  presets: ['env', 'stage-0', 'react'],
  plugins: [
    [
      'universal-import',
      {
        disableWarnings: true,
      },
    ],
    [
      'transform-runtime',
      {
        helpers: false,
        polyfill: false,
        regenerator: true,
        moduleName: 'babel-runtime',
      },
    ],
    'transform-class-properties',
  ],
  env: {
    development: {
      plugins: [],
    },
    test: {
      presets: ['env', 'stage-0', 'react'],
    },
  },
  compact: false,
};
