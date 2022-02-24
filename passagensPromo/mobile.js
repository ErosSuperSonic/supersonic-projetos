if (window.innerWidth <= 768) {
    adicionarSeloInFirstCard()
    adicionarCopyMelhorPreco()
    adicionarVerDetalhesMobile()
    titlePopup()
}


function adicionarSeloInFirstCard() {
    let encontrouSelos = false;

    const seloSearch = setInterval(() => {
        if (!encontrouSelos) {
            const selosFilter = document.querySelectorAll(".sticky_price")[0]


            if (selosFilter) {

                if (!document.querySelector(".seloContainer")) {
                    selosFilter.insertAdjacentHTML("beforebegin", `<p class="seloContainer"><svg width="80" height="15" viewBox="0 0 80 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.8846 7.5C14.8846 11.3541 11.6765 14.5 7.69231 14.5C3.7081 14.5 0.5 11.3541 0.5 7.5C0.5 3.64586 3.7081 0.5 7.69231 0.5C11.6765 0.5 14.8846 3.64586 14.8846 7.5Z" stroke="#FCDD59"/>
                    <path d="M10.293 8.78809C10.293 9.26009 10.1204 9.64909 9.77539 9.95508C9.43034 10.2611 8.93229 10.4499 8.28125 10.5215V11.5811H7.63184V10.5508C6.82454 10.5378 6.16211 10.4141 5.64453 10.1797V9.14941C5.92448 9.28613 6.25163 9.40169 6.62598 9.49609C7.00033 9.58724 7.33561 9.63444 7.63184 9.6377V7.81152L7.22168 7.66016C6.68783 7.45508 6.2972 7.21094 6.0498 6.92773C5.80566 6.64128 5.68359 6.28809 5.68359 5.86816C5.68359 5.41895 5.85775 5.04948 6.20605 4.75977C6.55762 4.47005 7.03288 4.29427 7.63184 4.23242V3.41211H8.28125V4.21777C8.94206 4.24056 9.56868 4.37402 10.1611 4.61816L9.80469 5.51172C9.29362 5.3099 8.78581 5.18945 8.28125 5.15039V6.92773L8.65234 7.06934C9.27083 7.30697 9.69889 7.55762 9.93652 7.82129C10.1742 8.08496 10.293 8.40723 10.293 8.78809ZM9.14062 8.86133C9.14062 8.67253 9.07389 8.5179 8.94043 8.39746C8.81022 8.27376 8.59049 8.15495 8.28125 8.04102V9.59863C8.85417 9.51074 9.14062 9.26497 9.14062 8.86133ZM6.83105 5.8584C6.83105 6.04395 6.88802 6.19857 7.00195 6.32227C7.11914 6.44596 7.3291 6.56803 7.63184 6.68848V5.16992C7.37142 5.20898 7.17285 5.28874 7.03613 5.40918C6.89941 5.52962 6.83105 5.67936 6.83105 5.8584Z" fill="#FCDD59"/>
                    <rect x="11.5" y="1.5" width="63" height="12" stroke="#FCDD59"/>
                    <rect x="11" y="2" width="6" height="11" fill="#186AAF"/>
                    <path d="M19.0342 10L16.8545 4.30469H16.8193C16.8604 4.75586 16.8809 5.29199 16.8809 5.91309V10H16.1909V3.5752H17.3159L19.3506 8.875H19.3857L21.438 3.5752H22.5542V10H21.8071V5.86035C21.8071 5.38574 21.8276 4.87012 21.8687 4.31348H21.8335L19.6362 10H19.0342ZM26.2456 10.0879C25.5337 10.0879 24.9712 9.87109 24.5581 9.4375C24.1479 9.00391 23.9429 8.40186 23.9429 7.63135C23.9429 6.85498 24.1333 6.23828 24.5142 5.78125C24.8979 5.32422 25.4121 5.0957 26.0566 5.0957C26.6602 5.0957 27.1377 5.29492 27.4893 5.69336C27.8408 6.08887 28.0166 6.61182 28.0166 7.26221V7.72363H24.6987C24.7134 8.28906 24.8555 8.71826 25.125 9.01123C25.3975 9.3042 25.7798 9.45068 26.272 9.45068C26.7905 9.45068 27.3032 9.34229 27.8101 9.12549V9.77588C27.5522 9.88721 27.3076 9.96631 27.0762 10.0132C26.8477 10.063 26.5708 10.0879 26.2456 10.0879ZM26.0479 5.70654C25.6611 5.70654 25.3521 5.83252 25.1206 6.08447C24.8921 6.33643 24.7573 6.68506 24.7163 7.13037H27.2344C27.2344 6.67041 27.1318 6.31885 26.9268 6.07568C26.7217 5.82959 26.4287 5.70654 26.0479 5.70654ZM29.9941 10H29.2646V3.16211H29.9941V10ZM34.8369 10V6.88428C34.8369 6.4917 34.7476 6.19873 34.5688 6.00537C34.3901 5.81201 34.1104 5.71533 33.7295 5.71533C33.2227 5.71533 32.8521 5.85303 32.6177 6.12842C32.3862 6.40381 32.2705 6.85498 32.2705 7.48193V10H31.541V3.16211H32.2705V5.23193C32.2705 5.48096 32.2588 5.6875 32.2354 5.85156H32.2793C32.4229 5.62012 32.6265 5.43848 32.8901 5.30664C33.1567 5.17188 33.46 5.10449 33.7998 5.10449C34.3887 5.10449 34.8296 5.24512 35.1226 5.52637C35.4185 5.80469 35.5664 6.24854 35.5664 6.85791V10H34.8369ZM41.2266 7.5874C41.2266 8.37256 41.0288 8.98633 40.6333 9.42871C40.2378 9.86816 39.6914 10.0879 38.9941 10.0879C38.5635 10.0879 38.1812 9.98682 37.8472 9.78467C37.5132 9.58252 37.2554 9.29248 37.0737 8.91455C36.8921 8.53662 36.8013 8.09424 36.8013 7.5874C36.8013 6.80225 36.9976 6.19141 37.3901 5.75488C37.7827 5.31543 38.3276 5.0957 39.0249 5.0957C39.6987 5.0957 40.2334 5.31982 40.6289 5.76807C41.0273 6.21631 41.2266 6.82275 41.2266 7.5874ZM37.5571 7.5874C37.5571 8.20264 37.6802 8.67139 37.9263 8.99365C38.1724 9.31592 38.5342 9.47705 39.0117 9.47705C39.4893 9.47705 39.8511 9.31738 40.0972 8.99805C40.3462 8.67578 40.4707 8.20557 40.4707 7.5874C40.4707 6.9751 40.3462 6.51074 40.0972 6.19434C39.8511 5.875 39.4863 5.71533 39.0029 5.71533C38.5254 5.71533 38.165 5.87207 37.9219 6.18555C37.6787 6.49902 37.5571 6.96631 37.5571 7.5874ZM44.707 5.0957C44.9209 5.0957 45.1128 5.11328 45.2827 5.14844L45.1816 5.8252C44.9824 5.78125 44.8066 5.75928 44.6543 5.75928C44.2646 5.75928 43.9307 5.91748 43.6523 6.23389C43.377 6.55029 43.2393 6.94434 43.2393 7.41602V10H42.5098V5.18359H43.1118L43.1953 6.07568H43.2305C43.4092 5.76221 43.6245 5.52051 43.8765 5.35059C44.1284 5.18066 44.4053 5.0957 44.707 5.0957ZM50.7627 10.0879C50.4492 10.0879 50.1621 10.0308 49.9014 9.9165C49.6436 9.79932 49.4268 9.62061 49.251 9.38037H49.1982C49.2334 9.66162 49.251 9.92822 49.251 10.1802V12.1621H48.5215V5.18359H49.1147L49.2158 5.84277H49.251C49.4385 5.5791 49.6567 5.38867 49.9058 5.27148C50.1548 5.1543 50.4404 5.0957 50.7627 5.0957C51.4014 5.0957 51.8936 5.31396 52.2393 5.75049C52.5879 6.18701 52.7622 6.79932 52.7622 7.5874C52.7622 8.37842 52.585 8.99365 52.2305 9.43311C51.8789 9.86963 51.3896 10.0879 50.7627 10.0879ZM50.6572 5.71533C50.165 5.71533 49.8091 5.85156 49.5894 6.12402C49.3696 6.39648 49.2568 6.83008 49.251 7.4248V7.5874C49.251 8.26416 49.3638 8.74902 49.5894 9.04199C49.8149 9.33203 50.1768 9.47705 50.6748 9.47705C51.0908 9.47705 51.416 9.30859 51.6504 8.97168C51.8877 8.63477 52.0063 8.17041 52.0063 7.57861C52.0063 6.97803 51.8877 6.51807 51.6504 6.19873C51.416 5.87646 51.085 5.71533 50.6572 5.71533ZM56.2383 5.0957C56.4521 5.0957 56.644 5.11328 56.814 5.14844L56.7129 5.8252C56.5137 5.78125 56.3379 5.75928 56.1855 5.75928C55.7959 5.75928 55.4619 5.91748 55.1836 6.23389C54.9082 6.55029 54.7705 6.94434 54.7705 7.41602V10H54.041V5.18359H54.6431L54.7266 6.07568H54.7617C54.9404 5.76221 55.1558 5.52051 55.4077 5.35059C55.6597 5.18066 55.9365 5.0957 56.2383 5.0957ZM59.7495 10.0879C59.0376 10.0879 58.4751 9.87109 58.062 9.4375C57.6519 9.00391 57.4468 8.40186 57.4468 7.63135C57.4468 6.85498 57.6372 6.23828 58.0181 5.78125C58.4019 5.32422 58.916 5.0957 59.5605 5.0957C60.1641 5.0957 60.6416 5.29492 60.9932 5.69336C61.3447 6.08887 61.5205 6.61182 61.5205 7.26221V7.72363H58.2026C58.2173 8.28906 58.3594 8.71826 58.6289 9.01123C58.9014 9.3042 59.2837 9.45068 59.7759 9.45068C60.2944 9.45068 60.8071 9.34229 61.314 9.12549V9.77588C61.0562 9.88721 60.8115 9.96631 60.5801 10.0132C60.3516 10.063 60.0747 10.0879 59.7495 10.0879ZM59.5518 5.70654C59.165 5.70654 58.856 5.83252 58.6245 6.08447C58.396 6.33643 58.2612 6.68506 58.2202 7.13037H60.7383C60.7383 6.67041 60.6357 6.31885 60.4307 6.07568C60.2256 5.82959 59.9326 5.70654 59.5518 5.70654ZM64.6934 10.0879C63.9961 10.0879 63.4556 9.87402 63.0718 9.44629C62.6909 9.01562 62.5005 8.40771 62.5005 7.62256C62.5005 6.81689 62.6938 6.19434 63.0806 5.75488C63.4702 5.31543 64.0239 5.0957 64.7417 5.0957C64.9731 5.0957 65.2046 5.12061 65.436 5.17041C65.6675 5.22021 65.8491 5.27881 65.981 5.34619L65.7568 5.96582C65.5957 5.90137 65.4199 5.84863 65.2295 5.80762C65.0391 5.76367 64.8706 5.7417 64.7241 5.7417C63.7456 5.7417 63.2563 6.36572 63.2563 7.61377C63.2563 8.20557 63.375 8.65967 63.6123 8.97607C63.8525 9.29248 64.207 9.45068 64.6758 9.45068C65.0771 9.45068 65.4888 9.36426 65.9106 9.19141V9.8374C65.5884 10.0044 65.1826 10.0879 64.6934 10.0879ZM65.3438 11.27C65.3438 11.5542 65.231 11.7739 65.0054 11.9292C64.7827 12.0845 64.4517 12.1621 64.0122 12.1621C63.8628 12.1621 63.7222 12.1489 63.5903 12.1226V11.6567C63.7222 11.6802 63.8745 11.6919 64.0474 11.6919C64.2788 11.6919 64.4531 11.6626 64.5703 11.604C64.6904 11.5454 64.7505 11.437 64.7505 11.2788C64.7505 11.1528 64.6919 11.0503 64.5747 10.9712C64.4604 10.895 64.2437 10.832 63.9243 10.7822L64.311 10H64.7944L64.5527 10.5054C65.0801 10.6196 65.3438 10.8745 65.3438 11.27ZM71.2148 7.5874C71.2148 8.37256 71.0171 8.98633 70.6216 9.42871C70.2261 9.86816 69.6797 10.0879 68.9824 10.0879C68.5518 10.0879 68.1694 9.98682 67.8354 9.78467C67.5015 9.58252 67.2437 9.29248 67.062 8.91455C66.8804 8.53662 66.7896 8.09424 66.7896 7.5874C66.7896 6.80225 66.9858 6.19141 67.3784 5.75488C67.771 5.31543 68.3159 5.0957 69.0132 5.0957C69.687 5.0957 70.2217 5.31982 70.6172 5.76807C71.0156 6.21631 71.2148 6.82275 71.2148 7.5874ZM67.5454 7.5874C67.5454 8.20264 67.6685 8.67139 67.9146 8.99365C68.1606 9.31592 68.5225 9.47705 69 9.47705C69.4775 9.47705 69.8394 9.31738 70.0854 8.99805C70.3345 8.67578 70.459 8.20557 70.459 7.5874C70.459 6.9751 70.3345 6.51074 70.0854 6.19434C69.8394 5.875 69.4746 5.71533 68.9912 5.71533C68.5137 5.71533 68.1533 5.87207 67.9102 6.18555C67.667 6.49902 67.5454 6.96631 67.5454 7.5874Z" fill="#FCDD59"/>
                    </svg>
                    <p>`)

                }
                setTimeout(() => {
                    encontrouSelos = true;
                    clearInterval(seloSearch);
                }, 6000)
            }
        }
    }, 300);
}

