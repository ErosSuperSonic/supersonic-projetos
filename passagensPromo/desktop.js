if (window.innerWidth > 768) {
    try{
            adicionarSeloInFirstCardDesktop()
            adicionarCopy();
            addEventButtonsMelhoresTarifas()
            atualizarMaisBaratoFiltroDestaque()
            atualizarMaisBaratoFiltroLateral()
    }catch(e){
        console.log(e)
    }
}



function adicionarSeloInFirstCardDesktop() {
    let encontrouSelos = false;

    const seloSearch = setInterval(() => {
        if (!encontrouSelos) {
            const totalValue = document.querySelector(".flightcardsidebar")


            if (totalValue) {

                if (!document.querySelector(".seloContainer")) {
                    totalValue.insertAdjacentHTML("afterbegin", `    <p class="seloContainer">
                                                                        <svg width="165" height="33" viewBox="0 0 165 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <rect y="1" width="165" height="31" rx="2" fill="#CDFF74" />
                                                                            <path
                                                                                d="M49.626 22L46.748 13.6533H46.6865C46.7002 13.8402 46.7161 14.0954 46.7344 14.4189C46.7526 14.7425 46.7686 15.0889 46.7822 15.458C46.7959 15.8271 46.8027 16.1803 46.8027 16.5176V22H45.3125V12.0059H47.6162L50.3848 19.9834H50.4258L53.29 12.0059H55.5869V22H54.0215V16.4355C54.0215 16.1302 54.026 15.7998 54.0352 15.4443C54.0488 15.0889 54.0625 14.7516 54.0762 14.4326C54.0944 14.1136 54.1081 13.8584 54.1172 13.667H54.0625L51.0752 22H49.626ZM63.8789 22H58.2188V12.0059H63.8789V13.3867H59.8594V16.1006H63.626V17.4746H59.8594V20.6123H63.8789V22ZM66.0391 22V12.0059H67.6797V20.6055H71.9248V22H66.0391ZM81.5361 22H79.9023V17.4883H75.2949V22H73.6543V12.0059H75.2949V16.0938H79.9023V12.0059H81.5361V22ZM93.0547 16.9893C93.0547 17.7594 92.9567 18.4613 92.7607 19.0947C92.5693 19.7236 92.2799 20.266 91.8926 20.7217C91.5052 21.1729 91.0199 21.5215 90.4365 21.7676C89.8532 22.0137 89.1696 22.1367 88.3857 22.1367C87.5882 22.1367 86.8955 22.0137 86.3076 21.7676C85.7243 21.5215 85.2389 21.1706 84.8516 20.7148C84.4688 20.2591 84.1816 19.7145 83.9902 19.0811C83.7988 18.4476 83.7031 17.7458 83.7031 16.9756C83.7031 15.9456 83.8717 15.0479 84.209 14.2822C84.5508 13.512 85.068 12.915 85.7607 12.4912C86.458 12.0628 87.3376 11.8486 88.3994 11.8486C89.4385 11.8486 90.3021 12.0605 90.9902 12.4844C91.6784 12.9082 92.1934 13.5052 92.5352 14.2754C92.8815 15.041 93.0547 15.9456 93.0547 16.9893ZM85.4258 16.9893C85.4258 17.7594 85.5306 18.4271 85.7402 18.9922C85.9499 19.5527 86.2712 19.9857 86.7041 20.291C87.1416 20.5918 87.7021 20.7422 88.3857 20.7422C89.0739 20.7422 89.6344 20.5918 90.0674 20.291C90.5003 19.9857 90.8193 19.5527 91.0244 18.9922C91.2295 18.4271 91.332 17.7594 91.332 16.9893C91.332 15.818 91.0973 14.902 90.6279 14.2412C90.1631 13.5758 89.4202 13.2432 88.3994 13.2432C87.7158 13.2432 87.153 13.3936 86.7109 13.6943C86.2734 13.9951 85.9499 14.4258 85.7402 14.9863C85.5306 15.5423 85.4258 16.21 85.4258 16.9893ZM98.0107 12.0059C98.8721 12.0059 99.583 12.1107 100.144 12.3203C100.709 12.5299 101.128 12.849 101.401 13.2773C101.679 13.7057 101.818 14.2503 101.818 14.9111C101.818 15.4033 101.727 15.8226 101.545 16.1689C101.363 16.5153 101.123 16.8024 100.827 17.0303C100.531 17.2581 100.214 17.4404 99.877 17.5771L102.714 22H100.861L98.4482 17.9941H96.8418V22H95.2012V12.0059H98.0107ZM97.9014 13.373H96.8418V16.6406H97.9766C98.7376 16.6406 99.2891 16.4993 99.6309 16.2168C99.9772 15.9342 100.15 15.5173 100.15 14.9658C100.15 14.387 99.9658 13.9769 99.5967 13.7354C99.2321 13.4938 98.667 13.373 97.9014 13.373ZM110.685 12.0059C111.974 12.0059 112.915 12.2702 113.508 12.7988C114.1 13.3275 114.396 14.068 114.396 15.0205C114.396 15.4535 114.328 15.8659 114.191 16.2578C114.059 16.6452 113.84 16.9893 113.535 17.29C113.23 17.5863 112.826 17.821 112.325 17.9941C111.828 18.1673 111.215 18.2539 110.486 18.2539H109.42V22H107.779V12.0059H110.685ZM110.575 13.3662H109.42V16.8867H110.315C110.83 16.8867 111.268 16.8275 111.628 16.709C111.988 16.5859 112.261 16.3923 112.448 16.1279C112.635 15.8636 112.729 15.515 112.729 15.082C112.729 14.5033 112.553 14.0726 112.202 13.79C111.856 13.5075 111.313 13.3662 110.575 13.3662ZM119.202 12.0059C120.063 12.0059 120.774 12.1107 121.335 12.3203C121.9 12.5299 122.319 12.849 122.593 13.2773C122.871 13.7057 123.01 14.2503 123.01 14.9111C123.01 15.4033 122.919 15.8226 122.736 16.1689C122.554 16.5153 122.315 16.8024 122.019 17.0303C121.722 17.2581 121.406 17.4404 121.068 17.5771L123.905 22H122.053L119.64 17.9941H118.033V22H116.393V12.0059H119.202ZM119.093 13.373H118.033V16.6406H119.168C119.929 16.6406 120.48 16.4993 120.822 16.2168C121.169 15.9342 121.342 15.5173 121.342 14.9658C121.342 14.387 121.157 13.9769 120.788 13.7354C120.424 13.4938 119.858 13.373 119.093 13.373ZM130.994 22H125.334V12.0059H130.994V13.3867H126.975V16.1006H130.741V17.4746H126.975V20.6123H130.994V22ZM137.413 13.2568C136.935 13.2568 136.506 13.3434 136.128 13.5166C135.754 13.6898 135.438 13.9404 135.178 14.2686C134.918 14.5921 134.72 14.9863 134.583 15.4512C134.446 15.9115 134.378 16.431 134.378 17.0098C134.378 17.7845 134.487 18.4521 134.706 19.0127C134.925 19.5687 135.257 19.9971 135.704 20.2979C136.151 20.5941 136.716 20.7422 137.399 20.7422C137.823 20.7422 138.236 20.7012 138.637 20.6191C139.038 20.5371 139.452 20.4255 139.881 20.2842V21.6787C139.475 21.8382 139.065 21.9544 138.65 22.0273C138.236 22.1003 137.757 22.1367 137.215 22.1367C136.194 22.1367 135.346 21.9248 134.672 21.501C134.002 21.0771 133.501 20.4801 133.168 19.71C132.84 18.9398 132.676 18.0374 132.676 17.0029C132.676 16.2464 132.781 15.5537 132.99 14.9248C133.2 14.2959 133.505 13.7536 133.906 13.2979C134.307 12.8376 134.802 12.4844 135.39 12.2383C135.982 11.9876 136.659 11.8623 137.42 11.8623C137.921 11.8623 138.413 11.9193 138.896 12.0332C139.384 12.1426 139.835 12.2998 140.25 12.5049L139.676 13.8584C139.329 13.6943 138.967 13.5531 138.589 13.4346C138.211 13.3161 137.819 13.2568 137.413 13.2568ZM138.534 23.832C138.534 24.3151 138.372 24.6911 138.049 24.96C137.725 25.2288 137.199 25.3633 136.47 25.3633C136.297 25.3633 136.137 25.3519 135.991 25.3291C135.845 25.3063 135.72 25.2812 135.615 25.2539V24.3174C135.725 24.3447 135.861 24.3698 136.025 24.3926C136.189 24.4154 136.34 24.4268 136.477 24.4268C136.714 24.4268 136.9 24.3857 137.037 24.3037C137.178 24.2217 137.249 24.0827 137.249 23.8867C137.249 23.6771 137.146 23.5107 136.941 23.3877C136.736 23.2646 136.433 23.1781 136.032 23.1279L136.606 22H137.646L137.365 22.5879C137.575 22.6426 137.766 22.7223 137.939 22.8271C138.117 22.932 138.261 23.0664 138.37 23.2305C138.479 23.3991 138.534 23.5996 138.534 23.832ZM150.9 16.9893C150.9 17.7594 150.802 18.4613 150.606 19.0947C150.415 19.7236 150.126 20.266 149.738 20.7217C149.351 21.1729 148.866 21.5215 148.282 21.7676C147.699 22.0137 147.015 22.1367 146.231 22.1367C145.434 22.1367 144.741 22.0137 144.153 21.7676C143.57 21.5215 143.085 21.1706 142.697 20.7148C142.314 20.2591 142.027 19.7145 141.836 19.0811C141.645 18.4476 141.549 17.7458 141.549 16.9756C141.549 15.9456 141.717 15.0479 142.055 14.2822C142.396 13.512 142.914 12.915 143.606 12.4912C144.304 12.0628 145.183 11.8486 146.245 11.8486C147.284 11.8486 148.148 12.0605 148.836 12.4844C149.524 12.9082 150.039 13.5052 150.381 14.2754C150.727 15.041 150.9 15.9456 150.9 16.9893ZM143.271 16.9893C143.271 17.7594 143.376 18.4271 143.586 18.9922C143.796 19.5527 144.117 19.9857 144.55 20.291C144.987 20.5918 145.548 20.7422 146.231 20.7422C146.92 20.7422 147.48 20.5918 147.913 20.291C148.346 19.9857 148.665 19.5527 148.87 18.9922C149.075 18.4271 149.178 17.7594 149.178 16.9893C149.178 15.818 148.943 14.902 148.474 14.2412C148.009 13.5758 147.266 13.2432 146.245 13.2432C145.562 13.2432 144.999 13.3936 144.557 13.6943C144.119 13.9951 143.796 14.4258 143.586 14.9863C143.376 15.5423 143.271 16.21 143.271 16.9893Z"
                                                                                fill="#186AAF" />
                                                                            <g filter="url(#filter0_d_422_110)">
                                                                                <circle cx="26.5" cy="16.5" r="12" fill="#186AAF" stroke="#186AAF" />
                                                                                <path d="M27.125 9V25.6667" stroke="#FCDD59" stroke-linecap="round" stroke-linejoin="round" />
                                                                                <path
                                                                                    d="M31.5 13.8719C31.5 13.451 31.4192 13.0342 31.2621 12.6453C31.1051 12.2565 30.8749 11.9031 30.5847 11.6055C30.2945 11.3079 29.95 11.0718 29.5709 10.9107C29.1917 10.7497 28.7854 10.6667 28.375 10.6667H25.5625C24.7337 10.6667 23.9388 11.0044 23.3528 11.6055C22.7667 12.2066 22.4375 13.0218 22.4375 13.8719C22.4375 14.7219 22.7667 15.5372 23.3528 16.1382C23.9388 16.7393 24.7337 17.077 25.5625 17.077H29C29.8288 17.077 30.6237 17.4147 31.2097 18.0158C31.7958 18.6168 32.125 19.4321 32.125 20.2821C32.125 21.1322 31.7958 21.9474 31.2097 22.5485C30.6237 23.1496 29.8288 23.4873 29 23.4873H25.25C24.4212 23.4873 23.6263 23.1496 23.0403 22.5485C22.4542 21.9474 22.125 21.1322 22.125 20.2821"
                                                                                    stroke="#FCDD59" stroke-linecap="round" stroke-linejoin="round" />
                                                                            </g>
                                                                            <defs>
                                                                                <filter id="filter0_d_422_110" x="11" y="0" width="33" height="33" filterUnits="userSpaceOnUse"
                                                                                    color-interpolation-filters="sRGB">
                                                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                                        result="hardAlpha" />
                                                                                    <feOffset dx="1" />
                                                                                    <feGaussianBlur stdDeviation="2" />
                                                                                    <feComposite in2="hardAlpha" operator="out" />
                                                                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_422_110" />
                                                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_422_110" result="shape" />
                                                                                </filter>
                                                                            </defs>
                                                                        </svg>
                                                                    <p>`)

                }

                document.querySelectorAll(".sticky_price")[0].querySelectorAll("button").forEach((el) => {
                    if (!(el.style.marginTop == "20px")) {
                        el.style.marginTop = "20px"
                    }
                })
                setTimeout(() => {
                    encontrouSelos = true;
                    clearInterval(seloSearch);
                }, 6000)
            }
        }
    }, 300);
}


