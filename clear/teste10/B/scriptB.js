const myConteudo = ` <div class="container-ss">
        <div class="logo">
            <img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/main/clear/teste10/logotipo.png"
                alt="" srcset="">
        </div>
    
        <div class="container-text">
            <div class="coluna1TextSS">
                <p class="data">De 28/03 a 06/05</p>
                <p class="concorra">Concorra a mais de</p>
                <p class="valor">R$400 mil</p>
                <p class="emPremios">em prêmios*</p>
            </div>
    
            <div class="coluna2TextSS">
                <p>Abra sua conta e prove que <span>você é o melhor trader do Brasil.</span></p>
            </div>
        </div>
        <div class="copy">
            <p>Período de inscrição: de 14.03.2022 às 12h ao dia 05.05.2022. Consulte os regulamentos completos e
                Certificados de
                Autorização no site https://www.ligaclear.com.br/regulamento.aspx
                *Soma dos prêmios distribuídos ao longo de todo o período do concurso.
                *Premiação entregue em carteira de investimento com cotas do Tesouro Direto Selic*.</p>
        </div>
    </div>`

document.querySelector(".hero__container").insertAdjacentHTML("afterbegin", myConteudo)