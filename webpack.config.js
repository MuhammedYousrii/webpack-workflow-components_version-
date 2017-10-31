const path = require('path');
const Dircleaner = require('clean-webpack-plugin');
var webpack = require('webpack');
const {
  isProd,
  defineEnvPlugin
} = require('./config/webpack.env.js');
const {
  cssExtracting,
  provideLibsExtending,
  libsExtracting,
  bundleAnalyzer,
  UglifyJs,
  manifestPlugin,
  hmrConfig,
  sourceMap,
  namedModules,
  loadersDebugger
} = require('./config/webpack.plugins.js');
const {
  index,
} = require('./config/webpack.template.js');
const {
  devServer
} = require('./config/webpack.devserver.js');
const {
  resolver
} = require('./config/webpack.resolver.js');
const {
  assets_loader_config,
  sass_loader_config
} = require('./config/webpack.loader.js');






const commonsDir = path.resolve(__dirname , 'src/x-commons/');


module.exports = {
  // Sources Context
  context: path.resolve(__dirname, 'src'),
  recordsPath: path.resolve(__dirname, 'dist/', 'records.json'),
  //if prod mode
  cache: isProd,
  profile: true,
  target: 'web',




  entry: {
    vendors: ['jquery', 'jquery.nicescroll', 'bootstrap', 'wow.js','typed.js' , 'navigo'  ,path.resolve(__dirname, 'src/x-vendors/_vendors.scss')],
    commons: path.resolve(commonsDir, '_commons.js'),
    polyfills: path.resolve(__dirname, 'src/polyfill.js'),
    index: path.resolve(__dirname, 'src/index.js'),
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].js',
    library: '[name]_lib',
    filename: isProd ? '[name].min.js' : '[name].js',
  },




  module: {
    rules: [


      //Js Loader 
      {
        test: /.js?$/,
        exclude: [
          path.resolve(__dirname, 'node_modules'),
        ],
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['es2017']
            ]
          }
        }]

      },

      //pug loader
      {
        test: /\.pug$/,
        exclude: path.resolve(__dirname, 'node_modules/'),
        use: [{
          loader: 'pug-loader'
        }]
      },



      //Sass Loader
      {
        test: /\.scss$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: sass_loader_config(isProd)
      },



      //media Loader
      {
        test: /\.(jpe?g|png|gif|svg|mp4)$/i,
        exclude: path.resolve(__dirname, 'node_modules/'),
        use: assets_loader_config(isProd)
      },


      //fonts Loader
      {
        test: /\.(eot|svg|otf|ttf|woff|woff2)$/,
        use: [{
          loader: 'file-loader',
          query: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }]
      }

    ]
  },


  resolver,
  devServer,


  plugins: [
    cssExtracting,
    UglifyJs,
    sourceMap,
    provideLibsExtending,
    libsExtracting,
    defineEnvPlugin,
    hmrConfig,
    namedModules,
    manifestPlugin,
    bundleAnalyzer ,
    loadersDebugger,
    index,
    new Dircleaner(['dist'])
  ]


};