function adicionarCopyMelhorPreco() {
    const myHTML = `        <div class="copy-ss">
                                <p>
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7.5 13.125C10.6066 13.125 13.125 10.6066 13.125 7.5C13.125 4.3934 10.6066 1.875 7.5 1.875C4.3934 1.875 1.875 4.3934 1.875 7.5C1.875 10.6066 4.3934 13.125 7.5 13.125Z"
                                            stroke="#FF0000" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M7.5 4.21875V7.5H10.7812" stroke="#FF0000" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>


                                    Aproveite o melhor preço antes que ele se altere.
                                </p>
                            </div>`




    let encontrouCard = false;

    const encontrouFirstCard = setInterval(() => {
        if (!encontrouCard) {
            const firstCard = document.querySelector(".flightcardsidebar")

            if (firstCard) {
                firstCard.style.borderRadius = "0px" //tirar o border radius do elemento com melhor preço
                if (!document.querySelector(".copy-ss")) {
                    firstCard.insertAdjacentHTML("afterend", myHTML)
                }
                setTimeout(() => {
                    encontrouCard = true;
                    clearInterval(encontrouFirstCard);
                }, 6000)
            }
        }
    }, 300);
}

function adicionarVerDetalhesMobile() {
    const myHTML = `
                <div>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6 10.5C8.48528 10.5 10.5 8.48528 10.5 6C10.5 3.51472 8.48528 1.5 6 1.5C3.51472 1.5 1.5 3.51472 1.5 6C1.5 8.48528 3.51472 10.5 6 10.5Z"
                        stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M5.625 5.625V5.625C5.83211 5.625 6 5.79289 6 6V7.875C6 8.08211 6.16789 8.25 6.375 8.25V8.25"
                        stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M5.90625 4.3125C6.11336 4.3125 6.28125 4.14461 6.28125 3.9375C6.28125 3.73039 6.11336 3.5625 5.90625 3.5625C5.69914 3.5625 5.53125 3.73039 5.53125 3.9375C5.53125 4.14461 5.69914 4.3125 5.90625 4.3125Z"
                        fill="black" />
                </svg>

                <p>Ver detalhes do voo</p>
            </div>
    `
    let encontrouButton = false;

    const encontrouFirstCard = setInterval(() => {
        if (!encontrouButton) {
            const buttons = document.querySelectorAll(".flightcarditem .arrow_details span")

            if (buttons) {
                buttons.forEach((button) => {
                    if (!button.querySelector("div")) {
                        button.insertAdjacentHTML("afterbegin", myHTML)
                        button.addEventListener("click", () => {
                            titlePopup()
                        })
                    }
                })
                setTimeout(() => {
                    encontrouButton = true;
                    clearInterval(encontrouFirstCard);
                }, 10000)
            }
        }
    }, 300);
}

function titlePopup() {

    let encontrouPopupTitle = false;

    const encontrouTitle = setInterval(() => {
        if (!encontrouPopupTitle) {
            const headerPopup = document.querySelector(".headerPopup")

            if (headerPopup) {

                document.querySelector(".headerPopup").querySelector(".titlepopup").innerHTML="Detalhes do voo"

                setTimeout(() => {
                    encontrouPopupTitle = true;
                    clearInterval(encontrouTitle);
                }, 6000)
            }
        }
    }, 300);
}