import { router } from "./router";


router.on(function () {
    console.log('hello From Root')
}, {
    before: function (done, params) {
        appbootstrap.init();
        done();
    }
}).resolve();