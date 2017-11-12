import {headcontroller} from './head-component/head-component.js';
import {headercontroller} from './head-component/header-component.js';
import {rootcontroller} from './head-component/root-component.js';
import {footercontroller} from './head-component/footer-component.js';


class app_bootstrap {
    constructor(){
        this.headercontroller = headcontroller ;
        this.footercontroller = footercontroller ;
        this.headcontroller = headcontroller ;
        this.rootcontroller = rootcontroller ;
    }


    bootstrapStatic(){        
        this.headercontroller.init();
        this.footercontroller.init();
        return this ;
    }
    bootstrapDynamic(){
        this.headcontroller.init();
        this.rootcontroller.init();
        return this ;
    }
    bootstrapFull(){
        this.bootstrapStatic().bootstrapDynamic();
    }
}

export const appbootstrap = new app_bootstrap();