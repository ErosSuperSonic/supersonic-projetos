const favorito = document.querySelector(
	"button.btn.icon-button.add-to-wish-list"
); //Instanciando botao favorido

const newBtnFavorito = favorito;

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

            <div class="venda-entrega">Venda e entrega feita pela Di Santinni.</div>
        </div>


        <div>
            <div class="box-img"><img
                    src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/2c26df284c435e0d09591b8599ba4272be750446/disantini/images/storefront.svg">
            </div>
            <p><strong><span>Retire grátis</span></strong> <span>em uma de nossas lojas.</span></p>
        </div>
    </div>
`
);

//Botão adicionar carrinho
const infoSs = document.querySelector(".infos-ss");
const btnAddCarrinho = document.querySelector(
	"button.btn.btn-sucess.btn-block.add-to-cart"
);

const newBtnAddCarrinho = btnAddCarrinho.cloneNode(true);

infoSs.insertAdjacentElement("afterend", newBtnAddCarrinho);
newBtnAddCarrinho.insertAdjacentElement("afterend", newBtnFavorito);

btnAddCarrinho.style.display = "none";

newBtnAddCarrinho.addEventListener("click", (e) => {
	btnAddCarrinho.click();
});

newBtnFavorito.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.4219 4.43126C14.2124 3.94632 13.9104 3.50687 13.5328 3.13751C13.1549 2.76705 12.7093 2.47265 12.2203 2.27032C11.7132 2.05969 11.1694 1.95187 10.6203 1.95314C9.85 1.95314 9.09844 2.16407 8.44531 2.56251C8.28906 2.65782 8.14062 2.76251 8 2.87657C7.85938 2.76251 7.71094 2.65782 7.55469 2.56251C6.90156 2.16407 6.15 1.95314 5.37969 1.95314C4.825 1.95314 4.2875 2.05939 3.77969 2.27032C3.28906 2.47345 2.84687 2.76564 2.46719 3.13751C2.08906 3.50645 1.787 3.94601 1.57812 4.43126C1.36094 4.93595 1.25 5.47189 1.25 6.02345C1.25 6.54376 1.35625 7.08595 1.56719 7.63751C1.74375 8.09845 1.99687 8.57657 2.32031 9.05938C2.83281 9.82345 3.5375 10.6203 4.4125 11.4281C5.8625 12.7672 7.29844 13.6922 7.35938 13.7297L7.72969 13.9672C7.89375 14.0719 8.10469 14.0719 8.26875 13.9672L8.63906 13.7297C8.7 13.6906 10.1344 12.7672 11.5859 11.4281C12.4609 10.6203 13.1656 9.82345 13.6781 9.05938C14.0016 8.57657 14.2562 8.09845 14.4312 7.63751C14.6422 7.08595 14.7484 6.54376 14.7484 6.02345C14.75 5.47189 14.6391 4.93595 14.4219 4.43126V4.43126Z" fill="#4A4A4A"/>
</svg> <strong>Adicionar aos favoritos</strong>`;
//adicionando botão de favorito

//Criando elemento para definir a cor para o usuário
document
	.querySelector(".attribute.color")
	.insertAdjacentHTML(
		"afterbegin",
		"<p class='paragrafo-color-add'><strong>Cor:</strong><span class='cor-value'></span></p>"
	);
document
	.querySelector(".product-detail-attributes div")
	.classList.replace("col-12", "col-10");

document.querySelector(".cor-value").innerHTML = document.querySelectorAll(
	"button.color-attribute"
)[0].title;

//Pegando cor dos botões
document.querySelectorAll("button.color-attribute").forEach((button) => {
	button.addEventListener("click", () => {
		document.querySelector(".cor-value").innerHTML = button.title; //Definindo nome da cor no Desktop
		if (document.querySelectorAll(".cor-value")[1]) {
			document.querySelectorAll(".cor-value")[1].innerHTML = button.title; //Definindo nome da cor no mobile
		}
	});
});

if (window.innerWidth <= "992") {
	const myTag = document.querySelector(
		".product-breadcrumb.col.hidden-sm-down.d-flex.justify-content-center"
	);
	const newTag = myTag.cloneNode(true);
	newTag.style.border = "none !important";

	document
		.querySelector(".buttons-list")
		.insertAdjacentElement("afterbegin", newTag);
	document.querySelectorAll(
		".product-breadcrumb.col.hidden-sm-down.d-flex.justify-content-center"
	)[1].style.display = "none !important";
	document.querySelectorAll("ol.breadcrumb")[1].style.display = "none";
}

