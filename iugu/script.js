const button = document.querySelector(".verPlano");

button.addEventListener("click", () => {
	const inputs = document.querySelectorAll(".container-input input");
	const value = document.querySelector(".value");
	const faturamentoInput = document.querySelector(".faturamento");
	const split = inputs[3];

	const cards = document.querySelectorAll(".container-card-ss");

	const containerImagem = document.querySelector(".container-imagem");
	document.querySelector(".image-ss").style.opacity = "0";

		document.querySelector(".image-ss").style.opacity = "0";

	document.querySelector(".preenchaForm").style.opacity = "0";

	const faturamento = faturamentoInput.value;

	const faturamento1 = faturamento.replaceAll(",", "")
	
	const faturamento2 = faturamento1.replaceAll(".", "")
	console.log(faturamento2)

	const faturamento3 = faturamento2/100;


	if (window.innerWidth >= 1200) {
		if (faturamento3 <= 50000 && split.checked == false) {
			cards[1].style.right = "10%";
			cards[0].style.right = "-100%";
			cards[2].style.right = "-100%";
		} else if (faturamento3 <= 50000 && split.checked == true) {
			cards[0].style.right = "10%";
			cards[1].style.right = "-100%";
			cards[2].style.right = "-100%";
		} else if (faturamento3 > 50000 && faturamento3 <= 250000) {
			cards[0].style.right = "10%";
			cards[1].style.right = "-100%";
			cards[2].style.right = "-100%";
		} else if (faturamento3 >= 250000) {
			cards[0].style.right = "-100%";
			cards[1].style.right = "-100%";
			cards[2].style.right = "10%";
		}
	} 
    else if (window.innerWidth >= 360) {
		if (faturamento3 <= 50000 && split.checked == false) {
			cards[1].style.right = "-5%";
			cards[0].style.right = "-120%";
			cards[2].style.right = "-120%";
		} else if (faturamento3 <= 50000 && split.checked == true) {
			cards[0].style.right = "-5%";
			cards[1].style.right = "-120%";
			cards[2].style.right = "-120%";
		} else if (faturamento3 > 50000 && faturamento3 <= 250000) {
			cards[0].style.right = "-5%";
			cards[1].style.right = "-120%";
			cards[2].style.right = "-120%";
		} else if (faturamento3 >= 250000) {
			cards[0].style.right = "-120%";
			cards[1].style.right = "-120%";
			cards[2].style.right = "-5%";
		}
	} 

    else if (window.innerWidth < 360) {
		console.log("Entreiii");
		if (faturamento3 <= 50000 && split.checked == false) {
			cards[1].style.right = "-14%";
			cards[0].style.right = "-130%";
			cards[2].style.right = "-130%";
		} else if (faturamento3 <= 50000 && split.checked == true) {
			cards[0].style.right = "-14%";
			cards[1].style.right = "-130%";
			cards[2].style.right = "-130%";
		} else if (faturamento3 > 50000 && faturamento3 <= 250000) {
			cards[0].style.right = "-14%";
			cards[1].style.right = "-130%";
			cards[2].style.right = "-130%";
		} else if (faturamento3 >= 250000) {
			cards[0].style.right = "-130%";
			cards[1].style.right = "-130%";
			cards[2].style.right = "-14%";
		}
	}
});


const btns = document.querySelectorAll(".conteudo-card-ss .cta")

btns.forEach((element) =>{
	element.addEventListener("click", () =>{
		window.HubSpotConversations.widget.open()
	})
})