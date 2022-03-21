//Pegando o botão

const newTextMobile = `
<p class="newbutton--ss-mobile">
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 10C7.98528 10 10 7.98528 10 5.5C10 3.01472 7.98528 1 5.5 1C3.01472 1 1 3.01472 1 5.5C1 7.98528 3.01472 10 5.5 10Z" stroke="#7C7C7E" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.125 5.125H5.5V7.75H5.875" stroke="#7C7C7E" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.46875 3.4375C5.46875 3.47202 5.44077 3.5 5.40625 3.5C5.37173 3.5 5.34375 3.47202 5.34375 3.4375C5.34375 3.40298 5.37173 3.375 5.40625 3.375C5.44077 3.375 5.46875 3.40298 5.46875 3.4375Z" fill="#7C7C7E" stroke="#7C7C7E"/>
        </svg>


        Ver detalhes do voo
    </p>
`

const newTextDesktop = `
            <div class="newbutton--ss-desk">
                    Ver detalhes
                    
                    <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 1L8 8L1 1" stroke="#484848" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            `




if (window.innerWidth > 570) {
    function criarElementDesktop() {
        let verificarBotoes = false;
        let botoesInterval = setInterval(() => {
            if (!verificarBotoes) {
                const botoesAbrirModal = document.querySelectorAll(".arrow_details")

                if (botoesAbrirModal.length > 0) {
                    botoesAbrirModal.forEach((element) => {
                        if (element.querySelectorAll(".newbutton--ss-desk").length == 0) {
                            element.insertAdjacentHTML("afterbegin", newTextDesktop)
                        }
                    })

                    document.querySelectorAll(".arrow_details span").forEach((span) => {
                        span.style.display = "none"
                    })
                    verificarBotoes = true;
                    setTimeout(() => {
                        clearInterval(botoesInterval)
                    }, 10000)
                }
            }
        }, 300)
    }

    criarElementDesktop()



    window.addEventListener("scroll", () => {
        criarElementDesktop()
    })


    let filterVerify = false;
    let resultsfiltersVerify = false;
    let columnVerify = false;
    let flightsfilters = false


    const intervalButtonsSite = setInterval(() => {

        if (document.querySelector("body .layout_search .moreresultsbutton")) {
            document.querySelector("body .layout_search .moreresultsbutton").addEventListener("click", () => {
                criarElementDesktop()
            })
            filterVerify = true
        }

        if (document.querySelector(".resultsfilters")) {
            document.querySelector(".resultsfilters").addEventListener("click", () => {
                criarElementDesktop()
            })
            resultsfiltersVerify = true
        }

        if (document.querySelectorAll(".item_cia_column")) {
            document.querySelectorAll(".item_cia_column").forEach((col) => {
                col.addEventListener("click", () => {
                    criarElementDesktop()
                })
            })
            columnVerify = true
        }

        if (document.querySelector(".flightsfilters")) {
            document.querySelector(".flightsfilters").addEventListener("click", () => {
                criarElementDesktop()
            })
            flightsfilters = true
        }

        if (filterVerify && resultsfiltersVerify && columnVerify && flightsfilters) {
            clearInterval(intervalButtonsSite)
        }
    }, 500)


    let contador = 0

    let myIntervalDesk = setInterval(() => {
        contador = contador + 1000
        criarElementMobile();

        if (contador === 7000) {
            clearInterval(myIntervalDesk)
        }
    }, 1000)
}

if (window.innerWidth < 570) {
    function criarElementMobile() {
        let verificarBotoes = false;
        let botoesInterval = setInterval(() => {
            if (!verificarBotoes) {
                const botoesAbrirModal = document.querySelectorAll(".arrow_details")

                if (botoesAbrirModal.length > 0) {
                    botoesAbrirModal.forEach((element) => {
                        if (element.querySelectorAll(".newbutton--ss-mobile").length == 0) {
                            element.insertAdjacentHTML("afterbegin", newTextMobile)
                        }

                        document.querySelectorAll("#arrow_details").forEach((span) => {
                            span.style.display = "none"
                        })
                    })

                    verificarBotoes = true;
                    setTimeout(() => {
                        clearInterval(botoesInterval)
                    }, 10000)
                }
            }
        }, 300)
    }

    let contador = 0

    let myIntervalMobile = setInterval(() => {
        contador = contador + 1000
        criarElementMobile();

        if (contador === 7000) {
            clearInterval(myIntervalMobile)
        }
    }, 1000)

    window.addEventListener("scroll", () => {
        criarElementMobile()
    })





    const intervalButtonsSite = setInterval(() => {

        if (document.querySelector("body .layout_search .moreresultsbutton")) {
            document.querySelector("body .layout_search .moreresultsbutton").addEventListener("click", () => {
                criarElementMobile()
            })
            filterVerify = true
        }

        if (document.querySelector(".resultsfilters")) {
            document.querySelector(".resultsfilters").addEventListener("click", () => {
                criarElementMobile()
            })
            resultsfiltersVerify = true
        }

        if (document.querySelectorAll(".item_cia_column")) {
            document.querySelectorAll(".item_cia_column").forEach((col) => {
                col.addEventListener("click", () => {
                    criarElemencriarElementMobiletDesktop()
                })
            })
            columnVerify = true
        }

        if (filterVerify && resultsfiltersVerify && columnVerify) {
            clearInterval(intervalButtonsSite)
        }
    }, 500)
}