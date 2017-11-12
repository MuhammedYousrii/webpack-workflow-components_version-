const { DefinePlugin } = require('webpack');
const defineEnvPlugin = new DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development'),
    'process.env.DEBUG': JSON.stringify(process.env.DEBUG) 
});


module.exports = {
    defineEnvPlugin
};
