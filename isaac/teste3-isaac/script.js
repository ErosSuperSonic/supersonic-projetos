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
        margin-top: -34px;
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
