document.querySelector("#element-1205 .x_39a3bfb4").innerHTML =
	"Invista no exterior e globalize sua carteira com  ativos internacionais";
document.querySelector("#element-1205 .x_39a3bfb4").style.position = "relative";
document.querySelector("#element-1205 .x_39a3bfb4").style.top = "0px";
document.querySelector("#element-1205 .x_39a3bfb4").style.fontSize = "3.7rem";

const containerAdd = `

<div class="container-ss">
<ul>
    <li>Atrele seu dinheiro a uma moeda forte</li>
    <li>Tenha assessoria da XP</li>
    <li>Comece a partir de R$100,00</li>
</ul>

<button>Abra sua conta</button>
<p>Leva só 5 minutos</p>
</div>
`;

containerAdd.addEventListener("click", () => {
    window.location.href = "https://cadastro.xpi.com.br/desktop/step/1?_ga=2.106974530.1963409769.1639143941-818339838.1639143941";
})