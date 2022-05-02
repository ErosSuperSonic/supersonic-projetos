//Mudando da pesquisa
document.querySelector("#mobile-title").innerHTML = "<p>Encontre passagens aéreas com até <span>35% de desconto!</span></p>"
const setaNavegacional = `
    <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.187 0.625L5.49951 5.3125L0.812012 0.625" stroke="#98989B" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

`


const myPopup = `
        <div class="container-ss-cta">
        <p><span>Economize até 35%</span> na sua passagem agora</p>
        <button>Pesquisar</button>
    </div>
    `


//Adicionando seta na parte de cidaddes
document.querySelectorAll(".comp-newshortcode__header__selection").forEach((el) => {
    el.insertAdjacentHTML("beforeend", setaNavegacional)
})


document.querySelector(".container_cta").insertAdjacentHTML("afterend", myPopup)

document.querySelector(".container-ss-cta button").addEventListener("click", () => {
    document.querySelectorAll(".box_cta button")[1].click()

})

//Adicionando frase no fim do card
document.querySelectorAll(".comp-newshortcode__item").forEach((card) => {
    card.insertAdjacentHTML("beforeend", "<p class='fraseCard'>Garanta o menor preço para esta data antes que acabe.</p>")
})


//Adicionando frase depois do botão de
document.querySelectorAll(".box-search__container.simple")[1].insertAdjacentHTML("beforeend", "<div class='pesquiseSS'><span>Pesquise de forma rápida e sem compromisso.</span></div>")


//mudando titulo do card de compras

// document.querySelector(".comp-newshortcode__title").innerHTML = `<p class="titleCard"><strong>Melhores preços</strong> de passagens para São Paulo com até <span style="color: #AFE74A">35% de desconto!</span></p>`




//=========  Adicionando dias ===============
let mes;
let dia;
let ano = new Date().getFullYear()


document.querySelectorAll(".arr_date").forEach((span) => {
    const myString = span.innerText
    span.style.fontSize = "12px";
    span.style.color = "#484848";

    const myArrayStringDates = myString.split(" ")

    dia = Number(myArrayStringDates[0])

    setarDia(dia, ano, myArrayStringDates, span)
})

document.querySelectorAll(".dep_date").forEach((span) => {
    const myString = span.innerText
    span.style.fontSize = "12px";
    span.style.color = "#484848";

    const myArrayStringDates = myString.split(" ")

    dia = Number(myArrayStringDates[0])

    setarDia(dia, ano, myArrayStringDates, span)
})


function setarDia(dia, ano, myArrayStringDates, span) {
    let diaConsumido;

    if (myArrayStringDates[1] === "Jan") {
        diaConsumido = new Date(`January ${dia}, ${ano}`).getDay()
    } else if (myArrayStringDates[1] === "Fev") {
        diaConsumido = new Date(`February ${dia}, ${ano}`).getDay()
    } else if (myArrayStringDates[1] === "Mar") {
        diaConsumido = new Date(`March ${dia}, ${ano}`).getDay()
    } else if (myArrayStringDates[1] === "Abr") {
        diaConsumido = new Date(`April ${dia}, ${ano}`).getDay()
    } else if (myArrayStringDates[1] === "Mai") {
        diaConsumido = new Date(`May ${dia}, ${ano}`).getDay()
    } else if (myArrayStringDates[1] === "Jun") {
        diaConsumido = new Date(`June ${dia}, ${ano}`).getDay()
    } else if (myArrayStringDates[1] === "Jul") {
        diaConsumido = new Date(`July ${dia}, ${ano}`).getDay()
    } else if (myArrayStringDates[1] === "Ago") {
        diaConsumido = new Date(`August ${dia}, ${ano}`).getDay()
    } else if (myArrayStringDates[1] === "Set") {
        diaConsumido = new Date(`September ${dia}, ${ano}`).getDay()
    } else if (myArrayStringDates[1] === "Out") {
        diaConsumido = new Date(`October ${dia}, ${ano}`).getDay()
    } else if (myArrayStringDates[1] === "Nov") {
        diaConsumido = new Date(`November ${dia}, ${ano}`).getDay()
    } else if (myArrayStringDates[1] === "Dez") {
        diaConsumido = new Date(`December ${dia}, ${ano}`).getDay()
    }


    addDiaInCard(diaConsumido, span)
}

function addDiaInCard(diaConsumido, span) {
    if (diaConsumido === 0) {
        span.insertAdjacentHTML("beforeend", "<span style='font-size: 12px;'>Domingo</span>")
    } else if (diaConsumido === 1) {
        span.insertAdjacentHTML("beforeend", "<span style='font-size: 12px;'>Segunda-Feira</span>")
    } else if (diaConsumido === 2) {
        span.insertAdjacentHTML("beforeend", "<span style='font-size: 12px;'>Terça-Feira</span>")
    } else if (diaConsumido === 3) {
        span.insertAdjacentHTML("beforeend", "<span style='font-size: 12px;'>Quarta-Feira</span>")

    } else if (diaConsumido === 4) {
        span.insertAdjacentHTML("beforeend", "<span style='font-size: 12px;'>Quinta-Feira</span>")
    } else if (diaConsumido === 5) {
        span.insertAdjacentHTML("beforeend", "<span style='font-size: 12px;'>Sexta-Feira</span>")
    } else if (diaConsumido === 6) {
        span.insertAdjacentHTML("beforeend", "<span style='font-size: 12px;'>Sábado</span>")
    }
}








