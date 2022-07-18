function popupElementCopy(text) {
    const element = document.querySelector(".elementCopy")
    element.innerHTML = text
    element.classList.add("active")
    setTimeout(() => {
        element.classList.remove("active")
    }, 1000)
}

function copyCodeUser() {
    let btnCopyCodUser = document.querySelector(".copyCodeUser")
    let verifyInterval = false

    const myInterval = setInterval(() => {
        let textUserCode = document.querySelector(".userCode span")
        if (!verifyInterval) {
            if (myInterval) {
                console.log("textUserCode", textUserCode)
                dataLayer.map((el) => {
                    if (el.codigoUsuario) {
                        textUserCode.innerHTML = el.codigoUsuario
                    }
                })


                btnCopyCodUser.addEventListener("click", () => {
                    navigator.clipboard.writeText(textUserCode).then(() => {
                        popupElementCopy("Código do usuário copiado")
                    });
                })
                verifyInterval = true
                clearInterval(myInterval)
            }
        }
    }, 300)




    console.log(textUserCode)
}

function copyNumberProtocol() {
    const btnCopyNumberProtocol = document.querySelector(".copyNumberProtocol")

    let verifyInterval = false
    const myInterval = setInterval(() => {
        const protocoloNumber = document.querySelector(".protocolo-container h3").innerText
        if (!verifyInterval) {
            if (protocoloNumber) {
                console.log("protocoloNumber", protocoloNumber)
                btnCopyNumberProtocol.addEventListener("click", () => {
                    navigator.clipboard.writeText(protocoloNumber).then(() => {
                        popupElementCopy("Protocolo copiado")
                    });
                })
                verifyInterval = true
                clearInterval(myInterval)
            }
        }
    }, 300)

}







const root = document.querySelector('body');
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.target.classList.contains("troca-finalizado-text")) {
            copyCodeUser()
            copyNumberProtocol()
        }
    });
});

observer.observe(root, {
    childList: true,
    subtree: true,
});



function insertSection(){
    
}
if (document.querySelector(".linha-informacoes[_ngcontent-serverApp-c248]")) {

} else if (document.querySelector(".avaliacao-servico-container[_ngcontent-serverApp-c247]")){

}