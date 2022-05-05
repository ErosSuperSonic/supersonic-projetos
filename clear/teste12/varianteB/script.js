function trocarCheckedForArrow() {
    let contador = 0
    setInterval(() => {
        contador = contador + 1
        document.querySelectorAll(".card-platform__list-item svg").forEach((cheked) => {
            cheked.outerHTML = `<svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.7002 11.0582L14.2002 6.02908L8.7002 1" stroke="#1061FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M13.1 6.02905H1" stroke="#1061FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        `
        })

        if (contador === 40) {
            clearInterval()
        }
    }, 300);

}

function mudandoPrice() {
    document.querySelectorAll(".card-platform__price").forEach((el, index) => {

        if (index === 0) {
            el.innerHTML = "Grátis*"
        } else if (index === 1) {
            el.innerHTML = `<s>R$ 9,90/mês</s> <span>Grátis*</span>`

        } else if (index === 2) {
            el.innerHTML = `<s>R$ 9,90/mês</s> <span>Grátis*</span>`

        }
    })
}

function adicionarPrincipaisRecursosInCard() {
    document.querySelectorAll("soma-card > ul").forEach((ul, index) => {
        ul.insertAdjacentHTML("beforebegin", `<span class="principaisRecursos">Principais recursos</span>`)
    })
}


function adicionarMicroCopy() {
    document.querySelectorAll(".swiper-slide").forEach((el, index) => {
        if (index === 4) {
            el.insertAdjacentHTML("afterbegin", `<p class="subcopySS">*Conta real é gratuita. Conta demo possui o valor de R$ 9,90 mensal</p>`)

            if (window.innerWidth >= 1100) {
                el.querySelector(".subcopySS").style.bottom = "-27px"
            }
        } else if (index === 5) {
            el.insertAdjacentHTML("afterbegin", `<p class="subcopySS">*Gratuito se operar pelo menos 1 minicontrato ao mês e com RLP ativo, senão o preço original do plano é aplicado.</p>`)


        } else if (index === 6) {
            el.insertAdjacentHTML("afterbegin", `<p class="subcopySS">*Gratuito se operar pelo menos 1 minicontrato ao mês e com RLP ativo, senão o preço original do plano é aplicado.</p>`)
            if (window.innerWidth >= 1100) {
                el.querySelector(".subcopySS").style.bottom = "-38px"
            }
        }
    })
}


try {
    mudandoPrice()
    trocarCheckedForArrow()
    adicionarPrincipaisRecursosInCard()
    adicionarMicroCopy()
} catch (e) {
    console.error(e)
}