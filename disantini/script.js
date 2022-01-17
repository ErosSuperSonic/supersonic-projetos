const favorito = document.querySelector("button.btn.icon-button.add-to-wish-list"); //Instanciando botao favorido

const newBtnFavorito = favorito;

//botoes de quantidade e tamanho
const tamanho = document.querySelector("div.attributes>div:nth-of-type(3)>div:nth-of-type(1)");
const quantidade = document.querySelector("div.quantity");

tamanho.classList.replace("col-6", "col-5");
quantidade.classList.replace("col-6", "col-3");

tamanho.insertAdjacentHTML(
	"afterend",
	`<button class="guia-tamanho-ss col-4">
        <img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/main/disantini/images/cabide.png"><p>Guia de tamanhos</p>
    </button>`
);


//Adionando e Ativando popup
const btnGuiaTamanhos = document.querySelector(".guia-tamanho-ss");
const maincontent = document.querySelector("#maincontent");

maincontent.insertAdjacentHTML(
	"afterend",
	`<div class="guia-tamanhos-ss-popup">
    <div class="container-popup">
        <div class="title">
            <p>Guia de tamanhos</p>

            <div class="close-popup-ss">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="56.936"
                    height="56.936" viewBox="0 0 56.936 56.936">
                    <g id="Grupo_665" data-name="Grupo 665" transform="translate(8 8)">
                        <g transform="matrix(1, 0, 0, 1, -8, -5)">
                            <circle id="Elipse_50-2" data-name="Elipse 50" cx="19.468" cy="19.468" r="19.468"
                                transform="translate(8 5)" fill="#fff"></circle>
                        </g>
                        <path id="Caminho_110" data-name="Caminho 110"
                            d="M-2463.8,51.342l-4.462-4.462,4.261-4.263a2.874,2.874,0,0,0,0-4.067,2.878,2.878,0,0,0-4.068,0l-4.26,4.262-4.461-4.462a2.88,2.88,0,0,0-4.07,0,2.878,2.878,0,0,0,0,4.068l4.463,4.462-4.262,4.262a2.877,2.877,0,0,0,0,4.067,2.864,2.864,0,0,0,2.034.842,2.871,2.871,0,0,0,2.036-.844l4.26-4.26,4.462,4.46a2.86,2.86,0,0,0,2.034.842,2.864,2.864,0,0,0,2.034-.844A2.873,2.873,0,0,0-2463.8,51.342Z"
                            transform="translate(2491.797 -27.414)" fill="#4e4e50"></path>
                    </g>
                </svg>
            </div>
        </div>

        <div class="element">
            <table class="table">
                <thead class="bg-grey-ss">
                  <tr>
                    <th class="text-center" scope="col" >Tamanho</th>
                    <th class="text-center" scope="col">EUA</th>
                    <th class="text-center" scope="col" >Comprimento do pé (cm)</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td class="text-center" scope="row">34,5</th>
                    <td class="text-center">34,5</td>
                    <td class="text-center">22</td>
                  </tr>

                  <tr class="bg-grey-ss">
                    <td class="text-center" scope="row">35</th>
                    <td class="text-center">4,5</td>
                    <td class="text-center">22,5</td>
                  </tr>

                  <tr>
                    <td class="text-center" scope="row">36</th>
                    <td class="text-center">5</td>
                    <td class="text-center">23,5</td>
                  </tr>

                  <tr class="bg-grey-ss">
                    <td class="text-center" scope="row">37</th>
                    <td class="text-center">6</td>
                    <td class="text-center">24</td>
                  </tr>


                  <tr>
                    <td class="text-center" scope="row">37,5</th>
                    <td class="text-center">6,5</td>
                    <td class="text-center">24,5</td>
                  </tr>

                  <tr class="bg-grey-ss">
                    <td class="text-center" scope="row">38</th>
                    <td class="text-center">7</td>
                    <td class="text-center">25</td>
                  </tr>

                  <tr>
                    <td class="text-center" scope="row">39</th>
                    <td class="text-center">7,5</td>
                    <td class="text-center">25,5</td>
                  </tr>

                  <tr class="bg-grey-ss">
                    <td class="text-center" scope="row">39,5</th>
                    <td class="text-center">8</td>
                    <td class="text-center">26</td>
                  </tr>

                  <tr>
                    <td class="text-center" scope="row">40</th>
                    <td class="text-center">8,5</td>
                    <td class="text-center">26,5</td>
                  </tr>

                  <tr class="bg-grey-ss">
                    <td class="text-center" scope="row">40,5</th>
                    <td class="text-center">9</td>
                    <td class="text-center">27</td>
                  </tr>


                  <tr>
                    <td class="text-center" scope="row">41</th>
                    <td class="text-center">9,5</td>
                    <td class="text-center">27,5</td>
                  </tr>

                  <tr class="bg-grey-ss">
                    <td class="text-center" scope="row">42</th>
                    <td class="text-center">10,5</td>
                    <td class="text-center">28</td>
                  </tr>

                  

                  <tr>
                    <td class="text-center" scope="row">42,5</th>
                    <td class="text-center">10,5</td>
                    <td class="text-center">28,5</td>
                  </tr>

                  <tr class="bg-grey-ss">
                    <td class="text-center" scope="row">43</th>
                    <td class="text-center">11</td>
                    <td class="text-center">28</td>
                  </tr>


            
                </tbody>
              </table>
              
        </div>
    </div>
</div>
`
);

