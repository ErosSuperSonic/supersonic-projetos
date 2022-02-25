if (window.innerWidth <= 768) {
    try {
        adicionarSeloInFirstCard()
        adicionarCopyMelhorPreco()


        addEventButtonsMelhoresTarifas()
        atualizarMaisBaratoFiltroPopup()
        atualizarMaisBaratoFiltroDestaqueMobile()
    } catch (e) {
        console.log(e)
    }
}


function adicionarSeloInFirstCard() {
    let encontrouSelos = false;

    const seloSearch = setInterval(() => {
        if (!encontrouSelos) {
            const selosFilter = document.querySelectorAll(".sticky_price")[0]


            if (selosFilter) {

                if (!document.querySelector(".seloContainer")) {
                    selosFilter.insertAdjacentHTML("afterbegin", `
                                                                <p class="seloContainer">
                 <img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/1224991d5f0722566078dca93d309a7b2d217aef/passagensPromo/selo-mobile.svg" >

                                                                <p>
                    `)

                }
                setTimeout(() => {
                    encontrouSelos = true;
                    clearInterval(seloSearch);
                }, 10000)
            }
        }
    }, 300);
}

function adicionarCopyMelhorPreco() {
    const myHTML = `        <div class="copy-ss">
                                <p>
                                    <img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/1224991d5f0722566078dca93d309a7b2d217aef/passagensPromo/relogio-mobile.svg" >
                                    Aproveite o melhor preço antes que ele aumente.
                                </p>
                            </div>`




    let encontrouCard = false;

    const encontrouFirstCard = setInterval(() => {
        if (!encontrouCard) {
            const firstCard = document.querySelector(".flightcardsidebar")

            if (firstCard) {
                firstCard.style.borderRadius = "0px" //tirar o border radius do elemento com melhor preço
                if (!document.querySelector(".copy-ss")) {
                    firstCard.insertAdjacentHTML("afterend", myHTML)
                }
                setTimeout(() => {
                    encontrouCard = true;
                    clearInterval(encontrouFirstCard);
                }, 6000)
            }
        }
    }, 300);
}



function addEventButtonsMelhoresTarifas() {
    let encontrouButton = false;

    const encontrouButtons = setInterval(() => {
        if (!encontrouButton) {
            const buttons = document.querySelectorAll(".item_cia_column button")
            if (buttons) {
                buttons.forEach((button) => {
                    button.addEventListener("click", () => {
                        adicionarSeloInFirstCard();
                        adicionarCopyMelhorPreco();
                        cleanFilters()
                    })
                })

                setTimeout(() => {
                    encontrouButton = true;
                    clearInterval(encontrouButtons);
                }, 15000)
            }
        }
    }, 300);
}



function atualizarMaisBaratoFiltroDestaqueMobile() {
    let encontrouButton = false;

    const encontrouButtons = setInterval(() => {
        if (!encontrouButton) {
            const buttons = document.querySelectorAll(".resultsfilters button")

            if (buttons) {
                buttons.forEach((button) => {
                    button.addEventListener("click", () => {
                        adicionarSeloInFirstCard();
                        adicionarCopyMelhorPreco();
                        cleanFilters()
                    })
                })

                setTimeout(() => {
                    encontrouButton = true;
                    clearInterval(encontrouButtons);
                }, 15000)
            }
        }
    }, 300);
}

function atualizarMaisBaratoFiltroPopup() {
    let encontrouButton = false;

    const encontrouButtons = setInterval(() => {
        if (!encontrouButton) {
            const buttons = document.querySelectorAll(".item_filterblock")

            if (buttons) {
                buttons.forEach((button) => {
                    button.addEventListener("click", () => {
                        adicionarSeloInFirstCard();
                        adicionarCopyMelhorPreco();
                        cleanFilters()
                    })
                })

                setTimeout(() => {
                    encontrouButton = true;
                    clearInterval(encontrouButtons);
                }, 15000)


            }
        }
    }, 300);


}


function cleanFilters() {

    if (document.querySelectorAll(".clearresultfilters")) {
            let encontrou = false;

            const encontrouClearFilter = setInterval(() => {
                if (!encontrou) {
                    const clearFilter = document.querySelector(".clearresultfilters")

                    if (clearFilter) {
                        clearFilter.addEventListener("click", () => {
                            adicionarSeloInFirstCard();
                            adicionarCopyMelhorPreco();
                            tagItemVerification()
                        })


                        setTimeout(() => {
                            encontrou = true;
                            clearInterval(encontrouClearFilter);
                        }, 15000)
                    }
                }
            }, 300);
    }
}


function tagItemVerification() {
    if (document.querySelectorAll(".tagitem")) {
        let encontrou = false;

        const encontrouTagItem = setInterval(() => {
            if (!encontrou) {
                const tagItem = document.querySelector(".tagitem")

                if (tagItem) {
                    tagItem.addEventListener("click", () => {
                        adicionarSeloInFirstCardDesktop();
                        adicionarCopy();
                    })


                    setTimeout(() => {
                        encontrou = true;
                        clearInterval(encontrouTagItem);
                    }, 15000)
                }
            }
        }, 300);
    }
}