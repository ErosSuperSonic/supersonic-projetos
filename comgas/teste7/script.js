const containerSS = `
<div class="container-SS">
        <a href="#" class="itemSS">
            <img src="./2via.png" alt="">
            <span>2ª via da Conta</span>
        </a>
    </div>
`

document.querySelector("#mainContent > div > cg-fatura-email > div > div.col-md-4.col-xs-12 > cg-oferta-servico > div > h1").insertAdjacentHTML("afterend", containerSS)