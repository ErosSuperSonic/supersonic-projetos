try {
    const containerSS = `
<div class="container-SS">
        <h2>Veja <strong>outros serviços</strong> que podem ser <strong>do seu interesse:</strong></h2>
        <a href="https://autoatendimento-qas.comgas.com.br/contas-e-pagamentos" class="itemSS">
            <img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/f9884b83c0506d9f540a9835916b7a7f3db48307/comgas/teste7/2via.svg"
                alt="">
            <span>2ª via da Conta</span>
        </a>

        <a href="https://autoatendimento-qas.comgas.com.br/atualizacaoCadastral" class="itemSS">
            <img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/f9884b83c0506d9f540a9835916b7a7f3db48307/comgas/teste7/attDados.svg"
                alt="">
            <span>Atualizar dados</span>
        </a>

        <a href="https://autoatendimento-qas.comgas.com.br/entregaFatura" class="itemSS">
            <img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/f9884b83c0506d9f540a9835916b7a7f3db48307/comgas/teste7/home.svg"
                alt="">
            <span>Receber a conta no endereço</span>
        </a>

        <a href="https://autoatendimento-qas.comgas.com.br/dataVencimento" class="itemSS">
            <img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/f9884b83c0506d9f540a9835916b7a7f3db48307/comgas/teste7/calender.svg"
                alt="">
            <span>Mudar data de vencimento da conta</span>
        </a>

        <a href="https://autoatendimento-qas.comgas.com.br/analiseConsumoServicos" class="itemSS">
            <img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/f9884b83c0506d9f540a9835916b7a7f3db48307/comgas/teste7/notebook.svg"
                alt="">
            <span>Analisar a Conta de Gás Natural</span>
        </a>

        <a href="https://autoatendimento-qas.comgas.com.br/simulacaoConsumo" class="itemSS">
            <img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/f9884b83c0506d9f540a9835916b7a7f3db48307/comgas/teste7/relogio.svg"
                alt="">
            <span>Simular o Consumo</span>
        </a>

        <a href="https://autoatendimento-qas.comgas.com.br/conhecaSuaFatura" class="itemSS">
            <img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/f9884b83c0506d9f540a9835916b7a7f3db48307/comgas/teste7/conhecaNova.svg"
                alt="">
            <span>Conheça a nova conta</span>
        </a>

        <a href="https://autoatendimento-qas.comgas.com.br/trocaTitularidade" class="itemSS">
            <img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/f9884b83c0506d9f540a9835916b7a7f3db48307/comgas/teste7/trocaTitulo.svg"
                alt="">
            <span>Trocar Titularide</span>
        </a>

        <a href="https://autoatendimento-qas.comgas.com.br/contas-e-pagamentos" class="itemSS">
            <img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/f9884b83c0506d9f540a9835916b7a7f3db48307/comgas/teste7/parcelamento.svg"
                alt="">
            <span>Parcelamento</span>
        </a>

        <a href="https://autoatendimento-qas.comgas.com.br/debitoAutomatico" class="itemSS">
            <img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/f9884b83c0506d9f540a9835916b7a7f3db48307/comgas/teste7/debito.svg"
                alt="">
            <span>Débito Automático</span>
        </a>
    </div>
`





    function addTextInSubtitle() {


        let verifyInterval = false;

        let myInterval = setInterval(() => {
            if (!verifyInterval) {
                if (document.querySelector("p.info-header__subtitulo") && !document.querySelector(".subtitleSS")) {
                    document.querySelector("p.info-header__subtitulo").insertAdjacentHTML("afterend", "<h3 class='subtitleSS'>No nosso sistema consta que você já está recebendo suas contas no seguinte email:</h3>")

                    clearInterval(myInterval)
                    verifyInterval = true

                }
            }

        }, 300)
    }

    function replaceSubtitulo() {

        let verifyInterval = false;
        let myInterval = setInterval(() => {
            if (!verifyInterval) {
                if (document.querySelector("p.info-header__subtitulo")) {
                    document.querySelector("p.info-header__subtitulo").innerHTML = `
                            <p class="textCadastro">Cadastre seu e-mail e passa a receber suas contas virtualmente. Colabore com o meio ambiente reduzindo o uso de papel e
                            aproveite a comodidade de receber suas contas diretamente na sua caixa de entrada. <span class="activeTermos">Visualize os termos de adesão.</span></p>
                            `
                    document.querySelector(".activeTermos").addEventListener("click", () => {
                        document.querySelector("#mainContent > div > cg-fatura-email > div > div.col-xs-12.col-md-8 > section:nth-child(2) > cg-fatura-email-form > form > div:nth-child(2) > div > div > div > a").click()
                    })

                    clearInterval(myInterval)
                    verifyInterval = true

                }
            }

        }, 300)

    }


    function addBlockLinksInContaPorEmail() {

        let verifyInterval = false;

        let myInterval = setInterval(() => {
            if (!verifyInterval) {
                if (document.querySelector(".conta-por-email") && !document.querySelector(".container-SS")) {

                    document.querySelector(".conta-por-email").insertAdjacentHTML("beforeend", containerSS)

                    clearInterval(myInterval)
                    verifyInterval = true
                }
            }

        }, 300)
    }


    replaceSubtitulo()
    addTextInSubtitle()
    addBlockLinksInContaPorEmail()
    
    const root = document.querySelector('body');
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            console.log(mutation.target)
            if (window.location.pathname === '/faturaEletronica') {
                console.log("entrei no fatura eletronica")
                if (mutation.target.classList.contains("slick-track") || mutation.target.classList.contains("ng-tns-0-0") || mutation.target.classList.contains("ng-tns-0-1")) {
                    replaceSubtitulo()
                    addTextInSubtitle()
                    addBlockLinksInContaPorEmail()
                }
            }
        });
    });

    observer.observe(root, {
        childList: true,
        subtree: true,
    });




    // 31268564893
    // 41929241
} catch (e) {
    console.log(e)
}