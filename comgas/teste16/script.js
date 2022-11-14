//Details account

function insertDetailsFatura() {
  const [vencimento, status, tipo, segundaVia] = document.querySelectorAll(
    "ul.last-account-details li"
  );

  const vencimentoText = vencimento.querySelector("strong").innerText;
  const statusText = status.querySelector("strong").innerText;
  const tipoText = tipo.querySelector("strong").innerText;
  const lastAccount = document
    .querySelector(".last-account h4")
    .innerText.replace("R$", "");

  const contentSS = `
  <div class="container-ss">
        <div class="info-ss-user">
          <div class="container-info-user">
            <div class="details-info-user">
              <p class="tipo"><img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/c8b5fdd641d67f395930281cc80d5f9c3eecb103/comgas/teste16/carteira.svg"> Tipo: <strong>${tipoText}</strong></p>
              <p class="status"><img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/c8b5fdd641d67f395930281cc80d5f9c3eecb103/comgas/teste16/status.svg"> Status: <strong>${statusText}</strong></p>
              <p class="vencido"><img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/c8b5fdd641d67f395930281cc80d5f9c3eecb103/comgas/teste16/vencimento.svg"> Vencimento: <strong>${vencimentoText}</strong></p>
            </div>
            <div class="ultima-fatura">
              <div class="chama">
                <img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/c8b5fdd641d67f395930281cc80d5f9c3eecb103/comgas/teste16/chama.svg" alt="">
                <p>Sua última fatura</p>
              </div>
              <div class="value-fatura">R$ <span>${lastAccount.trim()}</span></div>
            </div>
          </div>
          <div class="buttons-detalhe-fatura">
            <button><img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/c8b5fdd641d67f395930281cc80d5f9c3eecb103/comgas/teste16/pagar-agora.svg" alt=""> Pagar agora</button>
            <button class="segundaVia"><img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/c8b5fdd641d67f395930281cc80d5f9c3eecb103/comgas/teste16/segunda-via.svg" alt="">PDF da 2ª Via</button>
          </div>
        </div>
  
        <div class="debito-protestados">
          <h3><img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/c8b5fdd641d67f395930281cc80d5f9c3eecb103/comgas/teste16/icon-debito.svg" alt="">Débitos protestado(s)</h3>
          <p>Total de <span>R$ 656,04</span> Débitos protestado(s) e/ou negativado(s)</p>
          <button>Consultar</button>
        </div>
      </div>
  `;

  if (!document.querySelector(".container-ss")) {
    document
      .querySelector(
        ".row.d-flex.flex-column.flex-md-row.justify-content-end.pb-3"
      )
      .insertAdjacentHTML("beforebegin", contentSS);
  }
  if (status.querySelector("strong").innerText !== "vencida") {
    document.querySelector(".container-ss").classList.add("vencida");
  }

  document.querySelector(".segundaVia").addEventListener("click", () => {
    segundaVia.querySelector("span").click();
  });
}

function redirectItens() {
  //MOver o informar leitura
  document
    .querySelector(".row.quick-access-line")
    .insertAdjacentElement(
      "beforebegin",
      document.querySelector("cg-portal-cliente-informar-leitura.p-4.p-md-0")
    );

  //Mudando banner
  document
    .querySelectorAll(".col-md-4.tour-guide-item-inativo")[1]
    .insertAdjacentElement(
      "afterend",
      document.querySelector(".col-md-4.residential-banner-container")
    );
}
const root = document.querySelector("body");
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.target.classList.contains("ng-tns-0-0")) {
      insertDetailsFatura();
      redirectItens();
    }
  });
});

observer.observe(root, {
  childList: true,
  subtree: true,
});
