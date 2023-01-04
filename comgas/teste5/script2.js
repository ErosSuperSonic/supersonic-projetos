const contentAccordion = `    <div class="containterTitularidade">
        <div class="itemTrocaTitularidade">
            <img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/11318d651c5bc7dcd3f4100ce90aa7145f008633/comgas/teste5/img1.svg" alt="" style="height:fit-content">

            <div class="textItem">
                <h3>Quem pode solicitar?</h3>
                <p>A troca do nome da conta deve ser feita por um novo morador (novo titular).</p>
            </div>
        </div>


        <div class="itemTrocaTitularidade">
            <img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/11318d651c5bc7dcd3f4100ce90aa7145f008633/comgas/teste5/img2.svg" alt="" style="height:fit-content">


            <div class="textItem">
                <h3>Quais informações do endereço vou precisar?</h3>
                <p><span>A troca do nome da conta deve ser feita por um novo morador (novo titular).</span></p>
                <ul>
                    <li>
                        <img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/11318d651c5bc7dcd3f4100ce90aa7145f008633/comgas/teste5/checked.svg" alt="" style="height:fit-content">

                        <p>CEP</p>
                    </li>

                    <li>
                        <img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/11318d651c5bc7dcd3f4100ce90aa7145f008633/comgas/teste5/checked.svg" alt="" style="height:fit-content">

                        <p>Número da condomínio/residência</p>
                    </li>


                    <li>
                        <img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/11318d651c5bc7dcd3f4100ce90aa7145f008633/comgas/teste5/checked.svg" alt="" style="height:fit-content">

                        <p>Complemento</p>
                    </li>

                    <li>
                        <img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/11318d651c5bc7dcd3f4100ce90aa7145f008633/comgas/teste5/checked.svg" alt="" style="height:fit-content">

                        <p>Número do apartamento</p>
                    </li>
                </ul>
            </div>
        </div>




        <div class="itemTrocaTitularidade">
            <img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/11318d651c5bc7dcd3f4100ce90aa7145f008633/comgas/teste5/img3.svg" alt="" style="height:fit-content">

            <div class="textItem">
                <h3>Quais documento preciso?</h3>
                <div class="containerItemFlex">
                    <ul>
                        <p><span>Pessoa Física</span></p>
                        <li>
                            <img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/11318d651c5bc7dcd3f4100ce90aa7145f008633/comgas/teste5/checked.svg" alt="" style="height:fit-content">

                            <p>Nome completo;</p>
                        </li>

                        <li>
                            <img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/11318d651c5bc7dcd3f4100ce90aa7145f008633/comgas/teste5/checked.svg" alt="" style="height:fit-content">

                            <p>Endereço completo;</p>
                        </li>

                        <li>
                            <img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/11318d651c5bc7dcd3f4100ce90aa7145f008633/comgas/teste5/checked.svg" alt="" style="height:fit-content">

                            <p>Documento de identificação (RG com CPF ou CNH) do novo titular;</p>
                        </li>
                    </ul>


                    <ul>
                        <p><span>Pessoa Jurídica</span></p>

                        <li>
                            <img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/11318d651c5bc7dcd3f4100ce90aa7145f008633/comgas/teste5/checked.svg" alt="" style="height:fit-content">

                            <p>Razão social;</p>
                        </li>

                        <li>
                            <img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/11318d651c5bc7dcd3f4100ce90aa7145f008633/comgas/teste5/checked.svg" alt="" style="height:fit-content">

                            <p>Endereço completo;</p>
                        </li>


                        <li>
                            <img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/11318d651c5bc7dcd3f4100ce90aa7145f008633/comgas/teste5/checked.svg" alt="" style="height:fit-content">

                            <p>CNPJ (novo titular);</p>
                        </li>

                        <li>
                            <img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/11318d651c5bc7dcd3f4100ce90aa7145f008633/comgas/teste5/checked.svg" alt="" style="height:fit-content">

                            <p>Contrato Social ou MEI ou Estatuto Atualizado ou Ata de Assembleia;</p>
                        </li>


                        <li>
                            <img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/11318d651c5bc7dcd3f4100ce90aa7145f008633/comgas/teste5/checked.svg" alt="" style="height:fit-content">

                            <p>Documento de identificação (RG com CPF ou CNH) dos responsáveis legais (novo titular).
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>`;

function addContentInAccordion() {
  const trocaDeTitularidade = document.querySelector(
    "#trocaTitularicadeInicio > accordion > accordion-group:nth-child(1) > div > div.panel-heading.card-header.panel-enabled > div > div > div > div:nth-child(1) > h4"
  );
  if (trocaDeTitularidade) {
    trocaDeTitularidade.innerHTML =
      "Requerimentos para Solicitar Troca de Titularidade";

    const trocaDeTitularidade2 = document.querySelector(
      "#trocaTitularicadeInicio > accordion > accordion-group:nth-child(1) > div > div.panel-heading.card-header.panel-enabled"
    );
    trocaDeTitularidade2.addEventListener("click", () => {
      document.querySelector(
        "#trocaTitularicadeInicio > accordion > accordion-group.panel.panel-open > div > div.panel-collapse.collapse.in.show > div.panel-body.card-block.card-body > div > p"
      ).style.display = "none";
      if (!document.querySelector(".containterTitularidade")) {
        document
          .querySelector(
            "#trocaTitularicadeInicio > accordion > accordion-group.panel.panel-open > div > div.panel-collapse.collapse.in.show"
          )
          .insertAdjacentHTML("beforeend", contentAccordion);
      }
    });
  }
}

function actionInButtonInitialSolicitation() {
  const button = document.querySelector(
    "#trocaTitularicadeInicio > form > div:nth-child(2) > cg-button > button"
  );

  if (button) {
    button.addEventListener("click", () => {
      document
        .querySelector(
          "#mainContent > div > ng-component > div > div > div.col-md-8.area-principal > cg-endereco > div > div > form > div.mb-4.d-flex > div:nth-child(1) > cg-button > button"
        )
        .addEventListener("click", () => {
          addContentInAccordion();
        });
    });
  }
}

addContentInAccordion();
actionInButtonInitialSolicitation();

const root = document.querySelector("body");
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (window.location.pathname === "/trocaTitularidade") {
      if (
        mutation.target.classList.contains("area-principal") ||
        mutation.target.classList.contains("ng-tns-0-0") ||
        mutation.target.classList.contains("ng-tns-0-1")
      ) {
        addContentInAccordion();
        actionInButtonInitialSolicitation();
      }
    }
  });
});

observer.observe(root, {
  childList: true,
  subtree: true,
});

