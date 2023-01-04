//Details account

function insertDetailsFatura() {
  const [vencimento, status, tipo, segundaVia] = document.querySelectorAll(
    "ul.last-account-details li"
  );

  let vencimentoText = "";
  let statusText = "";
  let tipoText = "";
  let lastAccount = "";
  let totalDebitos = "";
  if (vencimento.querySelector("strong").innerText) {
    vencimentoText = vencimento.querySelector("strong").innerText;
  }
  if (status.querySelector("strong").innerText) {
    statusText = status.querySelector("strong").innerText;
  }
  if (tipo.querySelector("strong").innerText) {
    tipoText = tipo.querySelector("strong").innerText;
  }
  if (document.querySelector(".last-account h4").innerText.replace("R$", "")) {
    lastAccount = document
      .querySelector(".last-account h4")
      .innerText.replace("R$", "");
  }
  if (document.querySelector("strong.total-debitos__valor")) {
    totalDebitos =
      document
        .querySelector("strong.total-debitos__valor")
        .innerText.replace("R$", "")
        .trim() || "";
  }

  const contentSS = `
  <div class="container-ss">
  <h1><img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/a1b3868febf85caedb361384ec341730ca4e0b14/comgas/teste16/detalhes-fatura.svg" alt="" /> Detalhes da Fatura</h1>
  <div class="container-ss-2">
    <div class="info-ss-user">
      <div class="container-info-user">
        <div class="details-info-user">
          <p class="tipo">
            <img
              src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/c8b5fdd641d67f395930281cc80d5f9c3eecb103/comgas/teste16/carteira.svg"
            />
            Tipo: <strong>${tipoText}</strong>
          </p>
          <p class="status">
            <img
              src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/c8b5fdd641d67f395930281cc80d5f9c3eecb103/comgas/teste16/status.svg"
            />
            Status: <strong>${statusText}</strong>
          </p>
          <p class="vencido">
            <img
              src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/c8b5fdd641d67f395930281cc80d5f9c3eecb103/comgas/teste16/vencimento.svg"
            />
            Vencimento: <strong>${vencimentoText}</strong>
          </p>
        </div>
        <div class="ultima-fatura">
          <div class="chama">
            <img
              src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/c8b5fdd641d67f395930281cc80d5f9c3eecb103/comgas/teste16/chama.svg"
              alt=""
            />
            <p>Sua última fatura</p>
          </div>
          <div class="value-fatura">R$ <span>${lastAccount}</span></div>
        </div>
      </div>
      <div class="buttons-detalhe-fatura">
        <button>
          <img
            src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/c8b5fdd641d67f395930281cc80d5f9c3eecb103/comgas/teste16/pagar-agora.svg"
            alt=""
          />
          Pagar agora
        </button>
        <button>
          <img
            src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/c8b5fdd641d67f395930281cc80d5f9c3eecb103/comgas/teste16/segunda-via.svg"
            alt=""
          />PDF da 2ª Via
        </button>
      </div>
    </div>

    <div class="debito-protestados">
      <h3>
        <img
          src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/c8b5fdd641d67f395930281cc80d5f9c3eecb103/comgas/teste16/icon-debito.svg"
          alt=""
        />Débitos protestado(s)
      </h3>
      <p>
        Total de <span>R$ ${totalDebitos}</span> Débitos protestado(s) e/ou
        negativado(s)
      </p>
      <button>Consultar</button>
    </div>
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
  if (status.querySelector("strong").innerText.trim() === "vencida") {
    document.querySelector(".container-ss").classList.add("vencida");
    setButtonsDebito();
  } else {
    if (document.querySelectorAll(".buttons-detalhe-fatura button")[1]) {
      document
        .querySelectorAll(".buttons-detalhe-fatura button")[1]
        .addEventListener("click", () => {
          pdfButton(segundaVia);
        });
    }
  }

  redirectItens();
}
let countPDFButton = 0;
function pdfButton(buttonSegundaVia) {
  if (countPDFButton < 1) {
    buttonSegundaVia.querySelector("span").click();
  }
  countPDFButton++;

  setTimeout(() => {
    countPDFButton = 0;
  });
}
function redirectItens() {
  //MOver o informar leitura
  if (
    document.querySelector(
      ".row.quick-access-line cg-portal-cliente-informar-leitura.p-4.p-md-0"
    )
  ) {
    document
      .querySelector(".row.quick-access-line")
      .insertAdjacentElement(
        "beforebegin",
        document.querySelector("cg-portal-cliente-informar-leitura.p-4.p-md-0")
      );
  }

  if (window.innerWidth >= 1000) {
    if (
      document.querySelector(
        "#mainContent > div > ng-component > cg-portal-cliente-header-para-voce > div > div > cg-portal-cliente-acesso-rapido-para-voce > div > div:nth-child(2)"
      ) &&
      !document.querySelector(
        "#mainContent > div > ng-component > cg-portal-cliente-header-para-voce > div > div > cg-portal-cliente-acesso-rapido-para-voce > div > div.col-md-4.residential-banner-container"
      )
    ) {
      //Mudando banner
      document
        .querySelector(
          "#mainContent > div > ng-component > cg-portal-cliente-header-para-voce > div > div > cg-portal-cliente-acesso-rapido-para-voce > div > div:nth-child(2)"
        )
        .insertAdjacentElement(
          "afterend",
          document.querySelector(".col-md-4.residential-banner-container")
        );
    }
  }
}

let countButtons = 0;
function setButtonsDebito() {
  const [pagarAgora, PDF2via] = document.querySelectorAll(
    ".buttons-detalhe-fatura button"
  );
  const [vencimento, status, tipo, segundaVia] = document.querySelectorAll(
    "ul.last-account-details li"
  );
  const debitoProtestadosButton = document.querySelector(
    ".debito-protestados button"
  );

  pagarAgora.addEventListener("click", () => {
    if (countButtons < 1) {
      status.querySelector("button").click();
    }
    countButtons++;
    let timeOut = setTimeout(() => {
      countButtons = 0;
    });
  });

  PDF2via.addEventListener("click", () => {
    if (countButtons < 1) {
      segundaVia.querySelector("span").click();
    }
    countButtons++;
    let timeOut = setTimeout(() => {
      countButtons = 0;
    });
  });

  debitoProtestadosButton.addEventListener("click", () => {
    if (countButtons < 1) {
      document.querySelector("button.total-debitos__btn").click();
    }
    countButtons++;
    let timeOut = setTimeout(() => {
      countButtons = 0;
    });
  });
}
const root = document.querySelector("body");
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (
      window.location.pathname === "/portal" ||
      mutation.target.classList.contains("ng-tns-0-0")
    ) {
      insertDetailsFatura();
    }

    if (window.location.pathname === "/portal" && window.innerWidth >= 1000) {
      document.querySelector("div#mainContent").style.maxWidth = "944px";
      document.querySelector("div#mainContent").style.margin = "0 auto";
    } else {
      document.querySelector("div#mainContent").style.maxWidth = "100%";
      document.querySelector("div#mainContent").style.margin = "auto";
    }
  });
});

observer.observe(root, {
  childList: true,
  subtree: true,
});
