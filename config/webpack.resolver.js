const path = require('path');
const resolver = {
    alias: {
        "classes" : path.resolve(__dirname , '../src/x-vendors/js/classes/'),
        "utils" : path.resolve(__dirname , '../src/x-vendors/js/utils/'),
        "commons" : path.resolve(__dirname , '../src/x-commons/'),
        "publics" : path.resolve(__dirname , '../src/x-public/')
    },
    extensions: ['.js', 'jsx', '.scss', '.pug', '.png', '.jpg', '.jpeg'],
    modules: [
        path.resolve(__dirname, '../node_modules')
    ]
};

module.exports = {
    resolver,
}