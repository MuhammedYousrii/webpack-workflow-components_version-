const {
    ProvidePlugin,
    optimize,
    HotModuleReplacementPlugin,
    SourceMapDevToolPlugin,
    NamedModulesPlugin,
    LoaderOptionsPlugin
} = require('webpack');

const {
    CommonsChunkPlugin,
    UglifyJsPlugin
} = optimize;
const {
    BundleAnalyzerPlugin
} = require('webpack-bundle-analyzer');

const ManifestPlugin = require('webpack-manifest-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const hmrConfig = isProd => {
    const config = !isProd ? new HotModuleReplacementPlugin(): undefined;
    return config;
};

const cssExtracting = isProd => {
    const config = new ExtractTextPlugin({
        allChunks: true,
        filename: 'css/[name].min.css',
        // if development mode
        disable: !isProd
    });
    return config;
};
const libsExtracting = new CommonsChunkPlugin({
    names: ['commons', 'vendors'],
    minChunks: 2
});
const provideLibsExtending = new ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery',
    'Tether': 'tether',
    WOW: 'wow.js',
    Navigo: 'navigo',
    _: 'lodash',
    FastClick: 'fastclick',
    Raphael: 'raphael',
});
const bundleAnalyzer = new BundleAnalyzerPlugin({
    analyzerMode: 'server',
    analyzerHost: '127.0.0.1',
    analyzerPort: 9000,
    openAnalyzer: false
});
const sourceMap = new SourceMapDevToolPlugin({
    test: /\.min\.js$/,
    filename: '[name].js.map',
    exclude: ['vendors.min.js', 'commons.min.js']
});
const UglifyJs = new UglifyJsPlugin({
    include: /\.min\.js$/,
    minimize: true,
    compress: false,
    comments: false
});
const manifestPlugin = new ManifestPlugin({
    publicPath: '/',
    filename: 'mainfest.json',
});
const namedModules = new NamedModulesPlugin();
const loadersDebugger = isProd => {
    return new LoaderOptionsPlugin({
        debug: isProd ? false : true,
    });
};

module.exports = {
    hmrConfig,
    cssExtracting,
    provideLibsExtending,
    libsExtracting,
    bundleAnalyzer,
    UglifyJs,
    sourceMap,
    manifestPlugin,
    namedModules,
    loadersDebugger
};
