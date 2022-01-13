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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, eum! Mollitia, fugiat id amet ab vitae
                modi doloremque cumque excepturi saepe rerum quod odit animi itaque fuga quasi eius earum iure sint
                provident quibusdam possimus unde rem et. Impedit blanditiis porro ipsa qui perferendis nihil nobis
                fuga doloribus, neque repudiandae consectetur, velit dolore. Quidem vero nesciunt fugiat, alias
                deserunt, distinctio iure assumenda sapiente eveniet rem aut deleniti cumque sunt libero, temporibus
                velit magni quo aliquam et modi accusantium facilis! Reiciendis, odio! Voluptatem quibusdam
                quisquam, eos ad, labore doloremque incidunt alias praesentium deserunt molestiae magnam maxime
                veritatis ea placeat perspiciatis mollitia expedita voluptatibus ex omnis tempore asperiores ipsum
                perferendis accusamus. Praesentium ab aliquam animi officiis facilis illum magni, dolor doloremque
                recusandae architecto a saepe quae consectetur quis, repellendus dicta deleniti possimus inventore
                assumenda nesciunt. Laboriosam, recusandae ratione cum, adipisci totam eos iusto dolores voluptates
                autem maiores id voluptatem vel sint reprehenderit hic fugit earum repellendus quam porro illo ipsam
                quidem molestias, natus dolore? Porro, adipisci. Eaque quibusdam magni et quo repellat itaque
                aliquam explicabo alias eos dolorum vitae voluptatum laborum ipsam nesciunt laboriosam fugit,
                molestiae fuga possimus sint quaerat optio iusto. Eius debitis, beatae repellat assumenda aperiam
                alias velit neque suscipit provident exercitationem quidem harum iusto! Maiores quos libero,
                voluptatem consectetur architecto quisquam eius adipisci quod officia velit! Nam iure harum
                blanditiis nisi commodi accusamus labore. Nam placeat reiciendis ratione beatae dolor assumenda
                illum temporibus tempora accusamus iste. Nemo suscipit labore, quidem impedit quibusdam vel aliquam
                similique ipsam consequatur eligendi vero ut adipisci quasi, ab sed sunt aperiam dicta repudiandae
                eum quam totam deleniti recusandae, enim praesentium. Laudantium cumque, distinctio quidem
                consequatur fuga ut quam, hic deleniti repellendus aliquam neque. Sapiente nisi fuga omnis sunt
                dolores tenetur nesciunt eaque iure distinctio autem in molestiae accusamus ad accusantium quasi ab
                quos repellendus asperiores maxime, consequuntur, itaque similique eum. Expedita molestias alias,
                iusto commodi maxime tempore eos nobis optio iure blanditiis eaque provident voluptatum, aliquam
                beatae excepturi inventore iste ipsa reprehenderit aspernatur quos. Eos tenetur at id non adipisci,
                eligendi impedit recusandae ab. Cupiditate voluptates consequuntur error nesciunt adipisci facilis
                debitis quidem enim dolor quaerat. At delectus illum incidunt ullam iusto perspiciatis. Incidunt
                quae rerum ipsa, voluptate velit, est magnam cum in distinctio voluptatem laboriosam quo sint
                veniam, sed nihil cupiditate. Illum, cum unde cupiditate magnam id corrupti est impedit aspernatur
                sit. Nostrum voluptatem a, ea in eos ullam unde veniam omnis aperiam molestiae reiciendis porro?
                Neque, fuga quis accusantium incidunt possimus corrupti dolore delectus cumque dolorem deleniti quia
                quos, omnis nihil in aperiam? Quasi modi sit dolore quibusdam unde aut, beatae nemo vitae, aliquid
                accusamus perferendis iure! Accusantium culpa eos reiciendis odio velit nesciunt vitae et ex unde
                commodi maiores optio minus quaerat quo voluptatibus quis, eum omnis iusto a atque reprehenderit
                fuga? Atque porro in totam nobis minus optio! Pariatur inventore molestias sit suscipit delectus,
                mollitia est corrupti eveniet, quam accusantium, sint ratione dolorum laudantium quibusdam dolor.
                Ducimus dolor obcaecati alias et ad. Eos dolore eligendi enim rerum quidem unde optio quaerat iusto
                quia quod! Similique consequuntur ducimus hic illum dolore. Pariatur harum dolorem excepturi
                mollitia distinctio commodi. Neque unde animi eligendi quidem voluptate ea labore vero enim ipsum,
                ullam temporibus possimus qui, velit necessitatibus illum voluptatem quas doloremque? Quod nemo
                provident aliquid quos deserunt, doloribus laudantium odit at quae perferendis similique ut debitis
                repellendus perspiciatis. Est, repellendus ex voluptates cupiditate doloribus suscipit saepe
                corporis velit ullam, similique quibusdam animi esse laboriosam aut rem? Ad quaerat aut velit nihil,
                vel fugit corporis et assumenda quis iusto corrupti, unde laborum itaque voluptate veniam. Ipsa,
                esse aliquid explicabo deleniti consectetur rerum magnam, sed quibusdam qui, vitae eos eligendi
                temporibus. Harum aperiam, ipsam quod vero voluptate et nostrum blanditiis. Veritatis reiciendis
                harum adipisci error, provident fugiat labore impedit. Tempora doloribus, eveniet nulla explicabo
                nisi eligendi mollitia animi sapiente unde, inventore cupiditate atque sequi vero aliquid maxime,
                corrupti magnam praesentium excepturi delectus quaerat ipsa! Esse ducimus rem illo distinctio quos
                veniam aliquam molestiae exercitationem! Error, autem aperiam. Aspernatur ratione dolore odio
                nostrum praesentium animi possimus doloribus quidem accusantium corporis nobis ipsum at tempora
                asperiores, sequi temporibus alias quaerat eos nemo necessitatibus qui molestiae sapiente expedita?
                Fuga architecto dicta molestias quia quisquam est, accusamus maxime sit laboriosam nihil sequi iure
                maiores dolore aut consequuntur adipisci repellendus quaerat soluta in possimus? Delectus possimus
                aliquam architecto ipsa nemo ullam tenetur eaque corrupti aliquid quae magnam, voluptatibus, natus
                ipsum iste odio necessitatibus amet eveniet vero modi consequuntur maxime asperiores sunt obcaecati!
                Impedit iste voluptates dolorem animi explicabo nisi soluta accusamus tenetur voluptate magni porro
                eos repudiandae quod, inventore atque, delectus nostrum. Quia veritatis architecto sit asperiores
                illum unde consequatur porro. Ea maiores pariatur eaque voluptatem consectetur laborum aliquam!
                Fugiat quibusdam et laborum nostrum temporibus modi harum dignissimos fuga asperiores. Aut, ipsum
                ipsam. Maiores saepe suscipit sed aspernatur, odio consectetur, voluptas, dignissimos recusandae
                laudantium esse deleniti quaerat at porro non. Deleniti, iusto delectus! Ad earum culpa, delectus
                error odit pariatur impedit eius voluptas natus voluptatem nisi expedita mollitia quidem facere
                magnam. Architecto veniam quo asperiores ipsa magnam fugiat quos est, nam optio ad nisi repellendus
                rerum, numquam qui soluta hic et ex quibusdam ratione facilis, minus esse tempore! Voluptatum unde
                magni adipisci nemo ipsam aliquid deleniti eos nihil error necessitatibus. Possimus, dolor
                asperiores quisquam, fugiat fuga quod officia soluta vel adipisci ab perspiciatis voluptatum quo
                aspernatur accusamus maiores officiis doloremque omnis assumenda ratione nam laboriosam. Autem
                vitae, consequatur nostrum nesciunt dolorem dolorum. Mollitia possimus nostrum aspernatur fugit
                velit iste, quod nemo autem quidem dignissimos eos sit accusantium iusto provident est tenetur!
                Reiciendis et ex ipsum dignissimos recusandae quibusdam quos suscipit animi, corporis quod ipsa,
                laboriosam, nemo perspiciatis minima cupiditate praesentium mollitia pariatur illum nobis? Dolorem,
                cumque accusamus. Itaque ratione, veniam maiores ut aut doloremque? Nulla mollitia tempora
                reprehenderit, dignissimos voluptatibus assumenda quos iure est laboriosam saepe illo explicabo ex
                repudiandae, cupiditate hic voluptates asperiores! Quaerat, adipisci distinctio a accusantium,
                consequuntur, aliquam ipsa voluptatum assumenda dolore odio vel veritatis minus atque iure non!
                Optio veniam aliquid culpa architecto repellendus dolorem aspernatur.</p>
        </div>
    </div>
