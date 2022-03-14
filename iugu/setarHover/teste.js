let envioEvento = false
let delay = function (elem, callback) {
    let timeout = null;

    elem.onmouseover = function () {
        timeout = setTimeout(callback, 300);
    };

    elem.onmouseout = function () {
        clearTimeout(timeout);
    }
};


delay(document.querySelector('.wrapper-left'), function () {
    if (!envioEvento) {
        console.log('Enviar evento')
        envioEvento = true
    }
});