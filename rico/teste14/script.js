//Adicionando o texto Conheça os investimentos na segunda dobra
document.querySelector(".tabs-default").insertAdjacentHTML("beforebegin", `<h3 class="conheca-ss">Conheça os investimentos</h3>`)



//Adicionando o texto Renda fixa nos cards
document.querySelectorAll("section.invista .item h3").forEach((h3Card) => {
    h3Card.insertAdjacentHTML("beforebegin", `<span class="renda-ss">Renda fixa</span>`)
})

//Adicionando o botão ver mais
document.querySelectorAll("section.invista .item a").forEach((linkCard) => {
    linkCard.insertAdjacentHTML("beforeend", `<a href="${linkCard.href}" class="verMais-ss">Ver Mais</span>`)
})


if (window.innerWidth <= 1100) {
    document.querySelectorAll('[aria-live="polite"].slick-list.draggable')[1].style.height = "auto";
}