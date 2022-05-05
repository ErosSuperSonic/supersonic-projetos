const secaoIndicacaoProcesso = `
    <div class="secoesSS">
        <div class="item active">
            <div class="circle line">
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.81246 1.33203L3.2578 6.88669L1.40625 5.03514" stroke="#121212" stroke-width="1.5" />
                </svg>
            </div>
            <span>Termos</span>
        </div>

        <div class="item active">
            <div class="circle line">
                2
            </div>
            <span>Valor e Prazo</span>
        </div>

        <div class="item">
            <div class="circle line">
                3
            </div>
            <span>Expectativas</span>
        </div>

        <div class="item">
            <div class="circle line">
                4
            </div>
            <span>Dados</span>
        </div>

        <div class="item">
            <div class="circle">
                5
            </div>
            <span>Resultado</span>
        </div>
    </div>
`


const novoParagrafoHome = `
    <p>Esta simulação não será feita por robôs.</p>
    <p>No nosso time, centenas de pessoas se dedicam diariamente para levar até você as melhores recomendações de
        investimentos
        atreladas ao seu perfil.</p>
    Assim, você pode investir com segurança, de forma simples e rápida com todo o apoio dos nossos especialistas.
    <p></p>
`

function mudarFrase() {
    let verifyFrase = false;
    let setarFrase = setInterval(() => {
        if (!verifyFrase) {
            try {
                const frase = document.querySelector("#simulador_app > soma-container > soma-grid > soma-grid-row > soma-grid-col:nth-child(1) > soma-container > soma-grid > soma-grid-row > soma-grid-col > soma-context:nth-child(3) > soma-paragraph > span")
                if (frase) {
                    document.querySelector("#simulador_app > soma-container > soma-grid > soma-grid-row > soma-grid-col:nth-child(1) > soma-container > soma-grid > soma-grid-row > soma-grid-col > soma-context:nth-child(3) > soma-paragraph > span").innerHTML = novoParagrafoHome
                    clearInterval(setarFrase)
                    verifyFrase = true
                }
            } catch (e) {
                console.log(e)
                clearInterval(setarFrase)
                verifyAnos = true

            }
        }

    }, 300)
}


function adicionarAnosNaEtapa3() {
    let verifyAnos = false;
    let setarAnos = setInterval(() => {
        if (!verifyAnos) {
            try {
                const anos = document.querySelector("#simulador_app > soma-container > soma-grid > soma-grid-row > soma-grid-col:nth-child(1) > soma-container > soma-grid > soma-grid-row > soma-grid-col > soma-context:nth-child(5) > soma-context > soma-quantity").shadowRoot.querySelector("soma-description")
                if (anos) {
                    if (!anos.querySelector("p")) {
                        anos.insertAdjacentHTML("beforeend", "<p class=`paragrafoSS` style='display: contents'> Anos</p>")
                        anos.style.display = "flex"
                        anos.style.alignItems = "center"
                        clearInterval(setarAnos)
                        verifyAnos = true

                        if (!document.querySelector(".secoesSS")) {
                            document.querySelectorAll(".page")[1].insertAdjacentHTML("afterbegin", secaoIndicacaoProcesso)
                        }

                        //Mexendo no active da lista no topo da pagina
                        document.querySelectorAll(".secoesSS > div").forEach((el) => {
                            el.classList.remove("active")
                        })
                        document.querySelectorAll(".secoesSS > div")[0].classList.add("active")
                        document.querySelectorAll(".secoesSS > div")[1].classList.add("active")
                    }
                }
            } catch (e) {
                console.log(e)
                clearInterval(setarAnos)
                verifyAnos = true

            }
        }

    }, 300)

}
let interrogation = `
<svg class="svgInterrogation" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="black" stroke-width="1.5"/>
<path d="M9.08984 8.99999C9.32495 8.33166 9.789 7.7681 10.3998 7.40912C11.0106 7.05015 11.7287 6.91893 12.427 7.0387C13.1253 7.15848 13.7587 7.52151 14.2149 8.06352C14.6712 8.60552 14.9209 9.29151 14.9198 9.99999C14.9198 12 11.9198 13 11.9198 13" stroke="black" stroke-width="1.5"/>
<path d="M12 17.5L12 16" stroke="black" stroke-width="1.5"/>
</svg>

`