if (window.innerWidth <= 600) {
	const linhaCarrousel = document.querySelector("div.col-10");
	linhaCarrousel.classList.replace("col-10", "col-12");
	linhaCarrousel.classList.add("caroussel-elements");

	document
		.querySelectorAll(".product-detail-attributes")[1]
		.insertAdjacentHTML(
			"afterbegin",
			"<p class='paragrafo-color-add'><strong>Cor:</strong><span class='cor-value'></span></p>"
		);
	document.querySelectorAll(".cor-value")[1].innerHTML =
		document.querySelectorAll("button.color-attribute")[0].title;

	document.querySelectorAll(".paragrafo-color-add")[0].style.display = "none";

	if (document.querySelector(".product-name").clientHeight < 82) {
		document.querySelectorAll(".paragrafo-color-add")[1].style.top =
			"200px";
	} else if (document.querySelector(".product-name").clientHeight <= 83) {
		document.querySelectorAll(".paragrafo-color-add")[1].style.top =
			"229px";
	} else if (
		document.querySelector(".product-name").clientHeight > 83 &&
		document.querySelector(".product-name").clientHeight <= 114
	) {
		document.querySelectorAll(".paragrafo-color-add")[1].style.top =
			"262px";
	} else if (
		document.querySelector(".product-name").clientHeight > 114 &&
		document.querySelector(".product-name").clientHeight <= 145
	) {
		document.querySelectorAll(".paragrafo-color-add")[1].style.top =
			"263px";
	}
}

//Verificando se existe desconto
if (document.querySelectorAll(".strike-through")) {
	document.querySelector(".prices .price span span.sales").style.color =
		"#dd0031 !important";
} else {
	document.querySelector(".prices .price span span.sales").style.color =
		"#4E4E50 !important";
}

if (window.innerWidth <= 355) {
	document.querySelectorAll(
		".attributes .row .caroussel-elements .attribute.color"
	)[0].style.overflowX = "scroll";
}

//Mudando sacola de compra
document.querySelectorAll(
	"#cartModal .modal-dialog .modal-content .cart-totals .label p"
)[1].innerHTML = "subtotal";

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

//Correção tirando botão de adicionar a sacola nos itens que não são selecionaveis
function verificarBotaoAdicionarCarrinho() {

	let verificarInterval = false;
	const myInterval = setInterval(() => {
		if (!verificarInterval) {
			const buttonUnselectable = document.querySelectorAll(
				".attributes .row .caroussel-elements .color-attribute"
			);
			const buttonDesktop = document.querySelectorAll(
				".product-detail-attributes button.color-attribute"
			);

			if (buttonUnselectable || buttonDesktop) {
				if (buttonUnselectable.length >= 1) {
					teste();
				} else {
					teste();
				}

				verificarInterval = true;
				clearInterval(myInterval);
			}
		}
	}, 300);
}

verificarBotaoAdicionarCarrinho();


function teste() {
	const buttonUnselectable = document.querySelectorAll(
		".attributes .row .caroussel-elements .color-attribute"
	);
	const buttonDesktop = document.querySelectorAll(
		".product-detail-attributes button.color-attribute"
	);

	buttonUnselectable.forEach((button) => {
		button.addEventListener("click", () => {
			const spans = button.querySelectorAll(
				"span.color-value.swatch-container.swatch-circle.unselectable"
			);
			//achandoClick();
			if (spans.length >= 1) {
				document.querySelector(".btn-sucess").style.display = "none";
			} else {
				document.querySelector(".btn-sucess").style.display = "flex";
			}
		});
	});

	buttonDesktop.forEach((button) => {
		button.addEventListener("click", () => {
			const spans = button.querySelectorAll(
				"span.color-value.swatch-container.swatch-circle.unselectable"
			);
			//achandoClick();
			if (spans.length >= 1) {
				document.querySelector(".btn-sucess").style.display = "none";
			} else {
				document.querySelector(".btn-sucess").style.display = "flex";
			}
		});
	});
}

document
	.querySelectorAll(".dropdown-item.dropdown-item-variation")
	.forEach((button) => {
		button.addEventListener("click", () => {
			teste();
		});
	});

document
	.querySelector(".dropdown-toggle.custom-select.form-control")
	.addEventListener("click", () => {
		if (document.querySelectorAll(".dropdown-menu.show a")) {
			let verificarInterval = false;
			let achandoClickInterval = setInterval(() => {
				if (!verificarInterval) {
					const button = document.querySelectorAll(
						".dropdown-menu.show a"
					);

					if (button) {
						verificarInterval = true;
						clearInterval(achandoClickInterval);
						button.forEach((a) => {
							a.addEventListener("click", () => {
								if (
									document.querySelector(
										".color-value.swatch-container.swatch-circle.selected"
									)
								) {
									clicar();
									teste()
								}
							});
						});
					}
				}
			}, 300);
		}
	});

function clicar() {
	let verificarInterval = false;
	let achandoClickInterval = setInterval(() => {
		
		if (!verificarInterval) {
			
			const button = document.querySelector(".color-value.swatch-container.swatch-circle.selected");
			if (button) {
				button.click()
				verificarInterval = true;
				clearInterval(achandoClickInterval);
			}
		}
	}, 300);
}
