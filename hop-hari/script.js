function sendEventAb(category, action, label)
{	
  var gaName = ga.getAll()[0].get("name");
  ga(gaName+'.send', {
    hitType: 'event',
    eventCategory: category,
    eventAction: action,
    eventLabel: label
  });
}


let slides = document.querySelectorAll(".ss-slide"),
  carousel = document.querySelector(".ss-carousel"),
  containerPreview = document.querySelector(".ss-gallery-preview"),
  currentSlideIndex = 0;
  mobile = false;

  if (screen.width <= 580) {
    mobile = true;
  } else {
    mobile = false;
  }

// Define a largura do container de slides, de acordo o número de slides existentes
carousel.style.width = `calc(100vw * ${slides.length})`;


// Cria um slide de pré-visualização para cada slide existente
slides.forEach((slide) => {
  containerPreview.innerHTML += `
    <div class='ss-slide-preview'>
      <img src="${slide.querySelector("img").src}"/>
    </div>`;
  console.log(slide.querySelector("img").src);
});

// Monta o array de slides do preview
let previewSlides = document.querySelectorAll(".ss-slide-preview");

// Define a largura do container de previsu, de acordo o número de slides existentes
if (mobile) {
  containerPreview.style.width = `${177 * previewSlides.length + ((previewSlides.length-1) * 10)}px`;
}

// Seleciona por padrão o primeiro slide
previewSlides[0].classList.add("selected");

// Captura o clique nos slides de preview para alternar entre slides
previewSlides.forEach((slide, index) =>
  slide.addEventListener("click", () => {
    currentSlideIndex = index;
    handleSlide();
  })
);

// Eventos de cliques nos botões
const nextBtn = document.querySelector("#next"),
  prevBtn = document.querySelector("#prev");

// Lida com a alteração do slide ativo
function handleSlide() {
  const newMargin = `-${currentSlideIndex * window.innerWidth}px`;
  carousel.style.marginLeft = newMargin;

  // Alterno o slide ativo na pré-visualização
  previewSlides.forEach((slide) => slide.classList.remove("selected"));
  previewSlides[currentSlideIndex].classList.add("selected");

  if(currentSlideIndex != 0) {
    document.querySelector('.ss-carousel-button#prev').style.display = 'flex';
    document.querySelector('.ss-arrow-scroll').style.display = 'none';
  }
  else if(currentSlideIndex == 0) {
    document.querySelector('.ss-carousel-button#prev').style.display = 'none';
    if(!mobile) {
      document.querySelector('.ss-arrow-scroll').style.display = 'flex';
    }
  }
}

// Lida com o avanço ao próximo slide
nextBtn.addEventListener("click", () => {
  currentSlideIndex < slides.length - 1
    ? ++currentSlideIndex
    : (currentSlideIndex = 0);
  handleSlide();
  handlePreview();

  console.log(mobile, currentSlideIndex);

  sendEventAb('Teste AB - Carrossel', 'Navegação', 'Próximo Slide');
});

// Lida com o retorno ao slide anterior
prevBtn.addEventListener("click", () => {
  currentSlideIndex > 0
    ? --currentSlideIndex
    : (currentSlideIndex = slides.length - 1);
  handleSlide();
  handlePreview();

  sendEventAb('Teste AB - Carrossel', 'Navegação', 'Slide Anterior');
});

// Alterna entre os slides de acordo com o click no preview
previewSlides.forEach((slide, index) =>
  slide.addEventListener("click", () => {
    currentSlideIndex = index;
    handleSlide();
    handlePreview();

    
    sendEventAb('Teste AB - Carrossel', 'Navegação', 'Clique em miniaturas do slide');
  })
);

document.querySelector('.cta-pacotes').addEventListener('click', function() {
  sendEventAb('Teste AB - Carrossel', 'CTA Pacotes', '');
});
document.querySelector('.ss-arrow-scroll a').addEventListener('click', function() {
  sendEventAb('Teste AB - Carrossel', 'Clique para descer', '');
});

// Lida com a movimentação do Gallery Preview quando mobile
function handlePreview() {
  if (mobile) {
    const newMargin = `${(currentSlideIndex - 1) * -(window.innerWidth/2) - 30}px`;
    containerPreview.style.marginLeft = newMargin; 
  };
}

var x = 0;
var hjCheck = setInterval(function() {
  x++;
  if(x > 30) {
    clearInterval(hjCheck);
  }
  if(typeof hj === "function") {
    hj('event', 'ss_variant');
    clearInterval(hjCheck);
  }
}, 300);