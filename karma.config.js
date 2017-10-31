const path = require('path');
// Karma configuration
module.exports = function(config) {
    config.set({
      basePath : "test/" ,
      frameworks : ['mocha'],
      autoWatch : true ,
      colors : true ,
      port: 3000 ,
      browsers: ['Chrome'] ,
      hostName : 'localhost',
      client: {
        mocha: {
          reporter: 'html',
          expose: ['body']
  
          // require: [require.resolve('bdd-lazy-var/bdd_lazy_var_global')],
  
          // ui: 'bdd-lazy-var/global',
        }
      },
      files: [
        {pattern: '**/*_mocha.js', watched: true}
      ],

      exclude: [
        'src/'
      ],
  
      preprocessors: {
        // add webpack as preprocessor
        '**/*_mocha.js': ['webpack']
      },
  
      webpack: {
          module: {
            rules: [
        
        
              //Js Loader 
              {
                test: /.js?$/,
                use: [{
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      ['es2015', {
                        modules: false
                      }]
                    ]
                  }
                }]
        
              },
        
            ]
          },        
      },
  
      webpackMiddleware: {
        // webpack-dev-middleware configuration
        // i. e.
        stats: 'errors-only'
      }
    });
  };