var path = window.location.pathname;
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




const root = document.querySelector('#root');
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (window.innerWidth > 768) {
            if (mutation.target.classList.contains("flightcardlist")) {
                anacDetailsEvent()
            }
        }

        if (window.innerWidth < 768) {
            if (mutation.target.classList.contains("flightcardlist")) {
                selecionarVoo()
                closePopupEvent()
                
            }
        }
    });
});

observer.observe(root, {
    childList: true,
    subtree: true,
});


function anacDetailsEvent() {
    let verifyAnacDetails = false;
    let encontrarAnac = setInterval(() => {
        if (!verifyAnacDetails) {
            let anac = document.querySelectorAll(".anac_details")
            if (anac) {
                anac.forEach((buttonAnac) => {
                    buttonAnac.addEventListener("click", () => {
                        console.log("Clique em anac_details")
                        sendEvent("pp_pesquisa", "abriu popup", "checou atrasos")
                    })
                })
                clearInterval(encontrarAnac)
                verifyAnacDetails = true
            }
        }
    }, 300)
}


function selecionarVoo() {
    let verifyApplyButton = false;
    let encontrarApllyButton = setInterval(() => {
        if (!verifyApplyButton) {
            let applayButton = document.querySelectorAll(".applyButton")

            if (applayButton) {
                applayButton.forEach((buttonAnac) => {
                    buttonAnac.addEventListener("click", () => {
                        sendEvent("pp_pesquisa", "abriu popup", "selecionar voo")
                    })
                })
                clearInterval(encontrarApllyButton)
                verifyApplyButton = true
            }
        }
    }, 300)
}

function closePopupEvent() {
    let verifyClosePopupEvent = false;
    let encontrarClosePopup = setInterval(() => {
        if (!verifyClosePopupEvent) {
            let closePopup = document.querySelectorAll(".closePopup")

            if (closePopup) {
                closePopup.forEach((buttonAnac) => {
                    buttonAnac.addEventListener("click", () => {
                        sendEvent("pp_pesquisa", "fechou popup", "")
                    })
                })
                clearInterval(encontrarClosePopup)
                verifyClosePopupEvent = true
            }
        }
    }, 300)
}




// document.querySelectorAll(".flightcardlist").forEach(el => {
//     el.addEventListener("click", () => {
//         anacDetailsEvent()
//     })
// })

////////


// if (document.querySelector(".flightcardlist .flightcarditem .arrow_details.reverse")) {
//     console.log(mutation.target)
// }
// mutation.target.classList.contains(".anac_details").addEventListener("click", () => {
//     console.log("Cliquei")
// })


//Mapear close