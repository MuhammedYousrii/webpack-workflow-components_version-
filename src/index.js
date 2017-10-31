// Global Stylesheets 
import './screen.scss';
import './print.scss';
import {
    appbootstrap
} from './app-component/app-bootstrap.js';


// Enable Hot Module Replacement To Enhance Development process
// Must Be Removed Into Production Mode 
if (module.hot) {
    module.hot.accept(/.js?$/, () => {
        console.log('all the dependencies have been accepted');
    });
}



//Init Router 
const router = new router(location.origin, false, '#!');


router.on(function () {
    console.log('hello From Root')
}, {
    before: function (done, params) {
        appbootstrap.init();
        done();
    }
}).resolve();


router.notFound(function(){
    console.log('Erorr Component Should Do itis funcs here')
}).resolve();





router.resolve();
export{router};