function trocarSubtitulos() {
    document.querySelectorAll("soma-paragraph.input--question.soma-paragraph.inverse.hydrated").forEach((el) => {
        if (el.innerText === "Quanto você quer investir?") {
            el.innerHTML = "<span>Quanto você quer investir? (mínimo R$1.000)</span>"
            document.querySelector("#simulador_app > soma-container > soma-grid > soma-grid-row > soma-grid-col:nth-child(1) > soma-container > soma-grid > soma-grid-row > soma-grid-col > soma-text-field").shadowRoot.querySelector("div > label").innerHTML = "Digite seu valor aqui"

        } else if (el.innerText === "Por quanto tempo você pretende deixar o dinheiro investido?") {
            el.innerHTML = "<span>Quando você quer resgatar seu investimento?</span>"
        } else if (el.innerText === "Das opções abaixo, o que você prefere?") {
            el.innerHTML = "<span>Das opções abaixo, qual mais te atende?</span>"
        }
    })

}

function resultado() {
    let verifyLabels = false;
    let setarLabels = setInterval(() => {
        if (!verifyLabels) {
            try {
                if (document.querySelector(".results__content")) {
                    document.querySelector(".secoesSS").style.display = "none"

                    document.querySelector("#simulador_app > soma-container > soma-grid > soma-grid-row > soma-grid-col:nth-child(1) > soma-container > soma-grid > soma-grid-row > soma-grid-col > soma-context:nth-child(16) > soma-context > soma-context > soma-button.results__button--full.results__button--redo.soma-button.secondary.lg.inverse.hydrated").shadowRoot.querySelector("button").addEventListener("click", () => {
                        window.location.reload();
                    })

                    clearInterval(setarLabels)
                    verifyLabels = true
                }
            } catch (e) {
                clearInterval(setarLabels)
                verifyLabels = true
            }
        }

    }, 300)
}


const root2 = document.querySelector('.home');
const observer2 = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.target.classList.contains("home")) {
            trocarSubtitulos()
            resultado()
        }
    });
});

observer2.observe(root2, {
    childList: true,
    subtree: true,
});