import {headcontroller} from './head-component/head-component.js';
import {headercontroller} from './head-component/header-component.js';
import {rootcontroller} from './head-component/root-component.js';
import {footercontroller} from './head-component/footer-component.js';


class app_bootstrap {
    constructor(){

    }


    init(){
        headcontroller.init();
        headercontroller.init();
        rootcontroller.init();
        footercontroller.init();
    }
}

export const appbootstrap = new app_bootstrap();