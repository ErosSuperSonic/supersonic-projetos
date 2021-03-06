function configurationsInitialPage2() {
    if (document.querySelector("#mainContent > div > ng-component > div > div > div.col-md-8.area-principal")) {
        document.querySelector("#mainContent > div > ng-component > div > div > div.col-md-8.area-principal").style.width = "100%"; //66.66666667%
    }
    if (document.querySelector("#mainContent > div > ng-component > div > div > div.col-md-4.area-extra.mt-0.ajustar-padding")) {
        document.querySelector("#mainContent > div > ng-component > div > div > div.col-md-4.area-extra.mt-0.ajustar-padding").style.display = 'none'
    }

    if (document.querySelector("#mainContent > div > ng-component > div > div > div.col-md-4.area-extra.mt-0")) {
        document.querySelector("#mainContent > div > ng-component > div > div > div.col-md-4.area-extra.mt-0").style.display = "none"
    }
}



function buttonConsultCepMobile() {
    if (window.innerWidth <= 1100) {
        let myVerification = false;

        let myInterval = setInterval(() => {
            let oldButton = document.querySelector("#mainContent > div > ng-component > div > div > div.col-md-8.area-principal > cg-endereco > div > div > form > div.row > div:nth-child(1) > div > div.flex-row.div-endereco > button")

            if (oldButton) {
                const newButton = oldButton.cloneNode(true)
                oldButton.style.display = "none"
                newButton.classList.add("buttonCepSS")
                if (!document.querySelector(".buttonCepSS")) {
                    document.querySelector("#mainContent > div > ng-component > div > div > div.col-md-8.area-principal > cg-endereco > div > div > form > div.row > div:nth-child(1) > div").insertAdjacentElement("beforeend", newButton)
                    newButton.addEventListener("click", () => {
                        oldButton.click()
                    })
                    myVerification = true;
                    clearInterval(myInterval)
                }
            }

        }, 300)

    }
}

function validationInput() {
    document.querySelector("#txtCep").addEventListener("keyup", (e) => {
        if (window.innerWidth > 1100) {
            const button1 = document.querySelector("#mainContent > div > ng-component > div > div > div.col-md-8.area-principal > cg-endereco > div > div > form > div.row > div:nth-child(1) > div > div.flex-row.div-endereco > button")
            if (e.target.classList.contains("has-error")) {

                button1.style.pointerEvents = "none";
                button1.style.backgroundColor = "#C4C4C4"
            } else {
                button1.style.pointerEvents = "all";
                button1.style.backgroundColor = "#7FC241"
            }
        } else {
            const button2 = document.querySelector("#mainContent > div > ng-component > div > div > div.col-md-8.area-principal > cg-endereco > div > div > form > div.row > div:nth-child(1) > div > button")
            if (e.target.classList.contains("has-error")) {

                button2.style.pointerEvents = "none";
                button2.style.backgroundColor = "#C4C4C4"
            } else {
                button2.style.pointerEvents = "all";
                button2.style.backgroundColor = "#7FC241"
            }
        }
    })
}

function addTextInTitlePageTwo() {
    const contentTextPageTwo = `<div class="content-page-two">
        <p>Voc?? deseja ser o titular de um novo endere??o? Preencha abaixo os dados do endere??o e transfira a titularidade para
        voc??.</p>
        <p><strong>Dica: Para evitar erro na consulta do endere??o tenha em m??os o contrato de compra e venda/loca????o do im??vel ou outras
        contas de consumo para preencher os dados corretamente.</strong></p>

        <p><span>Consulte o novo endere??o para trocar a titularidade:</span></p>
    </div>`




    if (!document.querySelector(".content-page-two")) {
        if (document.querySelector(".new-xp-internal h2.text-blue")) {
            document.querySelector(".new-xp-internal h2.text-blue").insertAdjacentHTML("afterend", contentTextPageTwo)
        }
    }
    if (!document.querySelector(".content-page-two")) {
        document.querySelector("#mainContent > div > ng-component > div > div").insertAdjacentHTML("beforebegin", contentTextPageTwo)
        document.querySelector(".content-page-two").classList.add("deslogado")
        document.querySelector(".content-page-two.deslogado").insertAdjacentHTML("afterbegin", "<h2>Informe o endere??o da troca</h2>")
    }
}



