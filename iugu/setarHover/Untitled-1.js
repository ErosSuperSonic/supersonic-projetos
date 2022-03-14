if (window.innerWidth >= 1200) {


    var url = window.location.href;
    var debug = false;

    function sendEvent(category, action, label) {
        if (debug) {
            console.log("Event sended | Category: [" + category + "] | Action: [" + action + "] | Label: [" + label + "]");
        }
        if (!debug) {
            var gaName = ga.getAll()[0].get("name");
            ga(gaName + '.send', {
                hitType: 'event',
                eventCategory: category,
                eventAction: action,
                eventLabel: label
            });
        }
    }



    function delay(elem, callback) {
        var timeout = null;

        elem.onmouseover = function () {
            timeout = setTimeout(callback, 300);
        };
        elem.onmouseout = function () {
            clearTimeout(timeout);
        }
    };


    Array.from(document.querySelector('.wrapper-left').querySelectorAll("nav li.menu-item .item-btn")).forEach(function (el) {
        el.onmouseover = function () {
            delay(el, function () {
                if (el.innerText === "Produtos") {
                    sendEvent('menu-topo', 'hover', 'Produtos');
                } else if (el.innerText === "Preços") {
                    sendEvent('menu-topo', 'hover', 'Preços');
                } else if (el.innerText === "Empresa") {
                    sendEvent('menu-topo', 'hover', 'Empresa');
                } else if (el.innerText === "Conteúdos") {
                    sendEvent('menu-topo', 'hover', 'Conteúdos');
                } else if (el.innerText === "iugu4devs") {
                    sendEvent('menu-topo', 'hover', 'iugu4devs');
                } else if (el.innerText === "Suporte") {
                    sendEvent('menu-topo', 'hover', 'Suporte');
                }
            })
        }
    })

}