function adicionarCopy() {

    const myHTML = `<div class="copy-ss">
                    <p>
                        <img src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/1224991d5f0722566078dca93d309a7b2d217aef/passagensPromo/relogio-mobile.svg">


                        Aproveite o melhor pre??o antes que ele aumente.
                    </p>
                </div>`




    let encontrouCard = false;

    const encontrouFirstCard = setInterval(() => {
        if (!encontrouCard) {
            const firstCard = document.querySelector(".flightcardlist")

            if (firstCard) {
                if (!document.querySelector(".copy-ss")) {
                    firstCard.insertAdjacentHTML("afterend", myHTML)

                    if (Array(document.querySelector(".flightcardlist").querySelectorAll(".flightcarditem"))[0].length >= 3) {
                        document.querySelector(".copy-ss").classList.add("copy-relative")
                    }
                }
                setTimeout(() => {
                    encontrouCard = true;
                    clearInterval(encontrouFirstCard);
                }, 6000)
            }
        }
    }, 300);

}



function addEventButtonsMelhoresTarifas() {
    let encontrouButton = false;

    const encontrouButtons = setInterval(() => {
        if (!encontrouButton) {
            const buttons = document.querySelectorAll(".item_cia_column button")

            if (buttons) {
                buttons.forEach((button) => {
                    button.addEventListener("click", () => {
                        adicionarSeloInFirstCardDesktop();
                        adicionarCopy();
                        cleanFilters();
                    })
                })

                setTimeout(() => {
                    encontrouButton = true;
                    clearInterval(encontrouButtons);
                }, 6000)
            }
        }
    }, 300);
}

