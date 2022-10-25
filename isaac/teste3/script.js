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
      <g clip-path="url(#clip0_1_2)">
        <path
          id="bluePlay"
          d="M69 35C69 16.2223 53.7777 1 35 1C16.2223 1 1 16.2223 1 35C1 53.7777 16.2223 69 35 69C53.7777 69 69 53.7777 69 35Z"
          fill="#3d4ed700"
        />
        <path d="M44 35L30.5 42.7942V27.2058L44 35Z" fill="white" />
        <path
          d="M69 35C69 16.2223 53.7777 1 35 1C16.2223 1 1 16.2223 1 35C1 53.7777 16.2223 69 35 69C53.7777 69 69 53.7777 69 35Z"
          stroke="white"
          stroke-width="2"
          id="strokePlay"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_2">
          <rect width="70" height="70" fill="white" />
        </clipPath>
      </defs>
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
        Com a parceria do isaac, passamos a ter a certeza dos lucros e dos investimentos da escola. Isso facilitou muito nosso crescimento, tanto é que no ano da pandemia nossa escola cresceu 20%.
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

const cssForm = `
  <style>
  form#hsForm_fa43c80c-58c9-452f-a9e8-77958cff96e0 {
    width: 100%;
    display: flex;
    align-items: center;
  }
  .hs_email.hs-email.hs-fieldtype-text.field.hs-form-field {
    width: 285.5px;
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
    font-weight: 700;
    font-size: 18px !important;
    line-height: 20px !important;
    display: flex;
    align-items: center;
    color: #ffffff;
    position: relative;
    top: 3px;
    margin-left: 16px; 
    justify-content: center;
  }
  input.hs-button.primary.large:hover {
    background-color: #3341b2;
  }
  form#hsForm_fa43c80c-58c9-452f-a9e8-77958cff96e0 .hs-error-msgs label {
    position: absolute;
    bottom: 10px;
  }
  form#hsForm_fa43c80c-58c9-452f-a9e8-77958cff96e0
    .hs-error-msgs
    label.hs-main-font-element {
    display: none;
  }
  
  form#hsForm_fa43c80c-58c9-452f-a9e8-77958cff96e0 label.hs-error-msg {
    top: 103px;
  }
  
  form#hsForm_fa43c80c-58c9-452f-a9e8-77958cff96e0 .hs_error_rollup {
    position: relative;
  }

  </style>
`;

const cssMobile = `
  <style>
    @media (max-width: 768px) {
      form#hsForm_fa43c80c-58c9-452f-a9e8-77958cff96e0 {
        flex-direction: column;
        margin-top: 16px !important;
      }
    
      form#hsForm_fa43c80c-58c9-452f-a9e8-77958cff96e0
        .hs_email.hs-email.hs-fieldtype-text.field.hs-form-field {
        width: 100%;
      }
    
      form#hsForm_fa43c80c-58c9-452f-a9e8-77958cff96e0.hs_submit.hs-submit {
        width: 100%;
      }
    
      input.hs-button.primary.large,
      input.hs-button.primary.large:hover,
      input.hs-button.primary.large:active {
        width: 100%;
        margin-left: 0!important;
      }
    
      form#hsForm_fa43c80c-58c9-452f-a9e8-77958cff96e0 .hs_error_rollup {
        width: 100%;
      }
      .hs_submit.hs-submit {
        width: 100%;
    }
    form#hsForm_fa43c80c-58c9-452f-a9e8-77958cff96e0 label.hs-error-msg{    top: 108px !important;}
      form#hsForm_fa43c80c-58c9-452f-a9e8-77958cff96e0
        .hs-error-msgs
        label.hs-main-font-element {
        position: absolute;
        right: 0px;
        bottom: -126px;
        width: max-content;
        background: #0a0202;
        width: 100%;
      }
      .hs_submit.hs-submit{
        margin-top: -42px;
      }
    }
  </style>
`;

// Create a script container then load in the URL.
const hubSpotScript = document.createElement("script");
hubSpotScript.src = "https://js.hsforms.net/forms/v2.js";
// Append it to the body to execute it.
document.body.appendChild(hubSpotScript);

window.addEventListener("load", function () {
  hbspt.forms.create({
    region: "na1",
    portalId: "20646345",
    formId: "fa43c80c-58c9-452f-a9e8-77958cff96e0",
    // You can target where you'd like the form to be injected.
    // https://developers.hubspot.com/docs/methods/forms/advanced_form_options
    target: ".microcopyInput",
  });

  let myInterval = setInterval(() => {
    const newBody =
      document.querySelector("#hs-form-iframe-1").contentWindow.document.body;
    if (newBody) {
      clearInterval(myInterval);
      newBody.insertAdjacentHTML("afterbegin", cssForm);

      const buttonSubmitForm = newBody.querySelector(
        "form input[type='submit']"
      );
      const buttonEmail = newBody.querySelector("form input[type='email']");
      const formSubmitEmbed = newBody.querySelector("form");

      formSubmitEmbed.addEventListener("submit", () => {
        if (
          buttonEmail.classList.contains("invalid") === false &&
          buttonEmail.classList.contains("error") === false &&
          (buttonEmail.value === "") === false
        ) {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: "interaction",
            interaction: {
              category: "escolas",
              action: "envio-form",
              label: "form-quero-o-isaac-na-minha-escola",
              value: 0,
              ni: false,
            },
          });
        }
      });

      if (window.innerWidth <= 768) {
        newBody.insertAdjacentHTML("afterbegin", cssMobile);
      }
    }
  }, 300);
});
