var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/index.jsx',
    //'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
  //'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
  //'./scripts/index' // Your appʼs entry point
  
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  plugins: [
  new webpack.HotModuleReplacementPlugin()
],
   module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader :  'babel'
        //loader :  ['react-hot', 'babel']
      }
    ]
  }
};

module.exports = config;