//Filtrando texto do card azul
document.querySelectorAll(".comp-newshortcode__title").forEach((destinoFrase) => {
    const myString = setarString(destinoFrase.innerText)
    destinoFrase.innerHTML = myString
})

function setarString(destinoFrase) {
    let newString = ""
    let finalString = ""
    if (destinoFrase.includes("Passagens aéreas imperdíveis para ")) {
        newString = destinoFrase.replace("Passagens aéreas imperdíveis para ", "")
        if (newString.includes("!")) {
            finalString = newString.replace("!", "")
        } else {
            finalString = newString
        }
    } else if (destinoFrase.includes("Passagens aéreas para o ")) {
        newString = destinoFrase.replace("Passagens aéreas para o ", "")
        if (newString.includes("!")) {
            finalString = newString.replace("!", "")
        } else {
            finalString = newString
        }
    } else if (destinoFrase.includes("Passagens aéreas para a ")) {
        newString = destinoFrase.replace("Passagens aéreas para a ", "")
        if (newString.includes("!")) {
            finalString = newString.replace("!", "")
        } else {
            finalString = newString
        }
    } else if (destinoFrase.includes("Passagens aéreas para ")) {
        newString = destinoFrase.replace("Passagens aéreas para ", "")
        if (newString.includes("!")) {
            finalString = newString.replace("!", "")
        } else {
            finalString = newString
        }
    } else if (destinoFrase.includes("Melhores passagens aéreas para ")) {
        newString = destinoFrase.replace("Melhores passagens aéreas para ", "")
        if (newString.includes("!")) {
            finalString = newString.replace("!", "")
        } else {
            finalString = newString
        }
    } else if (destinoFrase.includes("Passagens aéreas para visitar ")) {
        newString = destinoFrase.replace("Passagens aéreas para visitar ", "")
        if (newString.includes("!")) {
            finalString = newString.replace("!", "")
        } else {
            finalString = newString
        }
    } else if (destinoFrase.includes("Passagens aéreas para visitar o ")) {
        newString = destinoFrase.replace("Passagens aéreas para visitar o ", "")
        if (newString.includes("!")) {
            finalString = newString.replace("!", "")
        } else {
            finalString = newString
        }
    } else if (destinoFrase.includes("Passagens aéreas para visitar a ")) {
        newString = destinoFrase.replace("Passagens aéreas para visitar a", "")
        if (newString.includes("!")) {
            finalString = newString.replace("!", "")
        } else {
            finalString = newString
        }
    } else if (destinoFrase.includes("Passagens imperdíveis para ")) {
        newString = destinoFrase.replace("Passagens imperdíveis para ", "")
        if (newString.includes("!")) {
            finalString = newString.replace("!", "")
        } else {
            finalString = newString
        }
    } else if (destinoFrase.includes("Melhores passagens aéreas nacionais aqui!")) {
        newString = destinoFrase.replace("Melhores passagens aéreas nacionais aqui!", "lugares nacionais")
        if (newString.includes("!")) {
            finalString = newString.replace("!", "")
        } else {
            finalString = newString
        }
    } else if (destinoFrase.includes("Melhores passagens aéreas internacionais aqui!")) {
        newString = destinoFrase.replace("Melhores passagens aéreas nacionais aqui!", "lugares internacionais")
        if (newString.includes("!")) {
            finalString = newString.replace("!", "")
        } else {
            finalString = newString
        }
    } else if (destinoFrase.includes("Viaje para ")) {
        newString = destinoFrase.replace("Viaje para ", "")
        if (newString.includes("aproveitando as melhores passagens aéreas!")) {
            finalString = newString.replace("aproveitando as melhores passagens aéreas!", "")
        } else {
            finalString = newString
        }
    } else if (destinoFrase.includes("Passagens aéreas promocionais para ")) {
        newString = destinoFrase.replace("Passagens aéreas promocionais para ", "")
        if (newString.includes("!")) {
            finalString = newString.replace("!", "")
        } else {
            finalString = newString
        }
    } else {
        let pais = document.querySelector(".banner__titulo").innerText
        let resultado = pais.substring(pais.indexOf(0), pais.indexOf(":"));
        finalString = resultado
    }
    return `<p class="titleCard"><strong>Melhores preços</strong> de passagens para ${finalString} com até <span style="color: #AFE74A">35% de desconto!</span></p>`;

}



const arrow = `<svg id="arrowSS" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.187 5.625L7.49951 10.3125L2.81201 5.625" stroke="#98989B" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
//Adicionando arrow in seleciar cidade

document.querySelector(".comp-newshortcode__header")

let verifyExistsContainerArrow = false;
let verifyContainerForArrow = setInterval(() => {
    if (!verifyExistsContainerArrow) {
        let containerArrow = document.querySelectorAll(".comp-newshortcode__header")

        if (containerArrow) {
            containerArrow.forEach((container) => {
                container.style.position = "relative"
                container.insertAdjacentHTML("beforeend", arrow)
            })
            clearInterval(verifyContainerForArrow)
            verifyExistsContainerArrow = true
        }
    }
}, 300)


