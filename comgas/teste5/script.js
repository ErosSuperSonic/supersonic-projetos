function alterationOwnership() {
    if (document.querySelector(".new-xp-internal h2.text-blue")) {
        document.querySelector(".new-xp-internal h2.text-blue").innerHTML = "Troca de titularidade"
    }

}



function alterationCopy() {
    if (document.querySelector("#trocaTitularicadeInicio > h4")) {
        document.querySelector("#trocaTitularicadeInicio > h4").innerHTML = "Para você que se mudou recentemente e/ou precisa alterar o nome do responsável da conta Comgás. Encontre abaixo tudo o que você precisa saber antes de começar."
    }
}

function alterationAccordion() {
    if (document.querySelectorAll("#trocaTitularicadeInicio > accordion accordion-group")) {
        document.querySelectorAll("#trocaTitularicadeInicio > accordion accordion-group").forEach((accordion, index) => {
            if (index == 1 || index == 2) {
                accordion.style.display = "none"
            }
        })
    }
}

function alterationContentCardAside() {
    if (document.querySelector("#acompanharSolicitacao > h4")) {
        document.querySelector("#acompanharSolicitacao > h4").innerHTML = "Já solicitou o serviço?"
        document.querySelector("#acompanharSolicitacao > p").innerHTML = "Se você já solicitou a troca de titularidade, clique no botão abaixo e acompanhe o status da sua solicitação com o número de protocolo que enviamos por e-mail."
    }
}



if (window.innerWidth <= 1024) {

    if (document.querySelector("#mainContent>div>ng-component>div>div>div.col-md-4.area-extra.mt-0.ajustar-padding>aside")) {
        const oldCard = document.querySelector("#mainContent>div>ng-component>div>div>div.col-md-4.area-extra.mt-0.ajustar-padding>aside")
        const newCard = oldCard.cloneNode(true)
        oldCard.style.display = "none"

        document.querySelector("#mainContent > div > ng-component > div > div > div.col-md-8.area-principal > cg-inicio").insertAdjacentElement("afterend", newCard)
    }
}

// page 2

function actionInButtonInitialSolicitation() {
    if (document.querySelector("#trocaTitularicadeInicio > form > div:nth-child(2) > cg-button > button")) {
        document.querySelector("#trocaTitularicadeInicio > form > div:nth-child(2) > cg-button > button").addEventListener("click", () => {
            document.querySelector(".new-xp-internal h2.text-blue").innerHTML = "Informe o endereço da troca"
            addTextInTitlePageTwo()
            modificationPage2()
        })
    }
}

function addTextInTitlePageTwo() {
    const contentTextPageTwo = `<div class="content-page-two">
        <p>Você deseja ser o titular de um novo endereço? Preencha abaixo os dados do endereço e transfira a titularidade para
        você.</p>
        <p><strong>Dica: Para evitar erro na consulta do endereço tenha em mãos o contrato de compra e venda/locação do imóvel ou outras
        contas de consumo para preencher os dados corretamente.</strong></p>

        <p><span>Consulte o novo endereço para trocar a titularidade:</span></p>
    </div>`


    if (!document.querySelector(".content-page-two")) {
        document.querySelector(".new-xp-internal h2.text-blue").insertAdjacentHTML("afterend", contentTextPageTwo)
    }
}



function modificationPage2() {
    buttonStylePage2()
    stylesTextsPage2()
    buttonPreviousForPageOne()
}


function buttonPreviousForPageOne() {
    document.querySelector("#mainContent > div > ng-component > div > div > div.col-md-8.area-principal > cg-endereco > div > div > form > div.mb-4.d-flex > div:nth-child(1) > cg-button > button").addEventListener("click", () => {
        alterationOwnership()
        alterationCopy()
        alterationAccordion()
        alterationContentCardAside()
        actionInButtonInitialSolicitation()
        removeContentThePageTwo()
    })
}


function removeContentThePageTwo() {
    if (document.querySelector(".content-page-two")) {
        document.querySelector(".content-page-two").remove()
    }
}

function stylesTextsPage2() {
    document.querySelector("#mainContent > div > ng-component > div > div > div.col-md-8.area-principal").style.width = "100%"
    document.querySelector("#mainContent > div > ng-component > div > div > div.col-md-4.area-extra.mt-0.ajustar-padding").style.display = "none"
}

function buttonStylePage2() {
    const button1 = document.querySelector("#mainContent > div > ng-component > div > div > div.col-md-8.area-principal > cg-endereco > div > div > form > div.row > div:nth-child(1) > div > div.flex-row.div-endereco > button")
    document.querySelector("#txtCep").addEventListener("keyup", (e) => {
        if (e.target.classList.contains("has-error")) {

            button1.style.pointerEvents = "none";
            button1.style.backgroundColor = "#C4C4C4"
        } else {
            button1.style.pointerEvents = "all";
            button1.style.backgroundColor = "#7FC241"
        }
    })
}


alterationOwnership()
alterationCopy()
alterationAccordion()
alterationContentCardAside()
actionInButtonInitialSolicitation()