const myText = `
<div class="maxContainer">
        <div class="container-ss">
            <img src="https://github.com/ErosSuperSonic/supersonic-projetos/blob/main/clear/teste%2011/xpinc.png?raw=true"
                alt="">
            <img src="https://github.com/ErosSuperSonic/supersonic-projetos/blob/main/clear/teste%2011/reclame%20aqui.png?raw=true"
                alt="">
            <img src="https://github.com/ErosSuperSonic/supersonic-projetos/blob/main/clear/teste%2011/ibest.png?raw=true"
                alt="">
        </div>
    </div>
`
document.querySelector(".clear-hero").insertAdjacentHTML("beforeend", myText)



if (window.location.pathname === "/fundos-de-investimento-imobiliarios/" && window.innerWidth >= 1084){
    document.querySelector(".maxContainer").style.bottom = "6%"
}