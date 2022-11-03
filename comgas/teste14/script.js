const rowDetalheFatura = document.querySelector(
  ".row.d-flex.flex-column.flex-md-row.justify-content-end.pb-3"
);

const acessoRapido = document.querySelectorAll(
  ".col-md-4.tour-guide-item-inativo"
)[1];

const bannerPeople = document.querySelector(
  "#mainContent > div > ng-component > cg-portal-cliente-header-para-voce > div > div > div > div.col-md-4.residential-banner-container"
);
const cardInativo = document.querySelector(
  "#mainContent > div > ng-component > cg-portal-cliente-header-para-voce > div > div > cg-portal-cliente-acesso-rapido-para-voce > div > div.card.col-md-4.p-md-0.tour-guide-item-inativo"
);

const rowInformarLeitura = document.querySelector(".row.quick-access-line");


//Adiciona o banner do casal na linha de baixo
cardInativo.insertAdjacentElement("afterend", bannerPeople);

//Adiciona o acesso rápido na linha de cima
rowDetalheFatura.insertAdjacentElement("beforeend", acessoRapido);
