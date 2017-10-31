const ExtractTextPlugin = require("extract-text-webpack-plugin");


/**  
 * @author Muhammed Yousrii
 * @type {function} assets_loader_config
 * @version 0.0.1
 * @param {Boolean} prod
 * @return {Object} config
 */
const assets_loader_config = function (env) {
    var config;
    if (env) {
      config = [{
          loader: 'file-loader',
          query: {
            name: '[name].[ext]',
            outputPath: 'media/',
          }
        },
  
        {
          loader: 'image-webpack-loader',
          query: {
            mozjpeg: {
              quality: '30'
            },
            pngquant: {
              quality: '25-50',
              speed: 4
            },
            gifsicle: {
              optimizationLevel: 4,
            },
            svgo: {
              cleanupAttrs: true,
              removeDoctype: true,
              removeEmptyAttrs: true,
              removeComments: true,
              minfiyStyles: true,
            }
          }
        }
      ];
  
      return config;
    }
  
    config = [{
      loader: 'file-loader',
      query: {
        name: '[name].[ext]',
        outputPath: 'media/',
      }
    }];
    return config;
  }






  

/**
 * return config depend on environment
 * @author Muhammed Yousrii
 * @version 0.0.1
 * @param {Boolean} env
 * @return {Object} config
 */
const sass_loader_config = function (env) {
    var config;
    //If Production mode
    if (env) {
      //Extract all Css Into single file
      config = ExtractTextPlugin.extract({
        fallback: 'style-loader',
        publicPath: '../',
        use: [{
            loader: 'css-loader',
            options: {
              minimize: true,
              sourceMap: true,
            }
          },
          {
            loader: 'resolve-url-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      });
  
      return config;
    }
    // if Development Mode
    config = ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader'];
    return config;
  }



  module.exports = {
      assets_loader_config,
      sass_loader_config
  }