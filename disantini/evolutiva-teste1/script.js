if (window.innerWidth <= 768) {
    try {
        function addBreadcrumb() {
            // Extraindo dados do breadcrumb
            const breadcrumb = document.querySelectorAll(".breadcrumb li")
            let myArray = []
            breadcrumb.forEach((li) => {
                let li1 = li.innerText.replaceAll("\n", "").replace(/( )+/g, '')
                myArray.push(li1)
            })

            const newBreadcrumb = `${myArray.join(" / ")}`

            insertBreadcrumbInHtml(newBreadcrumb)
        }

        function insertBreadcrumbInHtml(newBreadcrumb) {
            let newDiv = document.createElement("div")
            newDiv.classList.add("breadcrumb-ss")
            newDiv.append(newBreadcrumb)

            document.querySelector(".buttons-list").insertAdjacentElement("afterbegin", newDiv)
        }


        function alternateButtonsArrow() {

            let verifyExists = false;

            let myInterval = setInterval(() => {
                const button1 = document.querySelector("button.product-detail-controls.product-detail-next.slick-arrow")
                if (!verifyExists) {
                    if (button1) {
                        button1.innerHTML = `<img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/11318d651c5bc7dcd3f4100ce90aa7145f008633/disantini/images/arrow-right.svg">`
                        document.querySelector("button.product-detail-controls.product-detail-prev.slick-arrow").innerHTML = `<img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/11318d651c5bc7dcd3f4100ce90aa7145f008633/disantini/images/arrow-left.svg">`
                        verifyExists = true
                        clearInterval(myInterval)
                    }
                }
            }, 300)

        }


        function addBackgroundImg() {
            //Puxando dados com api
            const myCollection = document.querySelectorAll(".attribute.color")[0].children; //Pegando o container com os quadrados das imagens

            function chamarDados() {
                Array.from(myCollection).forEach((el) => {
                    //Begando os botões com as urls para as imagens
                    if (el.tagName === "BUTTON") {
                        fetch(el.attributes["data-url"].value)
                            .then(function (response) {
                                return response.json();
                            })
                            .then(function (data) {
                                el.querySelector(
                                    "span.color-value"
                                ).style.backgroundImage = `url('${data.product.images.large[0].absUrl}')`;
                            })
                            .catch((error) => {
                                console.log("Deu erro", error);
                            });
                    }
                });
            }

            chamarDados();
        }


        function getTitleButtonColor() {
            document.querySelectorAll(".attribute.color button").forEach((button, index) => {
                button.addEventListener("click", (el) => {
                    const colorButton = button.title
                    insertSelectedColorInHtml(colorButton)
                    insertElementSizeInHtml()
                    setActiveInButtons()
                    alternateButtonsArrow()
                })
            })
        }


        function insertSelectedColorInHtml(color = "") {
            if (!document.querySelector(".corSelecionadaSS")) {
                document.querySelectorAll(".product-detail-attributes")[0].insertAdjacentHTML("beforebegin", `<p class="corSelecionadaSS"><strong>Cor selecionada:</strong> ${color}</p>`)
            } else {
                document.querySelector(".corSelecionadaSS").innerHTML = `<strong>Cor selecionada:</strong> ${color}`
            }
        }


        function insertSelectedSize(size = "") {
            if (!document.querySelector(".tamanhoSelecionadoSS")) {
                document.querySelectorAll(".product-detail-attributes")[1].insertAdjacentHTML("beforebegin", `<p class="tamanhoSelecionadoSS"><strong>Tamanho selecionado:</strong> ${size}</p>`)
            } else {
                document.querySelector(".tamanhoSelecionadoSS").innerHTML = `<strong>Tamanho selecionado:</strong> ${size}`
            }
        }


        function clickInItemsDropDown() {
            document.querySelectorAll(".dropdown a").forEach((a) => {
                a.addEventListener("click", () => {
                    insertSelectedSize(a.attributes["data-attr-value"].value)
                    alternateButtonsArrow()
                })
            })
        }

        function insertElementSizeInHtml() {
            let myArray = []
            let newDiv = document.createElement("div");
            newDiv.classList.add("divTamanhos")



            setTimeout(() => {
                document.querySelectorAll(".dropdown a").forEach((a) => {
                    let link = a.cloneNode(true)
                    myArray.push(link)
                })


                if (document.querySelector(".divTamanhos")) {
                    document.querySelector(".divTamanhos").remove()
                }

                document.querySelectorAll(".product-detail-attributes")[1].insertAdjacentElement("afterend", newDiv)

                myArray.forEach((a) => {
                    let newButton = document.createElement("button")
                    newButton.innerText = (a.innerText).replaceAll("\n", "").replace(/( )+/g, '')

                    a.classList.forEach(el => newButton.classList.add(el))

                    // if (newButton.classList.contains("disabled")) {
                    //     newButton.disabled = true
                    // }
                    document.querySelector(".divTamanhos").appendChild(newButton)
                    insertDivRetireGratis()
                })

                setActiveInButtons()
            }, 500)

        }


        function setActiveInButtons() {

            document.querySelectorAll(".divTamanhos button").forEach((button, index) => {
                if (document.querySelector(".dropdown button").dataset.selected == button.innerHTML) {
                    button.classList.add("active")
                }

                button.addEventListener("click", () => {
                    console.log("Entrei aqui")


                    document.querySelectorAll(".divTamanhos button").forEach((button) => {
                        button.classList.remove("active")
                    })


                    document.querySelectorAll(".dropdown a")[index].click()
                    button.classList.add("active")
                })
            })
        }

        function clickInPhoto() {

            document.querySelectorAll(".product-detail-attributes")[0].querySelectorAll("button").forEach((el, index) => {
                if (el.innerText == "selecionado") {
                    document.querySelectorAll(".attribute.color button")[index].click()
                }
            })
        }


        function insertDivRetireGratis() {

            const newDiv = `
            <div class="dobraRetireGratis">
                <div>
                    <div class="boxImg">
                        <img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/11318d651c5bc7dcd3f4100ce90aa7145f008633/disantini/images/storefront.svg"
                            alt="">
                    </div>
                    <p><strong>Retire grátis</strong> em qualquer loja física.</p>
                </div>

                <div>
                    <div class="boxImg">
                        <img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/11318d651c5bc7dcd3f4100ce90aa7145f008633/disantini/images/verificado.svg"
                            alt="">
                    </div>
                    <div>
                        <p><strong>Compra garantida.</strong></p>
                        <p class="grey">Venda e entrega feita pela Di Santinni.</p>
                    </div>
                </div>
            `
            if (!document.querySelector(".dobraRetireGratis") && document.querySelector(".divTamanhos")) {
                document.querySelector(".divTamanhos").insertAdjacentHTML("afterend", newDiv)
            }

        }


        function adicionarAosFavoritos() {
            console.log("Nem entrei")
            if (!document.querySelector(".add-to-favorite-ss")) {

                console.log("Entreii")
                const newButtonFavorite = `
            <button class="add-to-favorite-ss">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14.4219 4.43126C14.2124 3.94632 13.9104 3.50687 13.5328 3.13751C13.1549 2.76705 12.7093 2.47265 12.2203 2.27032C11.7132 2.05969 11.1694 1.95187 10.6203 1.95314C9.85 1.95314 9.09844 2.16407 8.44531 2.56251C8.28906 2.65782 8.14062 2.76251 8 2.87657C7.85938 2.76251 7.71094 2.65782 7.55469 2.56251C6.90156 2.16407 6.15 1.95314 5.37969 1.95314C4.825 1.95314 4.2875 2.05939 3.77969 2.27032C3.28906 2.47345 2.84687 2.76564 2.46719 3.13751C2.08906 3.50645 1.787 3.94601 1.57812 4.43126C1.36094 4.93595 1.25 5.47189 1.25 6.02345C1.25 6.54376 1.35625 7.08595 1.56719 7.63751C1.74375 8.09845 1.99687 8.57657 2.32031 9.05938C2.83281 9.82345 3.5375 10.6203 4.4125 11.4281C5.8625 12.7672 7.29844 13.6922 7.35938 13.7297L7.72969 13.9672C7.89375 14.0719 8.10469 14.0719 8.26875 13.9672L8.63906 13.7297C8.7 13.6906 10.1344 12.7672 11.5859 11.4281C12.4609 10.6203 13.1656 9.82345 13.6781 9.05938C14.0016 8.57657 14.2562 8.09845 14.4312 7.63751C14.6422 7.08595 14.7484 6.54376 14.7484 6.02345C14.75 5.47189 14.6391 4.93595 14.4219 4.43126V4.43126Z"
                        fill="#4A4A4A" />
                </svg>
                Adicionar aos favoritos
            </button>
            `
                document.querySelector(".row.collapsible-attributes").insertAdjacentHTML("beforebegin", newButtonFavorite)

                document.querySelector(".add-to-favorite-ss").addEventListener("click", () => {
                    document.querySelector(".add-to-wish-list").click()
                })
            }
        }




        function displayElementInScreen() {
            document.querySelectorAll(".product-detail-attributes")[1].style.display = "none"
        }


        function lowerCaseSemJuros() {
            let verifyExists = false;

            let myInterval = setInterval(() => {
                if (!verifyExists) {
                    let vezesJuros = document.querySelector(".installments").innerHTML
                    if (vezesJuros) {
                        let newElement = vezesJuros.replace("ou", "<span>ou</span>")
                        document.querySelector(".installments").innerHTML = newElement

                        clearInterval(myInterval)
                        verifyExists = true
                    }
                }
            }, 300)
        }

        function divPromoGridDisplayNone() {
            if (document.querySelector(".product-promo-grid").children.length == 0) {
                document.querySelector(".product-promo-grid").style.display = "none"
            }
        }

        function getNameInterpreseForBanner() {
            //Puxando dados com api
            const myCollection = document.querySelectorAll(".attribute.color")[0].children; //Pegando o container com os quadrados das imagens

            Array.from(myCollection).forEach((el) => {
                //Begando os botões com as urls para as imagens
                if (el.tagName === "BUTTON") {
                    fetch(el.attributes["data-url"].value)
                        .then(function (response) {
                            return response.json();
                        })
                        .then(function (data) {
                            let brand = (data.product.brand).toLowerCase();
                            let productName = data.product.productName

                            let image = document.createElement("img")
                            image.classList.add("imageSS")
                            if (brand == "moleca" || productName.includes("moleca")) {
                                image.src = "https://github.com/ErosSuperSonic/supersonic-projetos/blob/main/disantini/evolutiva-teste1/image/moleca.png?raw=true"
                                insertImage(image)
                            } else if (brand == "zaxy" || productName.includes("zaxy")) {
                                image.src = "https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/c8eccfadb6b6cc094a264f23a37fc824ff0fc10b/disantini/evolutiva-teste1/image/zaxy_logo_new.svg"
                                insertImage(image)
                            } else if (brand == "nike" || productName.includes("nike")) {
                                image.src = "https://github.com/ErosSuperSonic/supersonic-projetos/blob/main/disantini/evolutiva-teste1/image/nike.png?raw=true"
                                insertImage(image)
                            } else if (brand == "havaianas" || productName.includes("havaianas")) {
                                image.src = "https://github.com/ErosSuperSonic/supersonic-projetos/blob/main/disantini/evolutiva-teste1/image/havaianas.png?raw=true"
                                insertImage(image)
                            } else if (brand == "olympikus" || productName.includes("olympikus")) {
                                image.src = "https://github.com/ErosSuperSonic/supersonic-projetos/blob/main/disantini/evolutiva-teste1/image/olympikus.png?raw=true"
                                insertImage(image)
                            } else if (brand == "kenner" || productName.includes("kenner")) {
                                image.src = "https://github.com/ErosSuperSonic/supersonic-projetos/blob/main/disantini/evolutiva-teste1/image/kenner.png?raw=true"
                                insertImage(image)
                            } else if (brand == "beira rio" || productName.includes("beira rio")) {
                                image.src = "https://github.com/ErosSuperSonic/supersonic-projetos/blob/main/disantini/evolutiva-teste1/image/beira-rio.png?raw=true"
                                insertImage(image)
                            } else if (brand == "adidas" || productName.includes("adidas")) {
                                image.src = "https://github.com/ErosSuperSonic/supersonic-projetos/blob/main/disantini/evolutiva-teste1/image/adidas.png?raw=true"
                                insertImage(image)
                            } else if (brand == "rider" || productName.includes("rider")) {
                                image.src = "https://github.com/ErosSuperSonic/supersonic-projetos/blob/main/disantini/evolutiva-teste1/image/rider.png?raw=true"
                                insertImage(image)
                            } else if (brand == "ipanema" || productName.includes("ipanema")) {
                                image.src = "https://github.com/ErosSuperSonic/supersonic-projetos/blob/main/disantini/evolutiva-teste1/image/ipanema.png?raw=true"
                                insertImage(image)
                            } else if (brand == "azaleia" || productName.includes("azaleia")) {
                                image.src = "https://github.com/ErosSuperSonic/supersonic-projetos/blob/main/disantini/evolutiva-teste1/image/Azaleia.png?raw=true"
                                insertImage(image)
                            } else if (brand == "vizzano" || productName.includes("vizzano")) {
                                image.src = "https://github.com/ErosSuperSonic/supersonic-projetos/blob/main/disantini/evolutiva-teste1/image/vizzano.png?raw=true"
                                insertImage(image)
                            } else if (brand == "all star" || productName.includes("all star")) {
                                image.src = "https://github.com/ErosSuperSonic/supersonic-projetos/blob/main/disantini/evolutiva-teste1/image/vizzano.png?raw=true"
                                insertImage(image)
                            }

                            function insertImage(image) {
                                if (!document.querySelector(".imageSS")) {
                                    document.querySelector("h1.product-name").insertAdjacentElement("beforebegin", image)
                                }
                            }
                        })
                        .catch((error) => {
                            console.log("Deu erro", error);
                        });
                }
            });

        }

        addBreadcrumb()
        alternateButtonsArrow()
        addBackgroundImg()
        getTitleButtonColor()
        insertSelectedColorInHtml()
        insertSelectedSize()
        clickInItemsDropDown()
        insertElementSizeInHtml()
        insertDivRetireGratis()
        displayElementInScreen()
        adicionarAosFavoritos()
        lowerCaseSemJuros()
        divPromoGridDisplayNone()
        getNameInterpreseForBanner()
    } catch (e) {
        console.error(e)
    }
}