function etapa4MudarTextos() {
    //Expectativas

    let verifyLabels = false;
    let setarLabels = setInterval(() => {
        if (!verifyLabels) {
            try {
                const labels = document.querySelectorAll("#simulador_app > soma-container > soma-grid > soma-grid-row > soma-grid-col:nth-child(1) > soma-container > soma-grid > soma-grid-row > soma-grid-col > soma-radio-group > soma-radio")
                if (labels) {
                    labels.forEach((el, index) => {
                        if (!document.querySelector(".secoesSS")) {
                            document.querySelectorAll(".page")[1].insertAdjacentHTML("afterbegin", secaoIndicacaoProcesso)
                        }

                        //Mexendo no active da lista no topo da pagina
                        document.querySelectorAll(".secoesSS > div").forEach((el) => {
                            el.classList.remove("active")
                        })
                        document.querySelectorAll(".secoesSS > div")[0].classList.add("active")
                        document.querySelectorAll(".secoesSS > div")[1].classList.add("active")
                        document.querySelectorAll(".secoesSS > div")[2].classList.add("active")

                        if (!el.shadowRoot.querySelector("label").querySelector(".svgInterrogation")) {
                            el.shadowRoot.querySelector("label > span").insertAdjacentHTML("beforebegin", interrogation)
                            el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").style.position = "absolute"
                            el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").style.cursorPointer = "all"
                            el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").style.zIndex = "10"
                            if (window.innerWidth <= 1100) {
                                el.shadowRoot.querySelector("label > span").style.fontSize = "14px"
                            }
                            if (index == 0) {
                                el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").style.right = "-86px"

                                el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").addEventListener("mouseover", () => {
                                    el.shadowRoot.querySelector("label > span").innerHTML = "Ganhar 10% de retorno sem risco"
                                    el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").style.right = "-77px"

                                })
                                el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").addEventListener("mouseout", () => {
                                    el.shadowRoot.querySelector("label > span").innerHTML = "100% de chance de ganhar 10%"
                                    el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").style.right = "-89px"

                                })

                                if (window.innerWidth <= 1100) {
                                    el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").style.right = "-83px"
                                    el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").addEventListener("mouseout", () => {
                                        el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").style.right = "-83px"
                                        el.shadowRoot.querySelector("label > span").innerHTML = "Ganhar 10% de retorno sem risco"

                                    })
                                }

                            } else if (index == 1) {
                                el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").style.right = "-37px"

                                el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").addEventListener("mouseover", () => {
                                    el.shadowRoot.querySelector("label > span").innerHTML = "Ganhar entre 5% a 20% com pouco risco"
                                    el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").style.right = "-27px"
                                })
                                el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").addEventListener("mouseout", () => {
                                    el.shadowRoot.querySelector("label > span").innerHTML = "Possibilidade de ganhar entre 5%-20%"
                                    el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").style.right = "-43px"
                                })

                                if (window.innerWidth <= 1100) {
                                    el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").style.right = "-38px"
                                    el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").addEventListener("mouseout", () => {
                                        el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").style.right = "-38px"
                                        el.shadowRoot.querySelector("label > span").innerHTML = "Ganhar entre 5% a 20% com pouco risco"
                                    })
                                }
                            } else if (index == 2) {
                                el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").style.right = "-47px"
                                el.shadowRoot.querySelector("label > span").innerHTML = "Possibilidade de ganhar entre 0%-25%"

                                el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").addEventListener("mouseover", () => {
                                    el.shadowRoot.querySelector("label > span").innerHTML = "Ganhar até 25% com médio risco"
                                    el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").style.right = "-80px"

                                })
                                el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").addEventListener("mouseout", () => {
                                    el.shadowRoot.querySelector("label > span").innerHTML = "Possibilidade de ganhar entre 0%-25%"
                                    el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").style.right = "-47px"

                                })

                                if (window.innerWidth <= 1100) {
                                    el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").style.right = "-44px"
                                    el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").addEventListener("mouseout", () => {
                                        el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").style.right = "-74px"
                                        el.shadowRoot.querySelector("label > span").innerHTML = "Ganhar até 25% com médio risco"
                                    })
                                }
                            } else if (index == 3) {
                                el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").style.right = "3px"
                                el.shadowRoot.querySelector("label > span").style.width = "70%"
                                el.shadowRoot.querySelector("label > span").innerHTML = "Possibilidade de perder 10% ou ganhar até 40%"

                                el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").addEventListener("mouseover", () => {
                                    el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").style.right = "-26px"
                                    el.shadowRoot.querySelector("label > span").innerHTML = "Ganhar até 40% com risco de perder 10%"

                                })
                                el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").addEventListener("mouseout", () => {
                                    el.shadowRoot.querySelector("label > span").innerHTML = "Possibilidade de perder 10% ou ganhar até 40%"
                                    el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").style.right = "3px"

                                })

                                if (window.innerWidth <= 1100) {
                                    el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").style.right = "13px"
                                    el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").addEventListener("mouseout", () => {
                                        el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").style.right = "-26px"
                                        el.shadowRoot.querySelector("label > span").innerHTML = "Ganhar até 40% com risco de perder 10%"
                                    })
                                }

                            }

                        }
                    })
                    clearInterval(setarLabels)
                    verifyLabels = true
                }
            } catch (e) {
                clearInterval(setarLabels)
                verifyLabels = true

            }
        }

    }, 300)
}

