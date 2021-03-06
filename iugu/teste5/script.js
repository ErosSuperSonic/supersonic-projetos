try {
    //Alterando titulo
    document.querySelector(".title.rich-text-content h1").innerHTML = "Tecnologia para gestão de pagamentos <strong>completa, flexível e automatizada</strong>"

    //Mudando copy

    document.querySelector(".subtitle.rich-text-content").innerHTML = "Para marketplace, e-commerce ou qualquer negócio online. Gestão financeira fácil e completa, que otimiza processos e torna sua empresa uma potência."


    const sectionDesktop = `
<section class="dobraCardsSS">
        <div class="containerSS">
            <div class="title-ss">
                <h2>Veja alguns exemplos de como a iugu pode te ajudar</h2>

            </div>

            <div class="cardsSS">
                <div class="item">
                    <img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/main/iugu/teste5/images/item1.png"
                        alt="Comissionamento de pagamentos para marketplaces">
                    <h3>Comissionamento de pagamentos para marketplaces</h3>
                    <p>Divisão de pagamentos entre seus parceiros de forma ágil e segura, sem bitributação e impostos
                        que não são do seu
                        negócio.</p>
                </div>

                <div class="item">
                    <img src="https://github.com/ErosSuperSonic/supersonic-projetos/blob/main/iugu/teste5/images/item2.png?raw=true"
                        alt="Automatização de processos e cobranças recorrentes">
                    <h3>Automatização de processos e cobranças recorrentes</h3>
                    <p>Ganhe praticidade com as nossas funções de automatização de processos e cobranças únicas e
                        recorrentes. Customize os
                        fluxos da maneira que quiser.
                    </p>
                </div>

                <div class="item">
                    <img src="https://github.com/ErosSuperSonic/supersonic-projetos/blob/main/iugu/teste5/images/item3.png?raw=true"
                        alt="API customizável e bem documentada">
                    <h3>API customizável e bem documentada</h3>
                    <p>Com nossa API, você pode personalizar as ferramentas conforme às necessidades do seu negócio.
                        Poupe tempo com as
                        automações e ganhe eficiência na sua operação financeira.
                    </p>
                </div>
            </div>


            <div class="cardsSS cardForActive">
                <div class="flexContainer">
                    <div class="item">
                        <img src="https://github.com/ErosSuperSonic/supersonic-projetos/blob/main/iugu/teste5/images/item4.png?raw=true"
                            alt="Régua de comunicação com clientes">
                        <h3>Régua de comunicação com clientes</h3>
                        <p>Reduza custos com inadimplência com a nossa ferramenta de comunicados de cobrança via e-mail
                            e SMS. Você ainda
                            pode
                            personalizar os ciclos de cobrança e os juros.</p>
                    </div>

                    <div class="item">
                        <img src="https://github.com/ErosSuperSonic/supersonic-projetos/blob/main/iugu/teste5/images/item5.png?raw=true"
                            alt="Dashboard transparente e em tempo real">
                        <h3>Dashboard transparente e em tempo real</h3>
                        <p>Acelere sua tomada de decisão com o nosso dashboard que mostra todas as suas motivações
                            financeiras em um só lugar.</p>
                    </div>

                    <div class="item">
                        <img src="https://github.com/ErosSuperSonic/supersonic-projetos/blob/main/iugu/teste5/images/item6.png?raw=true"
                            alt="Gateway de pagamentos para e-commerce">
                        <h3>Gateway de pagamentos para e-commerce</h3>
                        <p>Transações rápidas e segura para você receber pagamentos por boleto, cartão de crédito e PIX
                            personalizados com a sua
                            marca em um checkout transparente..
                        </p>
                    </div>
                </div>


                <div class="btns">
                    <button class="falarIugu open-chat">
                        Falar com a iugu
                    </button>
                    <button class="planos verPlanos">
                        Ver planos e preços
                    </button>
                </div>
            </div>
            <div class="verMais">
                <button>
                    <span>Ver mais</span>
                    <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path  d="M1 1L9 9L17 1" stroke="#383838" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </button>

            </div>
        </div>
    </section>`

    const sectionMobile = `
    <section class="dobraMobile">
        <h2>Veja alguns exemplos de como a iugu pode te ajudar:</h2>

        <div class="item">
            <img
                src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/10253f8c99c339ef66e501e52ff891b95cb3e348/iugu/teste5/images/icone1.svg">
            <h3>Comissionamento de pagamentos para marketplaces</h3>
            <p>Divisão de pagamentos entre seus parceiros de forma ágil e segura, sem bitributação e impostos que não
                são do seu
                negócio.</p>
        </div>

        <div class="item">
            <img
                src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/10253f8c99c339ef66e501e52ff891b95cb3e348/iugu/teste5/images/icone2.svg">
            <h3>Automatização de processos e cobranças recorrentes</h3>
            <p>Ganhe praticidade com as nossas funções de automatização de processos e cobranças únicas e recorrentes.
                Customize os
                fluxos da maneira que quiser.</p>
        </div>
        <div class="item">
            <img src ="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/3425534cb559c240e18874571f56d17d05548683/iugu/teste5/images/icone3.svg" >
            <h3>API customizável e bem documentada</h3>
            <p>Com nossa API, você pode personalizar as ferramentas conforme às necessidades do seu negócio. Poupe tempo
                com as
                automações e ganhe eficiência na sua operação financeira.
            </p>
        </div>

        <div class="item">
            <img
                src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/10253f8c99c339ef66e501e52ff891b95cb3e348/iugu/teste5/images/icone4.svg">
            <h3>Régua de comunicação com clientes</h3>
            <p>Reduza custos com inadimplência com a nossa ferramenta de comunicados de cobrança via e-mail e SMS. Você
                ainda pode
                personalizar os ciclos de cobrança e os juros.
            </p>
        </div>

        <div class="item">
            <img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/10253f8c99c339ef66e501e52ff891b95cb3e348/iugu/teste5/images/icone5.svg">
            <h3>Dashboard transparente e em tempo real</h3>
            <p>Acelere sua tomada de decisão com o nosso dashboard que mostra todas as suas motivações financeiras em um
                só lugar.</p>
        </div>


        <div class="item">
            <img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/10253f8c99c339ef66e501e52ff891b95cb3e348/iugu/teste5/images/icone6.svg">
            <h3>Gateway de pagamentos para
                e-commerce
            </h3>
            <p>Transações rápidas e segura para você receber pagamentos por boleto, cartão de crédito e PIX
                personalizados com a sua
                marca em um checkout transparente.
            </p>
        </div>

        <div class="btnsMobile">
            <button class="verPlanos">Ver planos</button>
            <button class="falarIugu open-chat">
                Falar com a iugu
            </button>
        </div>
    </section>
`





    const novosItensPrimeiraDobra = `
        <div class="container-ss">
        <div class="list-ss">
            <div>
                <li>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 11.5L10 14.5L15 8.5" stroke="#383838" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path
                            d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                            stroke="#383838" stroke-width="1.5" />
                    </svg>

                    <p>Soluções de cobranças únicas e recorrentes</p>
                </li>

                <li>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 11.5L10 14.5L15 8.5" stroke="#383838" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path
                            d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                            stroke="#383838" stroke-width="1.5" />
                    </svg>

                    <p>Emissão automática e gestão de faturas</p>
                </li>
            </div>


            <div>
                <li>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 11.5L10 14.5L15 8.5" stroke="#383838" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path
                            d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                            stroke="#383838" stroke-width="1.5" />
                    </svg>

                    <p>Diversos meios de pagamento: boleto, cartão de crédito e PIX</p>
                </li>

                <li>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 11.5L10 14.5L15 8.5" stroke="#383838" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path
                            d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                            stroke="#383838" stroke-width="1.5" />
                    </svg>

                    <p>Comissionamento para parceiros</p>
                </li>
            </div>
        </div>
        <button class="verPlanos">Ver planos</button>
    </div>
`
    document.querySelector("div.content-wrapper").insertAdjacentHTML("beforeend", novosItensPrimeiraDobra)



    //ativando dobra


    if (!document.querySelector(".dobraCardsSS") && window.innerWidth >= 768) {
        document.querySelector("section.hero-with-light-background").insertAdjacentHTML("afterend", sectionDesktop)

        const btnVerMais = document.querySelector(".verMais button")
        btnVerMais.addEventListener("click", () => {
            document.querySelector(".cardForActive").classList.toggle("active")
            btnVerMais.classList.toggle("active")

            if (btnVerMais.classList.contains("active")) {
                btnVerMais.querySelector("span").innerText = "Ver menos"
            } else {
                btnVerMais.querySelector("span").innerText = "Ver mais"
            }
        })

    } else {
        document.querySelector("section.hero-with-light-background").insertAdjacentHTML("afterend", sectionMobile)
    }


    const openChatBtns = document.querySelectorAll(".open-chat")
    openChatBtns.forEach((element) => {
        element.addEventListener("click", () => {
            window.HubSpotConversations.widget.open()
        })
    })

    const verPlanos = document.querySelectorAll(".verPlanos")
    verPlanos.forEach((button) => {
        button.addEventListener("click", () => {
            window.location.href = "https://www.iugu.com/planos/"
        })
    })




} catch (e) {
    console.log(e)
}