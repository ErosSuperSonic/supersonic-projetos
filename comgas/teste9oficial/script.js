function popupElementCopy(text) {
    const element = document.querySelector(".elementCopy")
    element.innerHTML = text
    element.classList.add("active")
    setTimeout(() => {
        element.classList.remove("active")
    }, 1000)
}

function copyCodeUser() {
    let verifyInterval = false

    const myInterval = setInterval(() => {
        let textUserCode = document.querySelector(".userCode span")
        if (!verifyInterval) {
            if (myInterval) {
                dataLayer.map((el) => {
                    if (el.codigoUsuario) {
                        textUserCode.innerHTML = el.codigoUsuario
                    }
                })

                document.querySelector(".copyCodeUser").addEventListener("click", () => {
                    navigator.clipboard.writeText(textUserCode.innerText).then(() => {
                        popupElementCopy("Código do usuário copiado")
                    });
                })
                verifyInterval = true
                clearInterval(myInterval)
            }
        }
    }, 300)
}

function copyNumberProtocol() {
    let verifyInterval = false
    const myInterval = setInterval(() => {
        const protocoloNumber = document.querySelector(".protocolo-container h3").innerText
        if (!verifyInterval) {
            if (protocoloNumber) {
                document.querySelector(".protocoloNumber").innerHTML = document.querySelector(".protocolo-container h3").innerText

                document.querySelector(".copyNumberProtocol").addEventListener("click", () => {
                    navigator.clipboard.writeText(protocoloNumber).then(() => {
                        popupElementCopy("Protocolo copiado")
                    });
                })
                verifyInterval = true
                clearInterval(myInterval)
            }
        }
    }, 300)

}



