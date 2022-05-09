// document.querySelector("#mainContent > div > cg-fatura-email > div > div.col-md-4.col-xs-12.ng-star-inserted > cg-oferta-servico > div > div:nth-child(2)").style.display = "none";

// const containerSS = `
//     <div class="container-SS">
//         <a href="#" class="itemSS">
//             <img src="https://github.com/ErosSuperSonic/supersonic-projetos/blob/main/comgas/teste7/2via.png?raw=true" alt="">
//             <span>2ª via da Conta</span>
//         </a>
//     </div>
// `

// document.querySelector("#mainContent > div > cg-fatura-email > div > div.col-md-4.col-xs-12 > cg-oferta-servico > div > h1").insertAdjacentHTML("afterend", containerSS)



document.querySelector("p.info-header__subtitulo").innerHTML = `
<p class="textCadastro">Cadastre seu e-mail e passa a receber suas contas virtualmente. Colabore com o meio ambiente reduzindo o uso de papel e
    aproveite a comodidade de receber suas contas diretamente na sua caixa de entrada. <span class="activeTermos">Visualize os termos de adesão.</span></p>
`
document.querySelector(".activeTermos").addEventListener("click", () => {
    document.querySelector("#mainContent > div > cg-fatura-email > div > div.col-xs-12.col-md-8 > section:nth-child(2) > cg-fatura-email-form > form > div:nth-child(2) > div > div > div > a").click()
})



document.querySelector("p.info-header__subtitulo").insertAdjacentHTML("afterend", "<h3 class='subtitleSS'>No nosso sistema consta que você já está recebendo suas contas no seguinte email:</h3>")