function adicionarSelo1() {
    const selo1 = `
    <div class="selo1">
        <p>Passagens com até</p>
        <img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/80f422147a6601aa549a08fa9d071602ae46ad60/passagensPromo/teste5/selo1.svg" alt="">
    </div>
`
    document.querySelector("#searchframe > div > div.sc-avest.eAxniz.THIN > div.sc-fHeRUh.cKYqQR > div.sc-dFtzxp.hkRtkq").insertAdjacentHTML("afterbegin", selo1)
}




function adicionarSectionSelos() {

    const sectionSelos = `
            <section class="sectionSS">
                    <div class="item">
                        <img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/main/passagensPromo/teste5/reclameaqui.png" alt="">
                        <p><span>O melhor atendimento</span> no setor de viagens</p>
                    </div>
                    <div class="item">
                        <img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/82715de55387292745a0babfb72590adadb99eac/passagensPromo/teste5/mapa.svg" alt="">
                        <p><span>Desconto</span> nos destinos mais procurados pelos brasileiros</p>
                    </div>
                    <div class="item">
                        <img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/82715de55387292745a0babfb72590adadb99eac/passagensPromo/teste5/mulher.svg" alt="">
                        <p><span>+171 mil passageiros economizaram</span> ao viajar conosco em 2021</p>
                    </div>
                    <div class="item">
                        <img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/82715de55387292745a0babfb72590adadb99eac/passagensPromo/teste5/mao.svg" alt="">
                        <p><span>Diversas formas</span> de pagamentos e parcelamentos</p>
                    </div>
                </section>
    `

    if (!document.querySelector(".sectionSS")) {
        document.querySelector(".area-destaque__ofertas").insertAdjacentHTML("beforebegin", sectionSelos)
    }
}



const root = document.querySelector('#area-destaque');
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (window.innerWidth <= 768) {
            if (mutation.target.classList.contains("THIN")) {
                adicionarSelo1()
                adicionarSectionSelos()
            } else {
                adicionarSectionSelos();
            }
        }

    });
});

observer.observe(root, {
    childList: true,
    subtree: true,
});



adicionarSectionSelos()

if (window.innerWidth < 768) {
    adicionarSelo1()
}


document.querySelector(".banner__call--description").innerHTML


const texto = document.querySelector(".banner__call--description")
const newTexto = texto.innerHTML.replace("de desconto", '<strong style="white-space: nowrap;">de desconto</strong>')
texto.innerHTML = newTexto