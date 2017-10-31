// event Emmiter created by Muhammed Yousrii
import {eventEmmiter} from './event-emmiter.js';

/**
 * @class dataBinder
 * @constructor
 * @see two-way-data-binding 
 * @todo Improve the Performance Of Lib
 * @todo Improve Handling Expected Cases 
 * @param {string} modelID - The Root Of lib To get Eles
 * @author Muhammed Yousrii <Muhammed.yuosry@gmail.com>
 * @version 1.0.0
 */
class dataBinder {
    constructor(modelID){
        this.models = {};
        this.modelID = modelID;
        this.emmiter = new eventEmmiter();
    }

    registerEvents(){
        const self = this ;
        this.emmiter.on('view-change' ,
            model => {
                const TargetModel = self.models[model.name];
                TargetModel.value = model.newValue ;
                if(TargetModel.value !== TargetModel.lastValue){
                    TargetModel.lastValue == TargetModel.value ;
                }
            },'func',emmiterResponse => emmiterResponse);

        
        this.emmiter.on('model-change' ,
            model => {
                model.el.val(model.val);
            },'func' ,emmiterResponse => emmiterResponse)
    }

    triggerEvent(el , event){
        const model = el;
        this.emmiter.emit(event , {name : model.data('name') , newValue : model.val()})        
    }

    bindDomEvent(el){
        const self = this ;
        el.on({
            'change' : function(){
                self.triggerEvent($(this) ,'view-change')
            },
            'keyup' :function(){
                self.triggerEvent($(this) ,'view-change')                        
            }
        })
    }

    creatModel(el){
        return {
            name : $(el).data('name'),
            value : $(el).val(),
            lastValue : $(el).val(),
            tag : el.tagName           
        }
    }

    registerModels(){
        const self = this ;
        const models = $(`[data-model="${this.modelID}"]`);
        for (let key in models) {
            if (models.hasOwnProperty(key)) {
                this.bindDomEvent($(models[key]));
                this.models[$(models[key]).data('name')] = this.creatModel(models[key]); ;
                
                
                if(key == (models.length - 1)){
                    return false ;
                }
            }
        }
    }

    setModel(attrName , value){
        this.models[attrName].value = value ;
        this.emmiter.emit('model-change' , {el : $(`[data-name="${attrName}"]`) , val : value}); 
    }


    init(){
        this.registerEvents();
        this.registerModels();
    }
}



export {dataBinder};
