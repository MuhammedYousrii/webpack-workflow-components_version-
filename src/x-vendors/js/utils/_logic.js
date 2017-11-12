import {
    rootEl,
    bodyEl
} from './_ElementsRef.js';

function activeScope(scope) {
    rootEl.attr('data-scope', scope);
}

function activeController(controller) {
    bodyEl.attr('data-active-controller', controller);
}

function checkActiveController(controller) {
    return $(`[data-active-controller="${controller}"]`).length > 0;
}

function checkWorkflowScreen() {
    return windowEl.width() > 991;
}

function checkEnv() {
    return process.env.NODE_ENV === 'production';
}

function viewReady(el) {
    return new Promise((resolve, reject) => {
        resolve(el.find('*').length > 0);
    });
}

function cleanRoot() {
    rootEl.find('*').remove();
    return rootEl.find('*').length === 0;
}

export {
    activeScope,
    activeController,
    checkActiveController,
    checkWorkflowScreen,
    checkEnv,
    viewReady,
    cleanRoot
};
