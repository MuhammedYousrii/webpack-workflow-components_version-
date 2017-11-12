// Import Emmiter 
import {
    eventEmmiter
} from './event-emmiter.js';


class componentHooks {
    constructor(el, scope, guide_node) {
        this.watchedEl = $(el); // let's say root
        this.chidren_nodes = this.watchedEl.children();
        if (guide_node) {
            this.guide_node = guide_node;
        }
        this.virtualDom = null;
        this.hooksEmmiter = new eventEmmiter();
        this.on_after_view_init;
        this.on_before_view_init;
        this.on_view_init;
        this.scope = scope;
    }



    createVirtualDom() {

    }

    thereAreContent() {
        return this.watchedEl.find('*').length > 0;
    }


    registerBeforeComponentInit(handler) {
        this.on_before_view_init = handler.bind(this.scope);
    }


    registerOnComponentInit(handler) {
        this.on_view_init = handler.bind(this.scope);
    }

    registerAfterComponentInit(handler) {
        this.on_after_view_init = handler.bind(this.scope);
    }


    InitEntryHook() {
        const self = this;
        this.hooksEmmiter.subscribe('on_before_component_init', function () {
            self.on_before_view_init();
        }, 'func', res => res);    
    }

    setup() {
        const self = this;

        // Init entry Hook For Stream Component Setup_flow
        this.InitEntryHook();

        // Publish Before Before Event To Return Promise With Two Possible Value 
        this.hooksEmmiter.publish('on_before_component_init', null, true)
            .then(clean => {
                // if Root Cleaning Done Successfully Go Next Step
                if (clean) {
                    self.hooksEmmiter.subscribe('on_component_init', function () {
                        self.on_view_init();
                    }, 'func', res => res);
                    // If Is Still No Content
                    if (!self.thereAreContent()) {
                        // Fire Auth Function
                        self.hooksEmmiter.publish('on_component_init', null, true)
                        .then(auth => {
                            // check if auth 
                            if (auth) {
                                // Init View With it's Logic
                                self.hooksEmmiter.subscribe('on_after_component_init', function () {
                                    self.on_after_view_init();
                                }, 'func', res => res);
                                self.hooksEmmiter.publish('on_after_component_init', null);
                            }
                        }).catch(e => console.log(e));
                    }
                }
                
            }).catch(e => console.log(e));
    }

}


export {
    componentHooks
};