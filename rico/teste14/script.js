let buttonsContainer = `
<div class="container-ss-buttons">
            <button>Todos</button>
            <button>Renda Fixa</button>
            <button>Renda variável</button>
            <button>Outros</button>
        </div>
`

try {
    //Adicionando o texto Conheça os investimentos na segunda dobra
    document.querySelector(".tabs-default").insertAdjacentHTML("beforebegin", `<h3 class="conheca-ss">Conheça os investimentos</h3>`)
    document.querySelector(".conheca-ss").insertAdjacentHTML("afterend", buttonsContainer)


    //Adicionando o texto Renda fixa nos cards
    document.querySelectorAll("section.invista .item h3").forEach((h3Card) => {
        h3Card.insertAdjacentHTML("beforebegin", `<span class="renda-ss">Renda fixa</span>`)
    })

    //Adicionando o botão ver mais
    document.querySelectorAll("section.invista .item a").forEach((linkCard) => {
        linkCard.insertAdjacentHTML("beforeend", `<a href="${linkCard.href}" class="verMais-ss">Ver Mais</span>`)
    })


    if (window.innerWidth <= 1100) {


        let verifyInterval = false
        let myInterval = setInterval(() => {
            const containerCard = document.querySelectorAll('[aria-live="polite"].slick-list.draggable')[1]
            if (!verifyInterval) {
                if (containerCard) {
                    containerCard.style.height = "auto";
                    myInterval = true;
                    clearInterval(myInterval)

                    if (document.querySelectorAll(".slick-track")) {
                        document.querySelectorAll(".slick-track").forEach((el) => {
                            el.style.width = "auto"
                        })
                    }
                    if (document.querySelectorAll(".slick-dots")) {
                        document.querySelectorAll(".slick-dots").forEach((el) => {
                            el.style.display = "none"
                        })
                    }
                }
            }
        }, 300)
    }

} catch (e) {
    console.log(e)
}


function orderButtonColors() {
    document.querySelectorAll(".tabs-default a").forEach((a, indexA) => {
        document.querySelectorAll(".container-ss-buttons button").forEach((button, indexB) => {
            if (indexA === indexB) {
                if (a.classList.contains("slick-current")) {
                    button.classList.add("slick-current");
                } else {
                    button.classList.remove("slick-current");
                }
            }
        })
    })

    if (window.innerWidth <= 1100) {
        if (document.querySelectorAll(".slick-track")) {
            document.querySelectorAll(".slick-track").forEach((el) => {
                el.style.width = "auto"
            })
        }
        if (document.querySelectorAll(".slick-dots")) {
            document.querySelectorAll(".slick-dots").forEach((el) => {
                el.style.display = "none"
            })
        }
    }

}

document.querySelectorAll(".container-ss-buttons button").forEach((button, indexButton) => {
    document.querySelectorAll(".tabs-default a").forEach((a, indexA) => {
        if (indexButton == indexA) {
            button.addEventListener("click", () => {
                a.click()
                orderButtonColors()
            })
        }

    })

})

orderButtonColors()