if (window.innerWidth <= 768) {
  try {
    const newFraseCard = `<p class="newFraseSS">Garantimos o <strong>melhor preço</strong> de seguro viagem </p>`;
    const buttonClose = `<img class="buttonClose" src="https://raw.githubusercontent.com/ErosSuperSonic/supersonic-projetos/f577da72303600b0543601a652d4ae6b68c1e737/segurospromo/teste4/close.svg" alt="">`;

    const boxSS = `
    <div class="box-ss">
      <p>Garantimos o <strong>melhor preço</strong> de seguro viagem </p>
      <button>Faça uma cotação e confira</button>
    </div>
  `;
    const newFormSS = document.querySelector(
      "body > div.wrapper > div.comp_blogcontents > div > div.comp_blogsidebar > div.subcomp_frame.comp_frame_v1 > div"
    );
    newFormSS.classList.add("formSS");

    const firstComponentHomeBlog = document.querySelector(".comp_blogheader");
    const firstComponentBlogArtigos =
      document.querySelector(".comp_blogcontents");

    if (firstComponentHomeBlog) {
      firstComponentHomeBlog.insertAdjacentHTML("afterbegin", boxSS);
      firstComponentHomeBlog.insertAdjacentElement("afterbegin", newFormSS);
      document
        .querySelector(".formSS")
        .insertAdjacentHTML("afterbegin", buttonClose);

      document
        .querySelector(".formSS")
        .querySelector(".buttonClose")
        .addEventListener("click", () => {
          document
            .querySelector(".comp_blogheader .component.formSS")
            .classList.remove("active");
          document.querySelector(".box-ss").style.display = "block";
        });

      let buttonModal = document
        .querySelector(".box-ss");

      buttonModal.addEventListener("click", () => {
        document
          .querySelector(".comp_blogheader .component.formSS")
          .classList.add("active");
        document.querySelector(".box-ss").style.display = "none";
      });

      document
        .querySelector(".form_contents")
        .insertAdjacentHTML("afterbegin", newFraseCard);
    } else if (firstComponentBlogArtigos) {
      firstComponentBlogArtigos.insertAdjacentHTML("afterbegin", boxSS);
      firstComponentBlogArtigos.insertAdjacentElement("afterbegin", newFormSS);
      let buttonModal = document
        .querySelector(".box-ss");
      document
        .querySelector(".formSS")
        .insertAdjacentHTML("afterbegin", buttonClose);

      document
        .querySelector(".formSS")
        .querySelector(".buttonClose")
        .addEventListener("click", () => {
          document
            .querySelector(".comp_blogcontents .component.formSS")
            .classList.remove("active");
          document.querySelector(".box-ss").style.display = "block";
        });

      buttonModal.addEventListener("click", () => {
        document
          .querySelector(".comp_blogcontents .component.formSS")
          .classList.add("active");
        document.querySelector(".box-ss").style.display = "none";
      });

      document
        .querySelector(".form_contents")
        .insertAdjacentHTML("afterbegin", newFraseCard);
    }
  } catch (e) {
    console.log(e);
  }
}
