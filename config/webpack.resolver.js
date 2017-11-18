const path = require('path');

const resolve = {
    alias: {
        libs: path.resolve(__dirname, '../src/commons/js/libs/'),
        utils: path.resolve(__dirname, '../src/commons/js/utils/'),
        commons: path.resolve(__dirname, '../src/x-commons/'),
        publics: path.resolve(__dirname, '../src/x-public/')
    },
    extensions: ['.js','.jsx', 'png', '.scss', '.pug'],
    modules: [
        path.resolve(__dirname, '../node_modules')
    ]
};

module.exports = {
    resolve,
};
