// Global Stylesheets 
import './screen.scss';
import './print.scss';


import './routes/root.route.js';




import './routes/notfound.route.js';

// Enable Hot Module Replacement To Enhance Development process
// Must Be Removed Into Production Mode 
if (module.hot) {
    module.hot.accept(/.js?$/, () => {
        console.log('all the dependencies have been accepted');
    });
}
