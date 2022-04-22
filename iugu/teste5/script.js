

//Alterando titulo
document.querySelector(".title.rich-text-content h1").innerHTML = "Tecnologia para gestão de pagamentos <strong>completa, flexível e automatizada</strong>"

//Mudando copy

document.querySelector(".subtitle.rich-text-content").innerHTML = "Para marketplace, e-commerce ou qualquer negócio online. Gestão financeira fácil e completa, que otimiza processos e torna sua empresa uma potência."


const novosItensPrimeiraDobra = `
        <div class="container-ss">
        <div class="list-ss">
            <div>
                <li>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 11.5L10 14.5L15 8.5" stroke="#383838" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path
                            d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                            stroke="#383838" stroke-width="1.5" />
                    </svg>

                    <p>Soluções de cobranças únicas e recorrentes</p>
                </li>

                <li>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 11.5L10 14.5L15 8.5" stroke="#383838" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path
                            d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                            stroke="#383838" stroke-width="1.5" />
                    </svg>

                    <p>Emissão automática e gestão de faturas</p>
                </li>
            </div>


            <div>
                <li>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 11.5L10 14.5L15 8.5" stroke="#383838" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path
                            d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                            stroke="#383838" stroke-width="1.5" />
                    </svg>

                    <p>Diversos meios de pagamento: boleto, cartão de crédito e PIX</p>
                </li>

                <li>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 11.5L10 14.5L15 8.5" stroke="#383838" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path
                            d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                            stroke="#383838" stroke-width="1.5" />
                    </svg>

                    <p>Comissionamento para parceiros</p>
                </li>
            </div>
        </div>
        <button>Falar com a iugu</button>
    </div>
`
document.querySelector(".hero-with-light-background .content-wrapper").insertAdjacentHTML("beforeend", novosItensPrimeiraDobra)