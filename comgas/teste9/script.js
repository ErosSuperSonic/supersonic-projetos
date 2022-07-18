function add() {
    if (document.querySelector("label[for='chkEmail']")) {
        const label = document.querySelector("label[for='chkEmail']")

        if (!label.querySelector(".shadow")) {
            label.insertAdjacentHTML("afterbegin", "<span class='shadow'></span>")
        }
    }

    const squareShadow = document.querySelector(".shadow")

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