</div>`
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
            <img
                src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/main/disantini/images/verified.png">
        </div>
        <p><strong><span>Compra garantida.</span></strong></p>
    </div>

    <div class="venda-entrega">Venda e entrega feita pela <a href="https://www.disantinni.com.br/home?gclid=Cj0KCQiAuP-OBhDqARIsAD4XHpeMhzMpJJPDcR27kdw92nDcHA9iYa8fGkyIgf-oVwu8TroBdJhzfU4aAnTpEALw_wcB">Di Santinni.</a></div>
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


const newBtnAddCarrinho = btnAddCarrinho;
infoSs.insertAdjacentElement("afterend", newBtnAddCarrinho);



btnAddCarrinho.insertAdjacentElement("afterend", newBtnFavorito);





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
        console.log(`Cliquei no botão da cor ${button.title}`);
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
}

    
if(window.innerWidth <= 600){
    const linhaCarrousel = document.querySelector("div.col-10")
    linhaCarrousel.classList.replace("col-10", "col-8")
    linhaCarrousel.classList.add("caroussel-elements")

    document.querySelectorAll(".product-detail-attributes")[1].insertAdjacentHTML("afterbegin","<p class='paragrafo-color-add'><strong>Cor:</strong><span class='cor-value'></span></p>");
    document.querySelectorAll(".cor-value")[1].innerHTML = document.querySelectorAll("button.color-attribute")[0].title;
}










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
                        console.log(el.querySelector("span.color-value"))
                    })
                    .catch((error) => {
                        console.log("Deu erro", error);
                    });
            }
        })
    
}


chamarDados();