function alterationTitle() {
    if (document.querySelector("#mainContent > div > ng-component > div > div > div.col-md-8.area-principal > h2")) {
        document.querySelector("#mainContent > div > ng-component > div > div > div.col-md-8.area-principal > h2").innerHTML = "Informe o endere??o da troca"
    }
}


function nextPageTwo() {
    if (document.querySelector("#trocaTitularicadeInicio > form > div:nth-child(2) > cg-button > button")) {
        document.querySelector("#trocaTitularicadeInicio > form > div:nth-child(2) > cg-button > button").addEventListener("click", () => {
            buttonConsultCepMobile()
            validationInput()
            alterationTitle()
            addTextInTitlePageTwo()
            buttonPreviusPage()
            configurationsInitialPage2()
        })
    }
}

function buttonPreviusPage() {
    document.querySelector("#mainContent > div > ng-component > div > div > div.col-md-8.area-principal > cg-endereco > div > div > form > div.mb-4.d-flex > div:nth-child(1) > cg-button > button").addEventListener("click", () => {
        previousPageOne()
    })
}


function previousPageOne() {
    //Titulo da pagina 1
    if (document.querySelector("#mainContent > div > ng-component > div > div > div.col-md-8.area-principal > h2")) {
        document.querySelector("#mainContent > div > ng-component > div > div > div.col-md-8.area-principal > h2").innerHTML = "Altera????o de Titularidade"
    }

    //removendo se????o da content-page-two da pagina 1

    if (document.querySelector(".content-page-two")) {
        document.querySelector(".content-page-two").remove()
    }

    if (window.innerWidth >= 1100) {
        if (document.querySelector("#mainContent > div > ng-component > div > div > div.col-md-8.area-principal")) {
            document.querySelector("#mainContent > div > ng-component > div > div > div.col-md-8.area-principal").style.width = "66.66666667%"; //
        }
        if (document.querySelector("#mainContent > div > ng-component > div > div > div.col-md-4.area-extra.mt-0")) {
            document.querySelector("#mainContent > div > ng-component > div > div > div.col-md-4.area-extra.mt-0").style.display = "66.66666667%";
        }
    } else {
        if (document.querySelector("#mainContent > div > ng-component > div > div > div.col-md-8.area-principal")) {
            document.querySelector("#mainContent > div > ng-component > div > div > div.col-md-8.area-principal").style.width = "100%"; //
        }
        if (document.querySelector("#mainContent > div > ng-component > div > div > div.col-md-4.area-extra.mt-0")) {
            document.querySelector("#mainContent > div > ng-component > div > div > div.col-md-4.area-extra.mt-0").style.display = "100%";
        }
    }


    if (document.querySelector("#mainContent > div > ng-component > div > div > div.col-md-4.area-extra.mt-0.ajustar-padding")) {

        document.querySelector("#mainContent > div > ng-component > div > div > div.col-md-4.area-extra.mt-0.ajustar-padding").style.display = 'block'
    }

    if (document.querySelector("#mainContent > div > ng-component > div > div > div.col-md-4.area-extra.mt-0")) {
        document.querySelector("#mainContent > div > ng-component > div > div > div.col-md-4.area-extra.mt-0").style.display = "block"
    }
    nextPageTwo()
}



const root = document.querySelector('body');
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        console.log(mutation.target)
        if (window.location.pathname === '/trocaTitularidade') {
            nextPageTwo()
            // if (mutation.target.classList.contains('area-principal') || mutation.target.classList.contains('ng-tns-0-0') || mutation.target.classList.contains('ng-tns-0-1')) {
            // }
        }
    });
});

observer.observe(root, {
    childList: true,
    subtree: true,
});