function atualizarMaisBaratoFiltroDestaque() {
    let encontrouButton = false;

    const encontrouButtons = setInterval(() => {
        if (!encontrouButton) {
            const buttons = document.querySelectorAll(".resultsfilters button")

            if (buttons) {
                buttons.forEach((button) => {
                    button.addEventListener("click", () => {
                        adicionarSeloInFirstCardDesktop();
                        adicionarCopy();
                        cleanFilters();
                    })
                })

                setTimeout(() => {
                    encontrouButton = true;
                    clearInterval(encontrouButtons);
                }, 15000)
            }
        }
    }, 300);
}


function atualizarMaisBaratoFiltroLateral() {
    let encontrouButton = false;

    const encontrouButtons = setInterval(() => {
        if (!encontrouButton) {
            const buttons = document.querySelectorAll(".item_filterblock")

            if (buttons) {
                buttons.forEach((button) => {
                    button.addEventListener("click", () => {
                        adicionarSeloInFirstCardDesktop();
                        adicionarCopy();
                        cleanFilters();
                    })
                })

                setTimeout(() => {
                    encontrouButton = true;
                    clearInterval(encontrouButtons);
                }, 15000)
            }
        }
    }, 300);
}



function cleanFilters() {

    if (document.querySelectorAll(".clearresultfilters")) {
        let encontrou = false;

        const encontrouClearFilter = setInterval(() => {
            if (!encontrou) {
                const clearFilter = document.querySelector(".btnclearfilters")

                if (clearFilter) {
                    clearFilter.addEventListener("click", () => {
                        adicionarSeloInFirstCardDesktop();
                        adicionarCopy();
                        tagItemVerification()
                    })


                    setTimeout(() => {
                        encontrou = true;
                        clearInterval(encontrouClearFilter);
                    }, 15000)
                }
            }
        }, 300);
    }
}


function tagItemVerification(){
    if (document.querySelectorAll(".tagitem")){
        let encontrou = false;

        const encontrouTagItem = setInterval(() => {
            if (!encontrou) {
                const tagItem = document.querySelector(".tagitem")

                if (tagItem) {
                    tagItem.addEventListener("click", () => {
                        adicionarSeloInFirstCardDesktop();
                        adicionarCopy();
                    })


                    setTimeout(() => {
                        encontrou = true;
                        clearInterval(encontrouTagItem);
                    }, 15000)
                }
            }
        }, 300);
    }
}