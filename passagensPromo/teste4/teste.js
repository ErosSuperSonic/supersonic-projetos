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
        }
    } else if (destinoFrase.includes("Passagens aéreas para o ")) {
        newString = destinoFrase.replace("Passagens aéreas para o ", "")
        if (newString.includes("!")) {
            finalString = newString.replace("!", "")
        }
    } else if (destinoFrase.includes("Passagens aéreas para a ")) {
        newString = destinoFrase.replace("Passagens aéreas para a ", "")
        if (newString.includes("!")) {
            finalString = newString.replace("!", "")
        }
    } else if (destinoFrase.includes("Passagens aéreas para ")) {
        newString = destinoFrase.replace("Passagens aéreas para ", "")
        if (newString.includes("!")) {
            finalString = newString.replace("!", "")
        }
    } else if (destinoFrase.includes("Melhores passagens aéreas para ")) {
        newString = destinoFrase.replace("Melhores passagens aéreas para ", "")
        if (newString.includes("!")) {
            finalString = newString.replace("!", "")
        }
    } else if (destinoFrase.includes("Passagens aéreas para visitar ")) {
        newString = destinoFrase.replace("Passagens aéreas para visitar ", "")
        if (newString.includes("!")) {
            finalString = newString.replace("!", "")
        }
    } else if (destinoFrase.includes("Passagens aéreas para visitar o ")) {
        newString = destinoFrase.replace("Passagens aéreas para visitar o ", "")
        if (newString.includes("!")) {
            finalString = newString.replace("!", "")
        }
    } else if (destinoFrase.includes("Passagens aéreas para visitar a ")) {
        newString = destinoFrase.replace("Passagens aéreas para visitar a", "")
        if (newString.includes("!")) {
            finalString = newString.replace("!", "")
        }
    }
    return `<p class="titleCard"><strong>Melhores preços</strong> de passagens para ${finalString} com até <span style="color: #AFE74A">35% de desconto!</span></p>`;

}