function insertSection() {
    const element = `
    <div class="cardProtocolo">
        <div class="containerImage">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M40 0C17.944 0 0 17.944 0 40C0 62.056 17.944 80 40 80C62.056 80 80 62.056 80 40C80 17.944 62.056 0 40 0ZM40 72C22.356 72 8 57.644 8 40C8 22.356 22.356 8 40 8C57.644 8 72 22.356 72 40C72 57.644 57.644 72 40 72Z"
                    fill="url(#paint0_linear_973_2271)" />
                <path
                    d="M31.9956 46.3479L22.7996 37.1679L17.1516 42.8319L32.0036 57.6519L58.8276 30.8279L53.1716 25.1719L31.9956 46.3479Z"
                    fill="url(#paint1_linear_973_2271)" />
                <defs>
                    <linearGradient id="paint0_linear_973_2271" x1="0" y1="80" x2="80" y2="80"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7FC241" />
                        <stop offset="1" stop-color="#007CB6" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_973_2271" x1="17.1516" y1="57.6519" x2="58.8276" y2="57.6519"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7FC241" />
                        <stop offset="1" stop-color="#007CB6" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
        <p class="firstCopy">
            Sua solicitação de troca de titularidade foi <strong>concluída!</strong><br />
            Anote seu novo código de usuário para acessar o Comgás Virtual.
        </p>
        <p class="userCode">Código de usuário: <span>0</span></p>

        <div class="copyCode copyCodeUser">
            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M12.3125 3.375C12.3125 3.06434 12.0607 2.8125 11.75 2.8125H5.5625C4.94094 2.8125 4.4375 3.31594 4.4375 3.9375V11.25C4.4375 11.5607 4.68934 11.8125 5 11.8125V11.8125C5.31066 11.8125 5.5625 11.5607 5.5625 11.25V3.9375H11.75C12.0607 3.9375 12.3125 3.68566 12.3125 3.375V3.375ZM13.5125 5.0625H7.7375C7.15737 5.0625 6.6875 5.5665 6.6875 6.1875V14.0625C6.6875 14.6835 7.15737 15.1875 7.7375 15.1875H13.5125C14.0921 15.1875 14.5625 14.6835 14.5625 14.0625V6.1875C14.5625 5.5665 14.0921 5.0625 13.5125 5.0625V5.0625ZM7.8125 6.1875H13.4375V14.0625H7.8125V6.1875Z"
                    fill="#007CB6" />
            </svg>

            Copiar código de usuário
        </div>

        <button class="btnLogin">Fazer login</button>


        <div class="containerProtocolo">

            <div class="logoComgas"><svg width="112" height="26" viewBox="0 0 112 26" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M74.5565 0.2717V1.27472C73.2443 0.468332 71.6935 0 70.031 0C65.3149 0 61.4922 3.75005 61.4922 8.37331C61.4922 12.9971 65.3149 16.7466 70.031 16.7466C71.6935 16.7466 73.2443 16.2793 74.5565 15.4724V17.6257C74.5565 20.0758 72.5296 22.0629 70.0315 22.0629C68.0115 22.0629 66.3017 20.764 65.7194 18.9716L62.0009 20.4821C63.1907 23.7024 66.3363 25.9995 70.031 25.9995C74.7467 25.9995 78.5684 22.2494 78.5684 17.6257H78.5783V0.2717H74.5565ZM70.0314 12.8126C67.5318 12.8126 65.5068 10.8249 65.5068 8.37479C65.5068 5.92513 67.5318 3.9375 70.0314 3.9375C72.5295 3.9375 74.5564 5.92513 74.5564 8.37479C74.5564 10.8249 72.5295 12.8126 70.0314 12.8126V12.8126Z"
                        fill="#007CB6" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M24.281 0C19.5649 0 15.7422 3.75005 15.7422 8.37331C15.7422 12.9971 19.5649 16.7471 24.281 16.7471C28.9962 16.7471 32.8179 12.9971 32.8179 8.37331C32.8179 3.75005 28.9962 0 24.281 0M24.2814 12.8126C21.7818 12.8126 19.7568 10.8249 19.7568 8.37479C19.7568 5.92513 21.7818 3.9375 24.2814 3.9375C26.7799 3.9375 28.8064 5.92513 28.8064 8.37479C28.8064 10.8249 26.7799 12.8126 24.2814 12.8126"
                        fill="#007CB6" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M8.53835 3.93602C10.1282 3.93602 11.5249 4.74241 12.3314 5.95707L15.2029 3.14175C13.6392 1.22822 11.235 0 8.53835 0C3.8232 0 0 3.75005 0 8.37331C0 12.9971 3.8232 16.7471 8.53835 16.7471C11.235 16.7471 13.6392 15.5194 15.2029 13.6039L12.3314 10.7891C11.5249 12.0052 10.1282 12.8111 8.53835 12.8111C6.03928 12.8111 4.01433 10.8235 4.01433 8.37331C4.01433 5.92413 6.03928 3.93602 8.53835 3.93602"
                        fill="#007CB6" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M88.8006 0C84.0849 0 80.2617 3.75005 80.2617 8.37331C80.2617 12.9971 84.0849 16.7471 88.8006 16.7471C93.5162 16.7471 97.3379 12.9971 97.3379 8.37331V0H88.8006ZM93.3264 8.37479H93.3259C93.3259 10.8249 91.2995 12.8126 88.8009 12.8126C86.3013 12.8126 84.2764 10.8249 84.2764 8.37479C84.2764 5.92513 86.3013 3.9375 88.8009 3.9375H93.3264V8.37479Z"
                        fill="#007CB6" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M57.9493 1.69898C56.7902 0.561321 55.3332 0 53.4357 0C51.5638 0 49.2539 0.965723 48.0138 3.11366C47.1559 1.36092 45.3413 0 43.2058 0C41.5567 0 40.0024 0.705162 38.7247 2.11597V0.2717H34.502V16.3844H37.4934H38.7247V7.50687C38.7548 6.23894 39.1445 5.49745 39.79 4.84169C40.4375 4.1869 41.2687 3.96896 42.1503 3.96896C43.9333 3.96896 44.9522 5.37928 44.9522 7.64781V16.3844H49.1744V7.50687C49.204 6.23894 49.5937 5.49745 50.2407 4.84169C50.8872 4.1869 51.7184 3.96896 52.5995 3.96896C54.383 3.96896 55.4019 5.37928 55.4019 7.64781V16.3844H59.8093V6.64915C59.8093 4.47264 59.1095 2.83808 57.9493 1.69898"
                        fill="#007CB6" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M109.94 8.04834C109.23 7.63764 107.501 7.00512 106.054 6.4656C103.747 5.60546 103.229 5.03251 103.303 4.43923C103.374 3.87742 104.32 3.45462 105.792 3.52339C107.264 3.59168 108.496 3.83287 110.308 4.57435L111.71 1.3648C109.559 0.403918 107.586 0 106.076 0C103.623 0 102.211 0.380671 100.898 1.32751C99.586 2.27483 99.021 3.44735 99.021 4.96665C99.021 6.46705 100.058 7.77712 101.446 8.60191C102.125 9.00534 103.127 9.55407 104.733 10.098C105.745 10.4409 106.364 10.6152 106.889 10.8855C107.445 11.1712 107.613 11.5 107.613 11.8827C107.613 12.3583 107.024 12.9544 105.587 12.9544C103.82 12.9544 101.699 12.3147 99.8136 11.24L97.9922 14.6127C99.2585 15.3891 99.9791 15.6957 101.359 16.1286C102.737 16.5607 104.068 16.7771 105.353 16.7771C107.279 16.7771 108.874 16.2793 110.166 15.3271C111.279 14.5062 112 13.2218 112 11.6177C112 10.3125 111.529 8.96854 109.94 8.04834"
                        fill="#007CB6" />
                </svg>
            </div>
            <p>Este atendimento gerou o</p>
            <h3>PROTOCOLO Nº</h3>

            <div class="protocoloNumber">00786754342</div>

            <div class="containerImageProtocolo">
                <img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/main/comgas/teste9oficial/imagemProto.png" alt="">
            </div>
        </div>

        <div class="copyCode copyNumberProtocol">
            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M12.3125 3.375C12.3125 3.06434 12.0607 2.8125 11.75 2.8125H5.5625C4.94094 2.8125 4.4375 3.31594 4.4375 3.9375V11.25C4.4375 11.5607 4.68934 11.8125 5 11.8125V11.8125C5.31066 11.8125 5.5625 11.5607 5.5625 11.25V3.9375H11.75C12.0607 3.9375 12.3125 3.68566 12.3125 3.375V3.375ZM13.5125 5.0625H7.7375C7.15737 5.0625 6.6875 5.5665 6.6875 6.1875V14.0625C6.6875 14.6835 7.15737 15.1875 7.7375 15.1875H13.5125C14.0921 15.1875 14.5625 14.6835 14.5625 14.0625V6.1875C14.5625 5.5665 14.0921 5.0625 13.5125 5.0625V5.0625ZM7.8125 6.1875H13.4375V14.0625H7.8125V6.1875Z"
                    fill="#007CB6" />
            </svg>

            Copiar número do protocolo
        </div>

        <div class="elementCopy">Copiado</div>
    </div>`


    let verifyInterval = false
    let contador = 0
    const myInterval = setInterval(() => {
        contador = contador + 1
        const div = document.querySelector(".linha-informacoes")
        if (!verifyInterval) {

            if (div) {
                div.insertAdjacentHTML("beforebegin", element)
                verifyInterval = true
                clearInterval(myInterval)
            }
            if (contador == 12) {
                verifyInterval = true
                clearInterval(myInterval)
            }
        }
    }, 300)
}


