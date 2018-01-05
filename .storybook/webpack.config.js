// load the default config generator.
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');
const path = require('path');

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);
  if (config.configType === 'PRODUCTION') {
    // Removing uglification until we figure out a fix for that.
    config.plugins.pop();
  }

  config.externals = Object.assign({}, {
    cheerio: 'window',
    'react/addons': 'react',
    'react/lib/ExecutionEnvironment': 'react',
    'react/lib/ReactContext': 'react',
    'react-addons-test-utils': 'react-dom',
  }, config.externals);

  config.resolve.alias = {
    'react': path.resolve(__dirname, '../node_modules/react'),
    'react-dom': path.resolve(__dirname, '../node_modules/react-dom'),
    'reactstrap': path.resolve(__dirname, '../node_modules/reactstrap')
  }

  return config;
};
