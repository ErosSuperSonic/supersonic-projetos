document.querySelector("#page-block-s1jmi49fb9>div:nth-of-type(3)>div").insertAdjacentHTML("afterbegin", 
`<div class="container-ss">
        <h1>Se investir na bolsa é a sua, nós facilitamos isso para você</h1>

        <ul>
            <li><img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/main/clear/Teste5/check-white.svg">Negocie suas ações de forma rápida e simples</li>
            <li><img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/main/clear/Teste5/check-white.svg">Módulo Day Trade, Swing Trade e Opções</li>
            <li><img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/main/clear/Teste5/check-white.svg">Evolução patrimonial com gráfico interativo</li>
        </ul>

        <div class="container-button">
            <a href="">Quero investir agora</a>
            <p>Abra sua conta 100% online e grátis</p>
        </div>
    </div>
    `
)

document.querySelector("#page-block-s1jmi49fb9>div:nth-of-type(1)").insertAdjacentHTML("beforeend", `
    <div class="depoimento-ss">
        <img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/main/clear/Teste5/imagem.png" alt="">
        <div>
            <p>“Acabei de instalar o novo aplicativo e acessar o Clear Pro pelo meu navegador, parabéns, surpreenderam 😍”</p>
            <span>Matheus Ricardo Hoffmann</span>
            </div>

            <img class="arrow-bottom" src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/main/clear/Teste5/arrow-bottom.svg" alt="">
    </div>
`)


if(window.innerWidth <= 700){
    const iframeYtb = document.querySelector("#element-486")
    const containerSS = document.querySelector(".container-ss")
    const newIframe = iframeYtb.cloneNode(true)
    iframeYtb.style.display = "none"

    containerSS.insertAdjacentElement("beforeend",newIframe)
}


if(window.innerWidth <= 375){
    document.querySelector("section#page-block-s1jmi49fb9 .section-block").style.height = "151vh !important" 
    document.querySelector("#page-block-s1jmi49fb9").style.height = "151vh !important"
}