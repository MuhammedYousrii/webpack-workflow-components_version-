const path = require('path');
const Dircleaner = require('clean-webpack-plugin');
const {
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
  TemplateController,
} = require('./config/webpack.template.js');
const {
  devServer
} = require('./config/webpack.devserver.js');
const {
  resolve
} = require('./config/webpack.resolver.js');
const {
  node
} = require('./config/webpack.node.js');
const {
  assets_loader_config,
  sass_loader_config,
  cssController
} = require('./config/webpack.loader.js');

module.exports = function (env) {
  const isProd = env.NODE_ENV === 'production';
  const targetPlateform = env.plateform;
  const commonsDir = path.resolve(__dirname, 'src/commons/');
  const vendorsDir = path.resolve(__dirname, 'src/vendors/')


  return {
    // Sources Context
    context: path.resolve(__dirname, 'src'),
    recordsPath: path.resolve(__dirname, 'dist/', 'records.json'),
    cache: true,
    profile: true,
    target: targetPlateform,


    entry: {
      vendors: [
        // js vendors 
        path.resolve(vendorsDir, '_vendors.js'),
        // css vendors
        path.resolve(vendorsDir, '_vendors.scss')
      ],
      commons: [
        // common js Modules 
        path.resolve(commonsDir, '_commons.js'),
        // common css modules 
        path.resolve(__dirname, 'src/x-commons/_commons.css.scss')
      ],

      // polyfills needed
      polyfills: path.resolve(__dirname, 'src/pollyfills.js'),
      
      
      // --- SPA ENTRY
      index: path.resolve(__dirname, 'src/index.js'),
    },

    output: {
      path: path.resolve(__dirname, 'dist'),
      chunkFilename: '[name].js',
      library: '[name]_lib',
      filename: isProd ? '[name].min.js' : '[name].js',
      publicPath: '/' 
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


        {
          test: /\.json$/,
          loader: 'json-loader'
        },
        
        //css loader 
        {
          test: /\.css$/,
          exclude: path.resolve(__dirname, 'node_modules'),
          use: cssController(isProd)
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


    resolve,
    node,
    devServer,


    plugins: [
      defineEnvPlugin,
      cssExtracting(isProd),
      UglifyJs,
      sourceMap,
      provideLibsExtending,
      libsExtracting,
      hmrConfig(isProd),
      namedModules,
      manifestPlugin,
      bundleAnalyzer,
      loadersDebugger(isProd),
      TemplateController(isProd),
      new Dircleaner(['dist'])
    ]

  };
};
