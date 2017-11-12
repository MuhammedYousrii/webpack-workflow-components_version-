const path = require('path');

const devServer = {
    // Serve Content From Dist Folder
    contentBase: path.join(__dirname, '../dist/'),
    // Compress With Gzip
    compress: true,
    port: 8080,
    //Open when Ready
    // open :true ,
    //Enable HMR Feature 
    hot: true,
    //Watch Files And update Yourself
    watchContentBase: true,
    //Watching Constraines
    historyApiFallback: true,
    watchOptions: {
        aggregateTimeout: 500,
        ignored: './node_modules/',
        poll: 1000,
    },
    stats: {
        colors: true,
        providedExports: true,
        depth: true
    }
};


module.exports = {
    devServer
};
