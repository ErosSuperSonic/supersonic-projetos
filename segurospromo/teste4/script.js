if (window.innerWidth <= 768) {
  try {
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
        
        let buttonModal = document.querySelector(".box-ss").querySelector("button");
      buttonModal.addEventListener("click", () => {
        document
          .querySelector(".comp_blogheader .component.formSS")
          .classList.add("active");
        document.querySelector(".box-ss").style.display = "none";
      });
    } else if (firstComponentBlogArtigos) {
      firstComponentBlogArtigos.insertAdjacentHTML("afterbegin", boxSS);
      firstComponentBlogArtigos.insertAdjacentElement("afterbegin", newFormSS);
      let buttonModal = document.querySelector(".box-ss").querySelector("button");

      buttonModal.addEventListener("click", () => {
        document
          .querySelector(".comp_blogcontents .component.formSS")
          .classList.add("active");
        document.querySelector(".box-ss").style.display = "none";
      });
    }


  } catch (e) {
    console.log(e);
  }
}
