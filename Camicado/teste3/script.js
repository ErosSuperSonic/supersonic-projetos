const inputProcura = document.querySelector("div.form-wrapper")
const logo = document.querySelector("img#logo")
const headerContainer = document.querySelector(".header-main__wrapper.header__background-color-modifier")
const hamburgerItem = document.querySelector(".hamburguer-menu__container")
const cart = document.querySelector("li.minicart.dropdown")





window.addEventListener("scroll", () => {
    if (window.scrollY >= 105) {
        addClassInForm()
    } else {
        removeClassInForm()
    }

})

function addClassInForm() {
    inputProcura.style.position = "absolute"
    inputProcura.style.left = "48.5%"
    inputProcura.style.transform = "translateX(-50%)"
    inputProcura.style.top = "7px"
    inputProcura.style.width = "72%"


    logo.style.opacity = "0"
    logo.style.pointerEvents = "none"

    headerContainer.style.height = "55px";


    hamburgerItem.style.position = "relative"
    hamburgerItem.style.top = "-10px"


    cart.style.top = "-10px"

    if (!headerContainer.classList.contains("inputAtivo")) {
        headerContainer.classList.add("inputAtivo")
    }
}

function removeClassInForm() {
    inputProcura.style.position = "relative"

    inputProcura.style.left = "0%"
    inputProcura.style.transform = "translateX(0%)"
    inputProcura.style.top = "0px"
    inputProcura.style.width = "auto"

    logo.style.opacity = "1"
    logo.style.pointerEvents = "All"


    headerContainer.style.height = "auto";

    hamburgerItem.style.position = "relative"
    hamburgerItem.style.top = "0px"

    cart.style.top = "0px"

    if (headerContainer.classList.contains("inputAtivo")) {
        headerContainer.classList.remove("inputAtivo")
    }

}


function headerFixoTop() {
    document.querySelector(".header-main__wrapper").addEventListener("click", (e) => {
        if ((e.pageX >= 334 && e.pageX <= 356) || (e.pageX >= 250)) {
            document.querySelector("i.icon-ic-close").click()
        } else if (e.pageX >= 380 && e.pageX <= 400) {
            document.querySelector("#btn-send-icon").click()
        }
    })
}

function headerFixoSite() {
    document.querySelector(".header-main__wrapper").addEventListener("click", (e) => {
        if (e.pageX >= 291 && e.pageX <= 302) {
            document.querySelector("i.icon-ic-close").click()
        } else if (e.pageX >= 303 && e.pageX <= 350) {
            document.querySelector("#btn-send-icon").click()
        }
    })
}

window.addEventListener("scroll", () => {
    if (window.scrollY >= 105) {
        headerFixoTop()
    } else {
        headerFixoSite()
    }
})