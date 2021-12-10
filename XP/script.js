if (
	window.location.pathname === "/investimentos/renda-fixa/" ||
	window.location.pathname === "/investimentos/fundos-de-investimento/'"
) {
	document.querySelector(".hero").insertAdjacentHTML("afterend", conteudo);
} else if (
	window.location.pathname === "/investimentos/acoes/" ||
	window.location.pathname === "/investimentos/fundos-imobiliarios/"
) {
	document.querySelector(".nh-hero").insertAdjacentHTML("afterend", conteudo);
} else if (window.location.pathname === "/investimentos/futuros/") {
	document.querySelector(".nh-hero").insertAdjacentHTML("afterend", conteudo);
}
