function adicionarVerDetalhesDesktop() {
    const myHTML = `
        <div>
        <p>Ver detalhes</p>
        <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.4375 1.125L7.5 7.0625L1.5625 1.125" stroke="black" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>
    </div>
    `
    let encontrouButton2 = false;

    const encontrouFirstCard = setInterval(() => {
        if (!encontrouButton2) {
            const buttons = document.querySelectorAll(".flightcarditem .arrow_details span")

            if (buttons) {

                buttons.forEach((button) => {
                    if (!button.querySelector("div")) {
                        button.insertAdjacentHTML("afterbegin", myHTML)
                    }
                })
                setTimeout(() => {
                    encontrouButton2 = true;
                    clearInterval(encontrouFirstCard);
                }, 10000)
            }
        }
    }, 300);
}