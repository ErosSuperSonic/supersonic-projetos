var configBody = { 
    attributes: true, 
    childList: true, 
    subtree: true, 
};
var config = {
    attributes: true, 
    childList: false, 
    subtree: false, 
    attributeOldValue: true,
    attributeFilter: ['href', 'action', 'data-event-label', 'value', 'name']
};

// esse observer serve para lidar com o fato de que o código 
// da RD substitui diversas vezes os elementos responsáveis pelo signup
var bodyCallback = function(mutationsList, observer) {
    mutationsList.forEach(function(mutationList) {
        if(mutationList.type === "childList") {
            if(mutationList.addedNodes.length > 0) {
                var added = mutationList.addedNodes[0];
                if(added.nodeName === 'A') {
                    if(added.href.indexOf("https://app.rdstation.com.br/signup") !== -1) {
                        var obs = new MutationObserver(callback);
                        obs.observe(added, config);
                        initialReplace();
                    }
                } 
                else if(added.nodeName === 'BUTTON') {
                    if(added.dataset.eventLabel) {
                        var obs = new MutationObserver(callback);
                        obs.observe(added, config);
                        initialReplace();
                    }
                }
                else if(added.nodeName === 'FORM') {
                    if(added.action.indexOf("https://app.rdstation.com.br/signup") !== -1) {
                        var obs = new MutationObserver(callback);
                        obs.observe(added, config);
                        initialReplace();
                    }
                }
                else if(added.nodeName === 'INPUT') {
                    if(added.name === "trial_origin") {
                        var obs = new MutationObserver(callback);
                        obs.observe(added, config);
                        initialReplace();
                    }
                }
            }
        }
    });
}
var bodyObs = new MutationObserver(bodyCallback);
bodyObs.observe(document.querySelector('body'), configBody);



// todos os links de signup, forms com action de signup e button para alterar o data-event-label
var linksSignup = document.querySelectorAll('a[href*="https://app.rdstation.com.br/signup"], form[action*="https://app.rdstation.com.br/signup"], form[action*="https://app.rdstation.com.br/signup"] button, form[action*="https://app.rdstation.com.br/signup"] input[name="trial_origin"], form#conversion-form input[name="identifier"]');
var callback = function(mutationsList, observer) {
    var target = mutationsList[0].target;
    if(target.nodeName === 'A') {
        var href = target.href;
        if(href.indexOf("supersonic") === -1) { // só executa quando a alteração tirar a origem da supersonic
            replaceHrefSupersonic(target);
        }
    }
    else if(target.nodeName === 'FORM') {
        var action = target.action;
        if(action.indexOf("supersonic") === -1) {
            replaceActionSupersonic(target);
        }
    }
    else if(target.nodeName === 'BUTTON') {
        var label = target.dataset.eventLabel;
        if(label.indexOf("supersonic") === -1) {
            replaceLabelSupersonic(target);
        }
    }
    else if(target.nodeName === 'INPUT') {
        var value = target.value;
        if(value.indexOf("supersonic") === -1) {
            replaceValueSupersonic(target);
        }
    }
};

// um observer pra cada link/form/botao de signup
var observers = Array.from(linksSignup).map(function(el) {
    var obs = new MutationObserver(callback);
    obs.observe(el, config);
    return obs;
});


