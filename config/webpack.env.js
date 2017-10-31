const {DefinePlugin} = require('webpack');

const defineEnvPlugin = new DefinePlugin({
    "process.env.NODE_ENV" : JSON.stringify('development') ,
    "process.env.DEBUG" : process.env.DEBUG 
})


//Check What Environment I work on
const isProd = process.env.NODE_ENV === "production" ; //True Or False

module.exports = {
    isProd ,
    defineEnvPlugin
}