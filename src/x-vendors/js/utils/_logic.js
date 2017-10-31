import {rootEl} from './_ElementsRef.js'; 

function activeScope(scope){
    rootEl.attr('data-scope' , scope)
}

function activeController(controller){
    bodyEl.attr('data-active-controller' , controller);
}

function checkWorkflowScreen (){
    return windowEl.width() > 991 ;
}

function checkEnv(){
    return process.env.NODE_ENV === "production";
}
function viewReady(el){
    return new Promise((resolve , reject) => {
         resolve(el.find('*').length > 0);
    })
}



export {activeScope , activeController , checkWorkflowScreen , checkEnv , viewReady}