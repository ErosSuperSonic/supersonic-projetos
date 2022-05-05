

function etapa4MudarTextos() {
    //Expectativas
    let verifyLabels = false;
    let setarLabels = setInterval(() => {
        if (!verifyLabels) {
            try {
                const labels = document.querySelectorAll("#simulador_app > soma-container > soma-grid > soma-grid-row > soma-grid-col:nth-child(1) > soma-container > soma-grid > soma-grid-row > soma-grid-col > soma-radio-group > soma-radio")
                if (labels) {
                    labels.forEach((el, index) => {
                        if (!el.shadowRoot.querySelector("label").querySelector(".svgInterrogation")) {
                            el.shadowRoot.querySelector("label > span").insertAdjacentHTML("beforebegin", interrogation)
                            el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").style.position = "absolute"
                            el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").style.cursorPointer = "all"
                            el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").style.zIndex = "10"

                            if (window.innerWidth >= 1100) {
                                if (index == 0) {
                                    el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").style.right = "-89px"

                                    el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").addEventListener("mouseover", () => {
                                        el.shadowRoot.querySelector("label > span").innerHTML = "Ganhar 10% de retorno sem risco"
                                        el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").style.right = "-78px"

                                    })
                                    el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").addEventListener("mouseout", () => {
                                        el.shadowRoot.querySelector("label > span").innerHTML = "100% de chance de ganhar 10%"
                                        el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").style.right = "-89px"

                                    })

                                } else if (index == 1) {
                                    el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").style.right = "-37px"

                                    el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").addEventListener("mouseover", () => {
                                        el.shadowRoot.querySelector("label > span").innerHTML = "Ganhar entre 5% a 20% com pouco risco"
                                        el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").style.right = "-27px"
                                    })
                                    el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").addEventListener("mouseout", () => {
                                        el.shadowRoot.querySelector("label > span").innerHTML = "Possibilidade de ganhar entre 5%-20%"
                                        el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").style.right = "-45px"
                                    })
                                } else if (index == 2) {
                                    el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").style.right = "-47px"
                                    el.shadowRoot.querySelector("label > span").innerHTML = "Possibilidade de ganhar entre 0%-25%"

                                    el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").addEventListener("mouseover", () => {
                                        el.shadowRoot.querySelector("label > span").innerHTML = "Ganhar até 25% com médio risco"
                                        el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").style.right = "-80px"

                                    })
                                    el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").addEventListener("mouseout", () => {
                                        el.shadowRoot.querySelector("label > span").innerHTML = "Possibilidade de ganhar entre 0%-25%"
                                        el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").style.right = "-47px"

                                    })
                                } else if (index == 3) {
                                    el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").style.right = "3px"
                                    el.shadowRoot.querySelector("label > span").style.width = "70%"
                                    el.shadowRoot.querySelector("label > span").innerHTML = "Possibilidade de perder 10% ou ganhar até 40%"

                                    el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").addEventListener("mouseover", () => {
                                        el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").style.right = "-26px"
                                        el.shadowRoot.querySelector("label > span").innerHTML = "Ganhar até 40% com risco de perder 10%"

                                    })
                                    el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").addEventListener("mouseout", () => {
                                        el.shadowRoot.querySelector("label > span").innerHTML = "Possibilidade de perder 10% ou ganhar até 40%"
                                        el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").style.right = "3px"

                                    })

                                }
                            } else {
                                console.log("ENTREII")

                                if (index == 0) {
                                    el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").style.right = "-89px"

                                    el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").addEventListener("mouseover", () => {
                                        el.shadowRoot.querySelector("label > span").innerHTML = "Ganhar 10% de retorno sem risco"
                                        el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").style.right = "-78px"

                                    })
                                    el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").addEventListener("mouseout", () => {
                                        el.shadowRoot.querySelector("label > span").innerHTML = "100% de chance de ganhar 10%"
                                        el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").style.right = "-89px"

                                    })

                                } else if (index == 1) {
                                    el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").style.right = "-37px"

                                    el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").addEventListener("mouseover", () => {
                                        el.shadowRoot.querySelector("label > span").innerHTML = "Ganhar entre 5% a 20% com pouco risco"
                                        el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").style.right = "-27px"
                                    })
                                    el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").addEventListener("mouseout", () => {
                                        el.shadowRoot.querySelector("label > span").innerHTML = "Possibilidade de ganhar entre 5%-20%"
                                        el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").style.right = "-45px"
                                    })
                                } else if (index == 2) {
                                    el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").style.right = "-47px"
                                    el.shadowRoot.querySelector("label > span").innerHTML = "Possibilidade de ganhar entre 0%-25%"

                                    el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").addEventListener("mouseover", () => {
                                        el.shadowRoot.querySelector("label > span").innerHTML = "Ganhar até 25% com médio risco"
                                        el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").style.right = "-80px"

                                    })
                                    el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").addEventListener("mouseout", () => {
                                        el.shadowRoot.querySelector("label > span").innerHTML = "Possibilidade de ganhar entre 0%-25%"
                                        el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").style.right = "-47px"

                                    })
                                } else if (index == 3) {
                                    el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").style.right = "3px"
                                    el.shadowRoot.querySelector("label > span").style.width = "70%"
                                    el.shadowRoot.querySelector("label > span").innerHTML = "Possibilidade de perder 10% ou ganhar até 40%"

                                    el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").addEventListener("mouseover", () => {
                                        el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").style.right = "-26px"
                                        el.shadowRoot.querySelector("label > span").innerHTML = "Ganhar até 40% com risco de perder 10%"

                                    })
                                    el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").addEventListener("mouseout", () => {
                                        el.shadowRoot.querySelector("label > span").innerHTML = "Possibilidade de perder 10% ou ganhar até 40%"
                                        el.shadowRoot.querySelector("label").querySelector(".svgInterrogation").style.right = "3px"

                                    })

                                }
                            }



                        }
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


const root = document.querySelector('.home');
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.target.classList.contains("home")) {
            etapa4MudarTextos()
        }
    });
});

observer.observe(root, {
    childList: true,
    subtree: true,
});