
const button = document.querySelector(".verPlano");

button.addEventListener("click", () => {
    const inputs = document.querySelectorAll(".container-input input");
    const value = document.querySelector(".value");
    const faturamentoInput = document.querySelector(".faturamento");
    const split = inputs[3];
    
    const cards = document.querySelectorAll(".container-card-ss")

    
    const containerImagem = document.querySelector(".container-imagem");
    document.querySelector(".image-ss").style.opacity = "0";
    setTimeout(() => {
        document.querySelector(".image-ss").style.display = "none";
    }, 200)
    document.querySelector(".preenchaForm").style.display = "none"

	const faturamento = faturamentoInput.value;

	if(window.innerWidth >= 1200){
        if (faturamento <= 50000 && split.checked == false) {
            cards[1].style.right = "10%"
            cards[0].style.right = "-100%"
            cards[2].style.right = "-100%"
        } else if (faturamento <= 50000 && split.checked == true) {
            cards[0].style.right = "10%"
            cards[1].style.right = "-100%"
            cards[2].style.right = "-100%"
        } else if (faturamento > 50000 && faturamento <= 250000) {
            cards[0].style.right = "10%"
            cards[1].style.right = "-100%"
            cards[2].style.right = "-100%"
        } else if (faturamento >= 250000) {
            cards[0].style.right = "-100%"
            cards[1].style.right = "-100%"
            cards[2].style.right = "10%"
        }
    }else{
        if (faturamento <= 50000 && split.checked == false) {
            cards[1].style.right = "-5%"
            cards[0].style.right = "-120%"
            cards[2].style.right = "-120%"
        } else if (faturamento <= 50000 && split.checked == true) {
            cards[0].style.right = "-5%"
            cards[1].style.right = "-120%"
            cards[2].style.right = "-120%"
        } else if (faturamento > 50000 && faturamento <= 250000) {
            cards[0].style.right = "-5%"
            cards[1].style.right = "-120%"
            cards[2].style.right = "-120%"
        } else if (faturamento >= 250000) {
            cards[0].style.right = "-120%"
            cards[1].style.right = "-120%"
            cards[2].style.right = "-5%"
        }  
    }
});

