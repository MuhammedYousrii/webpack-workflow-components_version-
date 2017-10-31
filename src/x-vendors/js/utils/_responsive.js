import {windowEl, homeEl , carouselEl} from 'js/_ElementRef.js';
import {checkWorkflowScreen} from './_logic.js';
const responsiveInfo = {
    lgScreenDvider : 1.3 ,
    smScreenDvider : 1.2 ,
    xsScreenDvider : 1.6 ,
}

function responsiveSliderImage(){
    let windowHeight = windowEl.height();
    let windowWidth = windowEl.width();
    let devider = windowWidth / windowHeight ;
    if(windowWidth > 991){
        let imgH = windowHeight / responsiveInfo.lgScreenDvider;
        $('#landing-carousel .item img').css('height' , imgH);
        return 'lgScreen';
    }else if (windowWidth > 768){
        let imgH = windowHeight / devider;
        $('#landing-carousel .item img').css('height' , imgH);
        return 'smScreen';
    }
    let imgH = windowHeight / responsiveInfo.xsScreenDvider;
    $('#landing-carousel .item img').css('height' , imgH);
}



function setFixedHeight(){
    const windowHeight =  windowEl.height();
    $('.section-block').css('height' , windowHeight);
}

export {responsiveSliderImage , setFixedHeight};