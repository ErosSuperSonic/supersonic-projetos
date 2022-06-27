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

        addBackgroundImg()
