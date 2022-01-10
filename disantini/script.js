const favorito = document.querySelector("button.btn.icon-button.add-to-wish-list") //Instanciando botao favorido



//botoes de quantidade e tamanho
const tamanho = document.querySelector("div.attributes>div:nth-of-type(3)>div:nth-of-type(1)")
const quantidade = document.querySelector("div.quantity")

tamanho.classList.replace("col-6", "col-4")
quantidade.classList.replace("col-6", "col-4")

tamanho.insertAdjacentHTML("afterend", 
`<button class="guia-tamanho-ss col-4">
<img src=""><p>Guia de tamanhos</p>
</button>`)