function addStyleInHTML() {
    const style = `

    <style>
        .col-md-4.area-extra.pb-4.mt-0 {
            display: none !important;
        }

        .row.flex-row.mx-auto {
            justify-content: center;
        }


        *,
        html {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* ======= Adição Card ======= */
        .cardProtocolo {
            border: 1px solid #C4C4C4;
            border-radius: 8px;
            padding: 36px 16px;
            max-width: 592px;
            width: 100%;
            margin: 0 auto;

            display: flex;
            flex-direction: column;
            align-items: center;
            font-family: 'Open Sans', sans-serif;
            position: relative;
            margin-bottom: 56px;
        }

        .new-xp-internal .form-container [class*="col"] {
            float: inherit;
        }

        .containerImageProtocolo {
            z-index: 1;
        }

        .firstCopy {
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 150%;
            /* or 24px */

            text-align: center;
            letter-spacing: -0.025em;

            /* Grayscale/Dark Gray 2 */

            color: #3A3A3A;
            margin-top: 16px;
        }

        .userCode {
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 150%;
            letter-spacing: -0.025em;
            color: #3A3A3A;
            margin-top: 24px;
            margin-bottom: 8px;
        }

        .copyCode {
            display: flex;
            align-items: center;
            justify-content: center;

            font-style: normal;
            font-weight: 600;
            font-size: 12px;
            line-height: 150%;

            letter-spacing: -0.025em;
            text-decoration-line: underline;

            color: #007CB6;

            gap: 4px;
            margin-bottom: 24px;

        }

        .btnLogin {
            display: flex;
            align-items: center;
            justify-content: center;

            max-width: 340px;
            width: 100%;
            height: 40px;
            background: #7FC241;
            border-radius: 60px;
            cursor: pointer;


            font-family: 'Open Sans', sans-serif, ;
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 150%;
            letter-spacing: -0.025em;
            color: #FFFFFF;
            text-decoration: none;

            border: none;
            outline: none;

            margin-bottom: 32px;
        }

        .copyCode2 {
            margin-bottom: 0;
        }

        .logoComgas {
            text-align: center;
            padding-top: 24px;
            z-index: 2;
            position: relative;
        }

        .containerProtocolo {
            position: relative;
            width: 100%;
        }

        .containerImageProtocolo {
            position: absolute;
            top: 7px;
            left: 50%;
            transform: translate(-50%);
            z-index: 1;
        }

        .containerProtocolo p {
            text-align: center;
            margin-top: 8px;

            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;

            color: #4F4F4F;
            margin-bottom: 4px;
            z-index: 2;
            position: relative;
        }

        .containerProtocolo h3 {
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 22px;
            text-align: center;
            color: #007CB6;
            z-index: 2;
            position: relative;
        }

        .protocoloNumber {
            padding-top: 26px;
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 24px;
            text-align: center;
            letter-spacing: 5px;
            color: #007CB6;
            padding-bottom: 24px;
            z-index: 2;
            position: relative;
            float: none !important;
        }

        .elementCopy {
            background: #7fc241;
            padding: 10px 30px;
            display: block;
            border-radius: 3px;
            font-weight: 700;
            color: #fff;
            /* 
            opacity: 0;
            pointer-events: none; */

            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            opacity: 0;
            transition: .5s;
        }

        .copyCodeUser,
        .copyCode {
            cursor: pointer;
        }

        .elementCopy.active {
            bottom: 5px;
            opacity: 1;
        }


        .heading.troca-heading {
            display: none;
        }

        #mainContent>div>ng-component>div>div>div.col-md-8.area-principal>cg-finalizado>div>div.form-container.pb-0>cg-comgas-protocolo,
        #mainContent>div>ng-component>div>div>div.col-md-8.area-principal>cg-finalizado>div>div.form-container.pb-0>div.borda-inferior {
            display: none !important;
        }

        .finalizado[_ngcontent-serverApp-c274] {
            padding-top: 0;
        }

        .new-xp-internal .form-container {
            padding: 0px 0 64px;
        }

        .finalizado[_ngcontent-serverApp-c275] {
            padding-top: 0;
        }

        @media(max-width:767px) {
            cg-acompanhar-solicitacao-finalizada.hidden-md.hidden-lg {
                display: none !important;
            }

            .cardProtocolo {
                border: 1px solid #C4C4C4;
                padding-top: 32px;
                margin-top: -49px;
            }
        }

        @media(max-width:340px) {
            .containerImageProtocolo {
                top: 15px;
                width: 100%;
            }

            .containerImageProtocolo img {
                width: 100%;
            }

            .protocoloNumber {
                padding-top: 10px;
            }
        }

        @media(max-width: 768px) {
            .cardProtocolo {
                border: 0;
            }

            .elementCopy {
                width: fit-content;
                text-align: center;
            }
        }
    </style>
`
    document.querySelector("head").insertAdjacentHTML("beforeend", style)
}


function buttonFazerLogin(){

    let verifyInterval = false
    let contador = 0
    const myInterval = setInterval(() => {
        contador = contador + 1
        const button = document.querySelectorAll(".new-xp-internal .btn--blue")
        if (!verifyInterval) {

            if (button.length > 0) {
                
                document.querySelector(".btnLogin").addEventListener("click", () =>{
                    button.forEach((el) =>{
                        el.click();
                    })
                })
                verifyInterval = true
                clearInterval(myInterval)
            }
            if (contador == 12) {
                verifyInterval = true
                clearInterval(myInterval)
            }
        }
    }, 300)
    
}

const root = document.querySelector('body');
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.target.classList.contains("troca-finalizado-text")) {
            addStyleInHTML()
            insertSection()
            copyCodeUser()
            copyNumberProtocol()
            buttonFazerLogin()
        }
    });
});

observer.observe(root, {
    childList: true,
    subtree: true,
});


