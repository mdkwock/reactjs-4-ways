var webpack = require('webpack');
var path = require('path');
Promise =  require('es6-promise').Promise;

module.exports = {
  entry:  './src/index.jsx',
  // Add resolve.extensions.
  // '' is needed to allow imports without an extension.
  // Note the .'s before extensions as it will fail to match without!!!
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path:  path.join(__dirname, "dist"),
    filename: 'react-bundle.js'
  },
  module: {
    loaders: [
      { 
        include: [
          path.join(__dirname, "src"),
          path.join(__dirname, "src/**"),
        ],

        test:   /\.jsx?/,
        loader: 'babel-loader',
        query:{
          presets: ["es2015", "react"],
          plugins: ['transform-object-assign']
        }
      },
      {
        test: /\.styl$/,
        loader: 'css-loader!stylus-loader?paths=node_modules/bootstrap-stylus/stylus/'
      }
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