function trocarFraseForm() {
    //Expectativas
    let verifyLabels = false;
    let setarLabels = setInterval(() => {
        if (!verifyLabels) {
            try {

                //Mexendo no active da lista no topo da pagina
                document.querySelectorAll(".secoesSS > div").forEach((el) => {
                    el.classList.remove("active")
                })

                document.querySelectorAll(".secoesSS > div")[0].classList.add("active")
                document.querySelectorAll(".secoesSS > div")[1].classList.add("active")
                document.querySelectorAll(".secoesSS > div")[2].classList.add("active")
                document.querySelectorAll(".secoesSS > div")[3].classList.add("active")

                const input1 = document.querySelector("#simulador_app > soma-container > soma-grid > soma-grid-row > soma-grid-col:nth-child(1) > soma-container > soma-grid > soma-grid-row > soma-grid-col > soma-text-field:nth-child(3)").shadowRoot.querySelector("div > label")
                if (input1) {
                    document.querySelector("#simulador_app > soma-container > soma-grid > soma-grid-row > soma-grid-col:nth-child(1) > soma-container > soma-grid > soma-grid-row > soma-grid-col > soma-text-field:nth-child(3)").shadowRoot.querySelector("div > label").innerHTML = "E-mail (para receber o resultado)"
                    document.querySelector("#simulador_app > soma-container > soma-grid > soma-grid-row > soma-grid-col:nth-child(1) > soma-container > soma-grid > soma-grid-row > soma-grid-col > soma-text-field:nth-child(4)").shadowRoot.querySelector("div > label").innerHTML = "Celular com DDD."
                    clearInterval(setarLabels)
                    verifyLabels = true
                }
            } catch (e) {
                clearInterval(setarLabels)
                verifyLabels = true

            }
        }

    }, 300)
}

function trocarTitulos() {
    const tituloPage = document.querySelector(".content__title");


    if (tituloPage.innerText === "Quanto você pensa em investir?") {
        tituloPage.innerHTML = "<span>Preencha o valor e o prazo do seu investimento</span>"
    } else if (tituloPage.innerText === 'Simulador deInvestimentos da XP') {
        tituloPage.style.textAlign = 'left'
    } else if (tituloPage.innerText === "Queremos te conhecer melhor!") {
        tituloPage.innerHTML = "<span>Quais suas expectativas com o investimento?</span>"
    } else if (tituloPage.innerText === "Para finalizar, precisamos dosseus dados para enviar o resultado") {
        tituloPage.innerHTML = "<span>Para receber o resultado, é só preencher seus dados abaixo</span>"
        tituloPage.querySelector("span").fontWeight = "400"
        trocarFraseForm()
    }
}



function trocarSubtitulos() {
    document.querySelectorAll("soma-paragraph.input--question.soma-paragraph.inverse.hydrated").forEach((el) => {
        if (el.innerText === "Quanto você quer investir?") {

            el.innerHTML = "<span>Quanto você quer investir? (mínimo R$1.000)</span>"

            document.querySelector("#simulador_app > soma-container > soma-grid > soma-grid-row > soma-grid-col:nth-child(1) > soma-container > soma-grid > soma-grid-row > soma-grid-col > soma-text-field").shadowRoot.querySelector("div > label").innerHTML = "Digite seu valor aqui"

        } else if (el.innerText === "Por quanto tempo você pretende deixar o dinheiro investido?") {
            el.innerHTML = "<span>Quando você quer resgatar seu investimento?</span>"
        } else if (el.innerText === "Das opções abaixo, o que você prefere?") {
            el.innerHTML = "<span>Das opções abaixo, qual mais te atende?</span>"
        }
    })

}

function resultado() {
    let verifyLabels = false;
    let setarLabels = setInterval(() => {
        if (!verifyLabels) {
            try {
                if (document.querySelector(".results__content")) {
                    document.querySelector(".secoesSS").style.display = "none"

                    document.querySelector("#simulador_app > soma-container > soma-grid > soma-grid-row > soma-grid-col:nth-child(1) > soma-container > soma-grid > soma-grid-row > soma-grid-col > soma-context:nth-child(16) > soma-context > soma-context > soma-button.results__button--full.results__button--redo.soma-button.secondary.lg.inverse.hydrated").shadowRoot.querySelector("button").addEventListener("click", () => {
                        window.location.reload();
                    })

                    clearInterval(setarLabels)
                    verifyLabels = true
                }
            } catch (e) {
                clearInterval(setarLabels)
                verifyLabels = true
            }
        }

    }, 300)
}


const root = document.querySelector('.home');
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.target.classList.contains("home")) {
            trocarTitulos()
            trocarSubtitulos()
            adicionarAnosNaEtapa3()
            etapa4MudarTextos()
            mudarFrase()
            resultado()
        }
    });
});

observer.observe(root, {
    childList: true,
    subtree: true,
});