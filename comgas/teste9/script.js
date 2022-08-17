function add() {
    if (document.querySelector("label[for='chkEmail']")) {
        const label = document.querySelector("label[for='chkEmail']")

        if (!label.querySelector(".shadow__super")) {
            label.insertAdjacentHTML("afterbegin", "<span class='shadow__super'></span>")
        }
    }

    const squareShadow = document.querySelector(".shadow__super")

    document.querySelector("#chkEmail").addEventListener("click", () => {
        if (document.querySelector("#chkEmail").checked === false) {
            squareShadow.style.backgroundColor = "transparent"
        } else {
            squareShadow.style.backgroundColor = "transparent"
        }
    })

}

const root = document.querySelector('body');
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (window.location.pathname === '/ligaReliga') {
            console.log("Entrei")
            add()
        }
    });
});

observer.observe(root, {
    childList: true,
    subtree: true,
});