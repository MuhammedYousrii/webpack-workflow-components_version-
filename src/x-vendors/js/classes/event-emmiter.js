/**
 * @class eventEmmiter
 * @author Muhammed Yousrii <muhammed.yuosry@gmail.com>
 * @version 1.0.2
 */

class eventEmmiter {
    constructor(){
        this.events  = {};
    }


    subscribe(event_name , event_handler , handler_type , callback){
        if(this.events.hasOwnProperty(event_name)){
            this.register(event_name , event_handler , handler_type);
            return callback({ stat : 'done' , note :'Event Regstierd Before ,, but We Assign handler to it anyWay'});
        }
        this.events[event_name] = [];     
        this.register(event_name , event_handler , handler_type);
        return callback({stat : 'done' , note :  null})        
    }

    unsubscribe(event_name , callback){
        if(this.event_found(event_name)){
            if(callback){
                callback({stat :"done" , note : "If You Wanna Register eventEmmiter Event Again Use On Method" , delEvent : this.events[event_name]});
            }
            return delete this.events[event_name];
        } 
        if(callback)callback({sate : "undone" , note : "we Don't Found this Event"});
        return undefined ;
    }

    unsubscribeHandler(event_name , handlerID , callback){
        if(this.event_found(event_name)){
            let eventHandlers = this.events[event_name];
            eventHandlers.map(function(handler){
                if(handler.id === handlerID){
                    eventHandlers.splice(handler , 1);
                    callback({stat : "done" , note : "To Register this Handler Again Use subscribe"})
                }
            })
            return ; 
        }
    
        callback({stat : "wrong" , note : "We Don't Found this Event"})
        
    }

    publish(event_name, arg, hooks){
        let _this = this; 
        this.events[event_name].forEach(function(func) {
            func.handler(arg);
        });

        if (hooks) {
            return new Promise((resolve, reject) => {
                if (_this.events[event_name][0]) resolve(true);
                else reject(false); 
            });
        }
    }
    

    register(eventName, eventHandler, handlerType){
        if (typeof eventHandler == 'function' || handlerType == "func") {
            this.binder( eventName,eventHandler);
        }
    
        if (handlerType == "object"  && typeof eventHandler == "object") {
            for (var indexer in eventHandler) {
                if (eventHandler.hasOwnProperty(indexer)) {
                    this.objectBinder(eventName , eventHandler[indexer]);
                }
            }
        }
    
        if (handlerType == "array" && typeof eventHandler == "object") {
            for (let index = 0; index < eventHandler.length; index++) {
                this.binder(eventName , eventHandler)
            }
        }
    }

    binder(event_name ,event_handler){
        this.events[event_name].push({id : `1` , handler : event_handler});
    }

    objectBinder(event_name , event_handler){
        this.events[event_name].push({id : event_handler.id , handler : event_handler.handler})
    }

    event_found(event_name){
        if(typeof event_name === 'string'){
            if (this.events[event_name] !== 'undefined') {
                return true ;
            }
            return false ;
        }
    }

    
}



export {eventEmmiter}