const newText = document.querySelector("p.x_c4e3081f>span").cloneNode(true)
document.querySelector(".button-container").insertAdjacentElement("afterend", newText)

if(window.innerWidth <= 663){
    document.querySelector(".conteudo-img").insertAdjacentElement("beforebegin", newText)
}