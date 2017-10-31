import {bodyEl} from './_ElementsRef.js';


function niceScroll(){
    bodyEl.niceScroll({
        scrollspeed: 150, 
        mousescrollstep: 150, 
        cursoropacitymin : 0.5 ,
        cursorwidth : '3px',
        cursorcolor : "#B9A024" ,
        cursorborder: `1px solid #B9A024`, 
        horizrailenabled: false  ,
        zindex : 1000 ,
        grabcursorenabled : false ,
    })
}

function resizeScroll(){
    bodyEl.getNiceScroll().resize();
}

function destroyScroll(){
    bodyEl.getNiceScroll().hide();
}


var wow = new WOW(
    {
      boxClass: 'wow', // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset: 50, // distance to the element when triggering the animation (default is 0)
      mobile: false        // trigger animations on mobile devices (true is default)
    }
  );

export {niceScroll , resizeScroll , destroyScroll ,wow}