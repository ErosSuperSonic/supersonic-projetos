const contentSS = `
<div class="container-ss">
      <div class="info-ss-user">
        <div class="container-info-user">
          <div class="details-info-user">
            <p class="tipo"><img src="./carteira.svg"> Tipo: <strong>Conta por e-mail</strong></p>
            <p class="status"><img src="./status.svg"> Status: <strong>Vencida</strong></p>
            <p class="vencido"><img src="./vencimento.svg"> Vencimento: <strong>09/12/2020</strong></p>
          </div>
          <div class="ultima-fatura">
            <div class="chama">
              <img src="./chama.svg" alt="">
              <p>Sua última fatura</p>
            </div>
            <div class="value-fatura">R$ <span>0,00</span></div>
          </div>
        </div>
        <div class="buttons-detalhe-fatura">
          <button><img src="./pagar-agora.svg" alt=""> Pagar agora</button>
          <button><img src="./pdf-image.svg" alt="">PDF da 2ª Via</button>
        </div>
      </div>

      <div class="debito-protestados">
        <h3><img src="./icon-debito.svg" alt="">Débitos protestado(s)</h3>
        <p>Total de <span>R$ 656,04</span> Débitos protestado(s) e/ou negativado(s)</p>
        <button>Consultar</button>
      </div>
    </div>
`
document.querySelector(".row.d-flex.flex-column.flex-md-row.justify-content-end.pb-3").insertAdjacentHTML('beforebegin', )








//Details account


function insertDetailsFatura(){
  const [vencimento, status, tipo, segundaVia] = document.querySelectorAll(
    "ul.last-account-details li"
  );
}

const root = document.querySelector('body');
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if(mutation.target.classList.contains("ng-tns-0-0")){
          insertDetailsFatura()
        }
    });
});

observer.observe(root, {
    childList: true,
    subtree: true,
});

