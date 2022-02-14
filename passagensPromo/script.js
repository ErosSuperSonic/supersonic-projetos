if (window.innerWidth <= 680) {

	createFloatingFilter();
	activyModaFiltro();
	encontrandoBotao();
	popupAlertDisplayNone();
	createMaisUsadosInListFilters();
}


function createFloatingFilter() {
	const filtroFlutuante = `<div class="popupFlutuanteFiltro">
	<p>Filtros</p>
	<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M20 39.4901C9.23301 39.4901 0.5 30.7617 0.5 19.9951C0.5 9.2284 9.23301 0.5 20 0.5C30.767 0.5 39.5 9.2284 39.5 19.9951C39.5 30.7617 30.767 39.4901 20 39.4901Z"
			fill="#FF8A00" stroke="#FF8A00" />
		<path d="M21.8344 24.6505H10" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M29.2857 24.6505H26.2175" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
		<path
			d="M24.0259 26.9934C25.2363 26.9934 26.2175 25.9443 26.2175 24.6502C26.2175 23.356 25.2363 22.3069 24.0259 22.3069C22.8155 22.3069 21.8344 23.356 21.8344 24.6502C21.8344 25.9443 22.8155 26.9934 24.0259 26.9934Z"
			stroke="white" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M14.8214 14.3403H10" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M29.2857 14.3403H19.2045" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
		<path
			d="M17.0129 16.6835C18.2233 16.6835 19.2045 15.6344 19.2045 14.3403C19.2045 13.0462 18.2233 11.9971 17.0129 11.9971C15.8025 11.9971 14.8214 13.0462 14.8214 14.3403C14.8214 15.6344 15.8025 16.6835 17.0129 16.6835Z"
			stroke="white" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
</div>`;
	document.querySelector(".contentbox").insertAdjacentHTML("beforeend", filtroFlutuante);

	//adicionando action no button flutuante

	const popupFiltro = document.querySelector(".popupFlutuanteFiltro");

	popupFiltro.addEventListener("click", () => {
		document.querySelector("div.resultsfilters button.filter_mobile_button").click();
		createButtonInModal()
		modifyImageInPopup()
	});


	document.addEventListener("scroll", () => {
		if (window.scrollY >= 440) {
			popupFiltro.style.opacity = 1;
			popupFiltro.style.pointerEvents = "all";
		} else {
			popupFiltro.style.opacity = "0";
			popupFiltro.style.pointerEvents = "none";
		}
	});
}

