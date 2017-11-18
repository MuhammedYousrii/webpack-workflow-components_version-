// vendors from node_modules 
import './js/in-source.js';

// vendors from out-side
import './js/out-source.js';


// if you want import vendors from another package manager 
// create file into js import from another package ,, then register it here
// create resolve path for this package manager in config at resolve.webpack.config

// ex : import './js/bower_modules.js';

// at resolve file 
// modules : [ path.resolve(__dirname, bower_modules)]