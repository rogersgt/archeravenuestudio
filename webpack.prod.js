const fs = require('fs');
const ncp = require('ncp');
const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

const distDir = `${__dirname}/dist`;
const distExists = !!fs.existsSync(distDir);

if (!distExists) {
  fs.mkdirSync(distDir);
}

fs.copyFileSync(`${__dirname}/src/index.html`, `${__dirname}/dist/index.html`);
fs.copyFileSync(`${__dirname}/src/favicon.ico`, `${__dirname}/dist/favicon.ico`);
fs.copyFileSync(`${__dirname}/src/assets/logo.png`, `${__dirname}/dist/logo.png`);

process.env.NODE_ENV = 'production';

const env = new Dotenv({
  path: `${__dirname}/dev.env`
});

const occur = new webpack.optimize.OccurrenceOrderPlugin();

module.exports = {
  mode: 'production',
  entry: {
    app: `${__dirname}/src/app.js`
  },
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
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
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    env,
    occur
  ]
};
