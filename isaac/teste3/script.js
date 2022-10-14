const contentSS = `
<section class="container-ss">
<div class="container-text-ss">
  <h1>A maior plataforma de serviços financeiros feita para escolas</h1>
  <ul>
    <li>
      <img
        src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/7ab1625a0bd8ee7fb0219a6c598a5db80f2a4a7b/isaac/teste3/checked-icon.svg"
        alt=""
      />
      <p>
        Ganhe mais tempo para focar na missão de educar. A cobrança fica
        por nossa conta!
      </p>
    </li>

    <li>
      <img
        src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/7ab1625a0bd8ee7fb0219a6c598a5db80f2a4a7b/isaac/teste3/checked-icon.svg"
        alt=""
      />

      <p>
        Amplie sua escola e aumente o número de turmas. Garantimos receita
        garantida.
      </p>
    </li>

    <li>
      <img
        src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/7ab1625a0bd8ee7fb0219a6c598a5db80f2a4a7b/isaac/teste3/checked-icon.svg"
        alt=""
      />
      <p>
        Retenha mais alunos oferecendo facilidade de pagamentos para as
        famílias.
      </p>
    </li>

    <li>
      <img
        src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/7ab1625a0bd8ee7fb0219a6c598a5db80f2a4a7b/isaac/teste3/checked-icon.svg"
        alt=""
      />
      <p>
        Monitore o status dos pagamentos, matrículas e contratos em poucos
        cliques.
      </p>
    </li>
  </ul>

  <h4 class="microcopyInput">Saiba como ter o isaac na sua escola</h4>
  <script
    charset="utf-8"
    type="text/javascript"
    src="//js.hsforms.net/forms/embed/v2.js"
  ></script>
  <script>
    hbspt.forms.create({
      region: "na1",
      portalId: "20646345",
      formId: "fa43c80c-58c9-452f-a9e8-77958cff96e0",
    });
  </script>
</div>

<div class="container-video-ss">
  <div class="video-box">
    <div class="video-header">
      <div class="play-button">
        <svg
          width="70"
          height="70"
          viewBox="0 0 70 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M44 35L30.5 42.7942L30.5 27.2058L44 35Z"
            fill="white"
          />
          <rect
            x="1"
            y="1"
            width="68"
            height="68"
            rx="34"
            stroke="white"
            stroke-width="2"
          />
        </svg>
      </div>
      <img
        src="https://github.com/ErosSuperSonic/supersonic-projetos/blob/main/isaac/teste3/banner-video.png?raw=true"
        class="banner"
        alt=""
      />
    </div>
    <div class="video-content">
      <img
        src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/7ab1625a0bd8ee7fb0219a6c598a5db80f2a4a7b/isaac/teste3/aspas.svg"
        class="aspas"
        alt=""
      />
      <p>
        Com a parceria do isaac, passamos a ter certeza do que poderíamos
        investir e do lucro da escola, o que facilitou muito nosso
        crescimento, tanto é que no ano da pandemia nossa escola cresceu
        20%!
      </p>
      <h3>CONECTA EX 2022</h3>
      <span>Escolas parceiras do isaac</span>
    </div>
  </div>
</div>
</section>
`;

if (!document.querySelector(".container-ss")) {
  document
    .querySelector("div.section-hero>div")
    .insertAdjacentHTML("afterend", contentSS);
}

document.querySelector(".video-header").addEventListener("click", () => {
  if (document.querySelector("#splide01-slide02 > div > a > img")) {
    document.querySelector("#splide01-slide02 > div > a > img").click();
  }
});

// setInterval((el) =>{
//   console.log()

// }, 300)

const cssForm = `
  <style>
  #hsForm_fa43c80c-58c9-452f-a9e8-77958cff96e0 {
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 16px;
}

.hs-button,
.hs-form-field input[type="email"] {
  border-radius: 8px;
  height: 64px;
}

input.hs-button.primary.large,
input.hs-button.primary.large:hover,
input.hs-button.primary.large:active {
  font-family: "Halcyon", sans-serif !important;
  font-style: normal;
  font-weight: 900;
  font-size: 18px !important;
  line-height: 20px !important;
  display: flex;
  align-items: center;
  color: #ffffff;
  position: relative;
  top: 11px;
  margin-left: 16px;
}
.actions {
  margin-top: 0px;
}
.inputs-list label {
  position: absolute;
  bottom: 0px;
}

.hs_error_rollup {
  margin-right: -5px;
}

input#email-fa43c80c-58c9-452f-a9e8-77958cff96e0 {
  border: 1px solid #3d4ed7;
}
label.hs-main-font-element {
  left: 243px;
}

@media (max-width: 768px) {
  #hsForm_fa43c80c-58c9-452f-a9e8-77958cff96e0 {
    flex-direction: column;
  }
  .hs_submit.hs-submit {
    width: 100%;
  }
  .hs-button,
  .hs-form-field input[type="email"] {
    height: 56px;
  }
  input.hs-button.primary.large,
  input.hs-button.primary.large:hover,
  input.hs-button.primary.large:active {
    width: 100%;
    margin-left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .hs_email.hs-email.hs-fieldtype-text.field.hs-form-field {
    width: 100%;
    height: 78px;
  }

  .hs_submit.hs-submit {
    width: 100%;
    position: relative;
    top: -33px;
  }
  .actions {
    margin-bottom: 0;
  }

  label.hs-main-font-element {
    left: 0px;
    top: auto;
    bottom: 16px;
  }

  .hs-error-msgs label {
    position: absolute;
    bottom: 80px;
    left: 0px;
  }

  .hs_submit.hs-submit{
    top: -17px;
  }
  .hs_error_rollup .hs-main-font-element {
    top: auto;
    bottom: 0;
  }
}
  </style>
`;
let myInterval = setInterval(() => {
  const newBody = document.querySelector("iframe").contentWindow.document.body;
  if (newBody) {
    clearInterval(myInterval);
    newBody.insertAdjacentHTML("afterbegin", cssForm);
  }
}, 300);