btnGuiaTamanhos.addEventListener("click", () => {
    document.querySelector(".guia-tamanhos-ss-popup").classList.toggle("active-ss");
});

const btnClosePopup = document.querySelector(".close-popup-ss");
btnClosePopup.addEventListener("click", () => {
	document.querySelector(".guia-tamanhos-ss-popup").classList.toggle("active-ss");
});


//======== Adicionando nova seção ========//
document.querySelector("div.attributes>div:nth-of-type(3)").insertAdjacentHTML(
	"afterend",
	`
    <div class="infos-ss">
        <div id="container-flex">
            <div style="align-items: center; display: flex;">
                <div class="box-img">
                    <img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/main/disantini/images/verificado.svg" alt="">
                </div>
                <p><strong><span>Compra garantida.</span></strong></p>
            </div>

            <div class="venda-entrega">Venda e entrega feita pela <a href="#">Di Santinni.</a></div>
        </div>


        <div>
            <div class="box-img"><img
                    src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/2c26df284c435e0d09591b8599ba4272be750446/disantini/images/storefront.svg">
            </div>
            <p><strong><span>Retire grátis</span></strong> <span>em qualquer loja física.</span></p>
        </div>
    </div>
`
);


//Botão adicionar carrinho
const infoSs = document.querySelector(".infos-ss");
const btnAddCarrinho = document.querySelector("button.btn.btn-sucess.btn-block.add-to-cart");

const newBtnAddCarrinho = btnAddCarrinho.cloneNode(true)

infoSs.insertAdjacentElement("afterend", newBtnAddCarrinho);
newBtnAddCarrinho.insertAdjacentElement("afterend", newBtnFavorito);

btnAddCarrinho.style.display = "none" 

newBtnAddCarrinho.addEventListener("click", e =>{
    btnAddCarrinho.click()
})




