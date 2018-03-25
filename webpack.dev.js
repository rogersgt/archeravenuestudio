const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

const env = new Dotenv({
  path: './dev.env'
});

const occur = new webpack.optimize.OccurrenceOrderPlugin();

module.exports = {
  mode: 'development',
  entry: {
    app: `${__dirname}/src/app.js`
  },
  output: {
    path: `${__dirname}/dist`,
    publicPath: 'dist/',
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: 'env'
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              scss: 'vue-style-loader!css-loader!sass-loader',
              sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          { loader: 'file-loader' }
        ]
      }
    ]
  },
  plugins: [
    env,
    occur
  ],
  resolve: {
    alias: {
      'vue$': `${__dirname}/node_modules/vue/dist/vue.common.js`
    }
  }
};
