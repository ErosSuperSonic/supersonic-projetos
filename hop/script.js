const timeline = document.querySelector(".carrousel-cards-ss");
const boxedsDiv = document.querySelectorAll(".boxed-ss div")


timeline.addEventListener("scroll", () =>{
    if(window.innerWidth <= 458){
        if(timeline.scrollLeft <= 189){
            boxedsDiv[0].style.backgroundColor = "#404040"
            boxedsDiv[1].style.backgroundColor = "#AAAAAA"
            boxedsDiv[2].style.backgroundColor = "#CAC9C9"
        }else if(timeline.scrollLeft <= 448){
            boxedsDiv[0].style.backgroundColor = "#AAAAAA"
            boxedsDiv[1].style.backgroundColor = "#404040"
            boxedsDiv[2].style.backgroundColor = "#CAC9C9"
        }else{
            boxedsDiv[0].style.backgroundColor = "#AAAAAA"
            boxedsDiv[1].style.backgroundColor = "#CAC9C9"
            boxedsDiv[2].style.backgroundColor = "#404040"
        }
    }

    if(window.innerWidth >= 458){
        if(timeline.scrollLeft <= 113){
            boxedsDiv[0].style.backgroundColor = "#404040"
            boxedsDiv[1].style.backgroundColor = "#AAAAAA"
            boxedsDiv[2].style.backgroundColor = "#CAC9C9"
        }else if(timeline.scrollLeft <= 358){
            boxedsDiv[0].style.backgroundColor = "#AAAAAA"
            boxedsDiv[1].style.backgroundColor = "#404040"
            boxedsDiv[2].style.backgroundColor = "#CAC9C9"
        }else{
            boxedsDiv[0].style.backgroundColor = "#AAAAAA"
            boxedsDiv[1].style.backgroundColor = "#CAC9C9"
            boxedsDiv[2].style.backgroundColor = "#404040"
        }
    }
        
    if(window.innerWidth >= 700){
        console.log(timeline.scrollLeft)
        if(timeline.scrollLeft <= 63){
            boxedsDiv[0].style.backgroundColor = "#404040"
            boxedsDiv[1].style.backgroundColor = "#AAAAAA"
            boxedsDiv[2].style.backgroundColor = "#CAC9C9"
        }else if(timeline.scrollLeft <= 104){
            boxedsDiv[0].style.backgroundColor = "#AAAAAA"
            boxedsDiv[1].style.backgroundColor = "#404040"
            boxedsDiv[2].style.backgroundColor = "#CAC9C9"
        }else{
            boxedsDiv[0].style.backgroundColor = "#AAAAAA"
            boxedsDiv[1].style.backgroundColor = "#CAC9C9"
            boxedsDiv[2].style.backgroundColor = "#404040"
        }
    }
});



document.querySelector(".shadow-container").classList.toggle("active")
document.querySelector("#hubspot-messages-iframe-container").style.height = "674px"
document.querySelector("#hubspot-messages-iframe-container").style.height = "674px"