newBtnFavorito.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.4219 4.43126C14.2124 3.94632 13.9104 3.50687 13.5328 3.13751C13.1549 2.76705 12.7093 2.47265 12.2203 2.27032C11.7132 2.05969 11.1694 1.95187 10.6203 1.95314C9.85 1.95314 9.09844 2.16407 8.44531 2.56251C8.28906 2.65782 8.14062 2.76251 8 2.87657C7.85938 2.76251 7.71094 2.65782 7.55469 2.56251C6.90156 2.16407 6.15 1.95314 5.37969 1.95314C4.825 1.95314 4.2875 2.05939 3.77969 2.27032C3.28906 2.47345 2.84687 2.76564 2.46719 3.13751C2.08906 3.50645 1.787 3.94601 1.57812 4.43126C1.36094 4.93595 1.25 5.47189 1.25 6.02345C1.25 6.54376 1.35625 7.08595 1.56719 7.63751C1.74375 8.09845 1.99687 8.57657 2.32031 9.05938C2.83281 9.82345 3.5375 10.6203 4.4125 11.4281C5.8625 12.7672 7.29844 13.6922 7.35938 13.7297L7.72969 13.9672C7.89375 14.0719 8.10469 14.0719 8.26875 13.9672L8.63906 13.7297C8.7 13.6906 10.1344 12.7672 11.5859 11.4281C12.4609 10.6203 13.1656 9.82345 13.6781 9.05938C14.0016 8.57657 14.2562 8.09845 14.4312 7.63751C14.6422 7.08595 14.7484 6.54376 14.7484 6.02345C14.75 5.47189 14.6391 4.93595 14.4219 4.43126V4.43126Z" fill="#4A4A4A"/>
</svg> <strong>Adicionar aos favoritos</strong>`;
//adicionando botão de favorito



//Criando elemento para definir a cor para o usuário
document.querySelector(".attribute.color").insertAdjacentHTML("afterbegin","<p class='paragrafo-color-add'><strong>Cor:</strong><span class='cor-value'></span></p>");
document.querySelector(".product-detail-attributes div").classList.replace("col-12", "col-10");

document.querySelector(".cor-value").innerHTML = document.querySelectorAll("button.color-attribute")[0].title;

//Pegando cor dos botões
document.querySelectorAll("button.color-attribute").forEach((button) => {
    button.addEventListener("click", () => {
		document.querySelector(".cor-value").innerHTML = button.title; //Definindo nome da cor no Desktop
        document.querySelectorAll(".cor-value")[1].innerHTML =  button.title; //Definindo nome da cor no mobile
	});
});





if (window.innerWidth <= "992") {
    tamanho.classList.replace("col-5", "col-6");
    quantidade.classList.replace("col-3", "col-6");

    btnGuiaTamanhos.style.display="none"
    btnGuiaTamanhos.classList.remove("col-4")

    const btnGuiaTamanhosMobile = btnGuiaTamanhos;
    btnGuiaTamanhosMobile.style.display = "flex"
    infoSs.insertAdjacentElement("beforebegin", btnGuiaTamanhosMobile)




    
    const myTag = document.querySelector(".product-breadcrumb.col.hidden-sm-down.d-flex.justify-content-center")
    const newTag = myTag.cloneNode(true)
    newTag.style.border= "none !important"

    document.querySelector(".buttons-list").insertAdjacentElement("afterbegin",newTag)
    document.querySelectorAll(".product-breadcrumb.col.hidden-sm-down.d-flex.justify-content-center")[1].style.display = "none !important"
    document.querySelectorAll("ol.breadcrumb")[1].style.display = "none"
}

    
if(window.innerWidth <= 600){
    const linhaCarrousel = document.querySelector("div.col-10")
    linhaCarrousel.classList.replace("col-10", "col-12")
    linhaCarrousel.classList.add("caroussel-elements")

    document.querySelectorAll(".product-detail-attributes")[1].insertAdjacentHTML("afterbegin","<p class='paragrafo-color-add'><strong>Cor:</strong><span class='cor-value'></span></p>");
    document.querySelectorAll(".cor-value")[1].innerHTML = document.querySelectorAll("button.color-attribute")[0].title;

    // let contadorPosition = 0;
    // document.querySelectorAll("div.attributes>div:nth-of-type(2)>div .swatch-value").forEach(() =>{
    //     contadorPosition++
    //     if(contadorPosition == 2 || contadorPosition == 3){
    //         document.querySelectorAll(".paragrafo-color-add")[1].style.top = '170px'
    //     }
    // })

    document.querySelectorAll(".paragrafo-color-add")[0].style.display = 'none'

    if(document.querySelector(".product-name").clientHeight < 82){
        document.querySelectorAll(".paragrafo-color-add")[1].style.top = '170px'
    } 
    else if(document.querySelector(".product-name").clientHeight < 83){
        document.querySelectorAll(".paragrafo-color-add")[1].style.top = '195px'
    }else if(document.querySelector(".product-name").clientHeight > 83 && document.querySelector(".product-name").clientHeight <= 114){
        document.querySelectorAll(".paragrafo-color-add")[1].style.top = '233px'
    }else if(document.querySelector(".product-name").clientHeight > 114 && document.querySelector(".product-name").clientHeight <= 145){
        document.querySelectorAll(".paragrafo-color-add")[1].style.top = '263px'
    }
}

//Verificando se existe desconto
if(document.querySelectorAll(".strike-through")){
    document.querySelector(".prices .price span span.sales").style.color = "#dd0031 !important"
}else{
    document.querySelector(".prices .price span span.sales").style.color = "#4E4E50 !important"
}

if(window.innerWidth <= 355){
    document.querySelectorAll(".attributes .row .caroussel-elements .attribute.color")[0].style.overflowX = "scroll"
}



//Mudando sacola de compra
document.querySelectorAll("#cartModal .modal-dialog .modal-content .cart-totals .label p")[1].innerHTML = "subtotal"




//Puxando dados com api

const myCollection = document.querySelectorAll(".attribute.color")[0].children; //Pegando o container com os quadrados das imagens
const arrImages = [];

function chamarDados() {
        Array.from(myCollection).forEach((el) => {
            //Begando os botões com as urls para as imagens
            if (el.tagName === "BUTTON") {
                fetch(el.attributes["data-url"].value)
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (data) {
                        el.querySelector("span.color-value").style.backgroundImage = `url('${data.product.images.large[0].absUrl}')`;
                    })
                    .catch((error) => {
                        console.log("Deu erro", error);
                    });
            }
        })
    
}


chamarDados();




// Hotjar
var x = 0;
var hjCheck = setInterval(function() { // loop para procurar o Hotjar
  x++;
  if(x > 40) { // se depois de tentar 40 vezes não der certo, cancela o loop
    clearInterval(hjCheck);
  }
  if(typeof hj === "function") { // ao encontrar o Hotjar...
    hj('event', 'ss_variant'); // dispara o evento...
    clearInterval(hjCheck); // e cancela o loop
  }
}, 300); // o loop roda a cada 300ms
// 40 vezes 300 = 12.000 = 12 segundos tentando encontrar o Hotjar