function encontrandoBotao() {

	const iconeFilter = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <g fill="none" fill-rule="evenodd">
                                <path d="M0 0h24v24H0z"/>
                                <path fill="#FFFFFF" fill-rule="nonzero" d="M3 15h10v1H3zM16 15h5v1h-5z"/>
                                <circle cx="14.5" cy="15.5" r="2.5" stroke="#FFFFFF"/>
                                <path fill="#FFFFFF" fill-rule="nonzero" d="M3 8h4v1H3zM10 8h11v1H10z"/>
                                <circle cx="8.5" cy="8.5" r="2.5" stroke="#fff"/>
                            </g>
                        </svg>`;

	let encontrouButton = false;

	const encontrandoBotao = setInterval(() => {
		if (!encontrouButton) {
			const mobileButton = document.querySelector(
				".filter_mobile_button"
			);
			if (mobileButton) {
				mobileButton.innerHTML = iconeFilter; //Deixando o filtro apenas com o icone
				mobileButton.insertAdjacentHTML("afterbegin", "<p>Filtro</p>");
				encontrouButton = true;
				clearInterval(encontrandoBotao);
			}
		}
	}, 300);
}

function createMaisUsadosInListFilters() {
	let encontrouItens = false;

	const itensSeatch = setInterval(() => {
		if (!encontrouItens) {
			const itemFilter = document.querySelectorAll(
				".resultsfilters .freq_filters"
			)[0];
			if (itemFilter) {
				itemFilter.insertAdjacentHTML(
					"afterend",
					"<p class='maisUsados'>Mais usados</p>"
				);

				itemFilter.insertAdjacentHTML(
					"afterend",
					"<span class='abrirModal'></span>"
				);
				encontrouItens = true;
				clearInterval(itensSeatch);
			}
		}
	}, 300);
}


function popupAlertDisplayNone() {
	let encontrouPopupAlert = false;

	const popupAlert = setInterval(() => {
		if (!encontrouPopupAlert) {
			const alertMobile = document.querySelector(
				".mobile-alert-container"
			);
			if (alertMobile) {
				const alertMobileClone = alertMobile.cloneNode(true);
				alertMobileClone.style.marginTop = "20px !important";
				alertMobileClone.style.gridArea = "auto";
				document
					.querySelector(".contentbox")
					.insertAdjacentElement("afterend", alertMobileClone);
				alertMobile.style.display = "none";

				encontrouPopupAlert = true;
				clearInterval(popupAlert);
			}
		}
	}, 300);
}

function modifyImageInPopup() {
	const arrowPopup = `<svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M1.00002 8L7.51002 1.49L14.02 8" stroke="#484848" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>
	
	`;

	const checkedPopup = `<svg  style="margin-left: 2px;" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M16.4667 0H2.53333C1.13421 0 0 1.13421 0 2.53333V16.4667C0 17.8658 1.13421 19 2.53333 19H16.4667C17.8658 19 19 17.8658 19 16.4667V2.53333C19 1.13421 17.8658 0 16.4667 0Z" fill="#484848"/>
	<path d="M14.5667 6.33333L8.23333 12.6667L5.06667 9.5" stroke="white" stroke-width="2.53333" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>
	`;

	const roundedPopup = `<svg style="margin-left: 2px;" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
	<g clip-path="url(#clip0_4_2)">
	<path d="M18.9062 9.5C18.9062 4.58121 14.9188 0.59375 10 0.59375C5.08121 0.59375 1.09375 4.58121 1.09375 9.5C1.09375 14.4188 5.08121 18.4062 10 18.4062C14.9188 18.4062 18.9062 14.4188 18.9062 9.5Z" fill="white" stroke="#484848" stroke-width="1.1875"/>
	<path d="M15.9375 9.5C15.9375 6.22081 13.2792 3.5625 10 3.5625C6.72081 3.5625 4.0625 6.22081 4.0625 9.5C4.0625 12.7792 6.72081 15.4375 10 15.4375C13.2792 15.4375 15.9375 12.7792 15.9375 9.5Z" fill="#484848"/>
	</g>
	<defs>
	<clipPath id="clip0_4_2">
	<rect width="19" height="19" fill="white" transform="translate(0.5)"/>
	</clipPath>
	</defs>
	</svg>
	
	`;
	let encontrouArrowPopup = false;

	const encontrandoArrow = setInterval(() => {
		if (!encontrouArrowPopup) {
			const imgArrowPopup = document.querySelector(
				".filterMobContent div.flightsfilters .filter_block .header_filterblock"
			);
			if (imgArrowPopup) {
				document
					.querySelectorAll(
						".filterMobContent div.flightsfilters .filter_block .header_filterblock img"
					)
					.forEach((el) => {
						el.style.display = "none";
					});

				document
					.querySelectorAll(
						".filterMobContent div.flightsfilters .filter_block .header_filterblock"
					)
					.forEach((el) => {
						el.insertAdjacentHTML("beforeend", arrowPopup);
					});
				encontrouArrowPopup = true;

				const listaComItensPopup = document.querySelectorAll(
					".contentPopup .item_filterblock.undefined img"
				);

				listaComItensPopup.forEach((img, index) => {
					if (
						img.src ===
						"https://www.passagenspromo.com.br/nstatic/webapp/images/square-checked.svg"
					) {
						listaComItensPopup[index].style.display = "none";

						document
							.querySelectorAll(
								".contentPopup .item_filterblock.undefined"
							)[index].insertAdjacentHTML(
								"afterbegin",
								checkedPopup
							);
					}

					if (
						img.src ===
						"https://www.passagenspromo.com.br/nstatic/webapp/images/round-checked.svg"
					) {
						listaComItensPopup[index].style.display = "none";
						document
							.querySelectorAll(
								".contentPopup .item_filterblock.undefined"
							)[index].insertAdjacentHTML(
								"afterbegin",
								roundedPopup
							);
					}
				});

				clearInterval(encontrandoArrow);
			}
		}
	}, 300);


}


function createButtonInModal() {
	let encontrouModal = false;
	const encontrandoModal = setInterval(() => {
		if (!encontrouModal) {
			const modalBody = document.querySelector(".modal-body")

			if (modalBody) {
				const btnAplicarFiltro = `<div class="buttonAplicarFiltros">
											<p>Aplicar Filtros</p>
										</div>`
				modalBody.insertAdjacentHTML("beforeend", btnAplicarFiltro)

				document.querySelector(".buttonAplicarFiltros").addEventListener("click", () => {
					listTagItem()
					document.querySelector("button.applyButton").click()
				})

				encontrouModal = true;
				clearInterval(encontrandoModal);

			}
		}
	}, 300);
}


function activyModaFiltro() {
	let encontrouBtn = false;
	const encontrandoBtn = setInterval(() => {
		if (!encontrouBtn) {
			const btnTeste = document.querySelector(".abrirModal")

			if (btnTeste) {


				btnTeste.addEventListener("click", () => {
					document.querySelector("div.resultsfilters button.filter_mobile_button").click()
					createButtonInModal()
					modifyImageInPopup()
				})
				encontrouBtn = true;
				clearInterval(encontrandoBtn);

			}
		}
	}, 300);

}


function listTagItem() {
	const allTagsItens = document.querySelectorAll(".modal-body  .filter_tags .tagitem");
	addTagItensInFilterHome(allTagsItens)
	clearFilterHome();
}

function addTagItensInFilterHome(tagsItens) {
	const myTagsItens = Array.from(tagsItens)
	console.log(document.querySelector(".resultsfilters"))
	myTagsItens.forEach((el) => {
		document.querySelector(".resultsfilters").insertAdjacentElement("afterbegin", el)
	})
}


function clearFilterHome() {
	let timeRemoveItens = false;

	const itensInSearchHome = setInterval(() => {
		if (!timeRemoveItens) {
			const itemFilter = document.querySelector(".clearresultfilters")
			if (itemFilter) {
				itemFilter.addEventListener("click", () => {
					document.querySelectorAll(".resultsfilters .tagitem").forEach((el) => {
						el.remove()
					})
				})
				timeRemoveItens = true;
				clearInterval(itensInSearchHome);
			}
		}
	}, 300);
}