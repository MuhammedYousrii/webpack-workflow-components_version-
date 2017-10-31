const htmlGenrator = require('html-webpack-plugin')
const path = require('path');
const {
  isProd
} = require('./webpack.env.js');

const index = new htmlGenrator({
  filename: 'index.html',
  title: 'Crafted Internet',
  minify: {
    collapseWhitespace: isProd,
    collapseBooleanAttributes: isProd
  },
  publicPath: './',
  hash: !isProd,
  favicon: path.resolve(__dirname, '../favicon.ico'),
  template: path.resolve(__dirname, '../src/index.pug'),
});




module.exports = {
  index,
}