if (window.innerWidth <= 768) {
    adicionarCopyMelhorPreco()
    adicionarVerDetalhesMobile()
    titlePopup()
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

                document.querySelector(".headerPopup").querySelector(".titlepopup").innerHTML = "Detalhes do voo"

                setTimeout(() => {
                    encontrouPopupTitle = true;
                    clearInterval(encontrouTitle);
                }, 6000)
            }
        }
    }, 300);
}