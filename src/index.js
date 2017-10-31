import {
    appbootstrap
} from './app-component/app-bootstrap.js';
const router = new router(location.origin, false, '#!');


router.on(function () {
    console.log('hello world')
}, {
    before: function (done, params) {
        appbootstrap.init();
        done();
    }
}).resolve();


router.notFound(function(){
    console.log('sssss')
}).resolve();





router.resolve();
export{router};