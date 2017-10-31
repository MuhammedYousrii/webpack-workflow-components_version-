import {bodyEl , NavEl , forwardArrow} from 'js/_ElementRef.js';
import {checkWorkflowScreen} from 'js/utils/_logic.js';
class navigator {
    constructor(){

    }



    travel(link){
        let targetSec = $(`#${link.data('href')}`);
        $('html , body').animate({
            scrollTop : targetSec.offset().top
        } , 1000 , function(){
            if(!checkWorkflowScreen())NavEl.slideUp('slow');;
            
        })
    }

    
    travelAbout() {
        $('#forward-arrow-con').on( 'click' , function(){
            $('html , body').animate({
                scrollTop: $('#about').offset().top
            }, 1000)
        })
    }
}

export {navigator} ;