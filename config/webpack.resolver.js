const path = require('path');

const resolve = {
    alias: {
        classes: path.resolve(__dirname, '../src/x-vendors/js/classes/'),
        utils: path.resolve(__dirname, '../src/x-vendors/js/utils/'),
        shareds: path.resolve(__dirname, '../src/x-shared/'),
        commons: path.resolve(__dirname, '../src/x-commons/'),
        publics: path.resolve(__dirname, '../src/x-public/')
    },
    extensions: ['.js', '.scss', '.pug'],
    modules: [
        path.resolve(__dirname, '../node_modules')
    ]
};

module.exports = {
    resolve,
};
