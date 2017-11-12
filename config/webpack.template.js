const htmlGenrator = require('html-webpack-plugin');
const path = require('path');

const TemplateController = isProd => {
  return new htmlGenrator({
    filename: 'index.html',
    title: 'Ready',
    minify: {
      collapseWhitespace: isProd,
      collapseBooleanAttributes: isProd
    },
    cache: true,
    publicPath: './',
    hash: !isProd,
    favicon: path.resolve(__dirname, '../favicon.ico'),
    template: path.resolve(__dirname, '../src/index.pug'),
  });
};


module.exports = {
  TemplateController,
};
