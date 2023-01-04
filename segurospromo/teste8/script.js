const contentSS = `
<div class="modal-click-ss">
<p>Seguro viagem com <span>15%</span> de desconto?</p>

<button>
  Clique aqui!
  <svg
    width="10"
    height="16"
    viewBox="0 0 10 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.30861 10.2159H6.09394L7.78579 14.3369C7.90364 14.6226 7.76897 14.943 7.49961 15.0642L6.00976 15.7135C5.73203 15.8347 5.42058 15.6962 5.30273 15.4191L3.69506 11.5059L1.06888 14.2071C0.718913 14.567 0.151367 14.2895 0.151367 13.8175V0.796939C0.151367 0.299969 0.755034 0.0576966 1.06885 0.407363L9.6874 9.27227C10.035 9.61103 9.77852 10.2159 9.30861 10.2159Z"
      fill="black"
    />
  </svg>
</button>
</div>
`

if(!document.querySelector(".modal-click-ss")){
  document.querySelector(".comp_header").insertAdjacentHTML("afterend", contentSS)
}
 
window.addEventListener("scroll", (e) =>{
  if(window.scrollY >= 600){
    document.querySelector(".modal-click-ss").classList.add("active")
  }else{
    document.querySelector(".modal-click-ss").classList.remove("active")
  }
})

const overlayBlack = document.querySelector(".subcomp_frame.comp_frame_v1")
document.querySelector(".modal-click-ss button").addEventListener("click", () =>{
  overlayBlack.classList.add("active")
  document.querySelector(".autocomplete-suggestions").classList.add("active")
  addButtonClose()
})



function addButtonClose(){
  const closeButton = `
  <button class="close-modal-ss">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1323_230)">
      <path d="M13.005 1.2535L7.99996 6.26003L2.99491 1.2535C2.76407 1.02259 2.45097 0.892853 2.12448 0.892853C1.96281 0.892853 1.80274 0.924704 1.65339 0.986585C1.50404 1.04847 1.36834 1.13917 1.25404 1.2535C1.13974 1.36783 1.04907 1.50357 0.987218 1.65294C0.925364 1.80232 0.893528 1.96241 0.893528 2.12409C0.893528 2.45061 1.0232 2.76377 1.25404 2.99468L6.2592 8.00132L1.25435 13.0077C1.25433 13.0077 1.25431 13.0077 1.2543 13.0077C1.13973 13.1219 1.04882 13.2576 0.986792 13.4071C0.924756 13.5565 0.892822 13.7167 0.892822 13.8785C0.892822 14.0404 0.924756 14.2006 0.986792 14.35C1.04883 14.4995 1.13975 14.6352 1.25435 14.7494L1.25519 14.7503C1.48677 14.9789 1.79907 15.1071 2.12448 15.1071C2.44988 15.1071 2.76218 14.9789 2.99376 14.7503L2.99491 14.7491L7.99996 9.7426L13.005 14.7491L13.0062 14.7503C13.2377 14.9789 13.55 15.1071 13.8755 15.1071C14.2009 15.1071 14.5132 14.9789 14.7447 14.7503L14.7456 14.7494C14.8602 14.6352 14.9511 14.4995 15.0131 14.35C15.0752 14.2006 15.1071 14.0404 15.1071 13.8785C15.1071 13.7167 15.0752 13.5565 15.0131 13.4071C14.9511 13.2576 14.8602 13.1219 14.7456 13.0077C14.7456 13.0077 14.7456 13.0077 14.7456 13.0077L9.74074 8.00132L14.7459 2.99468C14.9767 2.76377 15.1064 2.45061 15.1064 2.12409C15.1064 1.79757 14.9767 1.48441 14.7459 1.2535C14.5151 1.02259 14.2019 0.892853 13.8755 0.892853C13.549 0.892853 13.2359 1.02259 13.005 1.2535Z" fill="white" stroke="white" stroke-width="0.5"/>
      </g>
      <defs>
      <clipPath id="clip0_1323_230">
      <rect width="16" height="16" fill="white"/>
      </clipPath>
      </defs>
      </svg>
  </button>
  `

  if(!document.querySelector(".close-modal-ss")){
    document.querySelector("body.active .subcomp_frame.comp_frame_v1 .title").insertAdjacentHTML("afterend", closeButton)
    document.querySelector(".close-modal-ss").addEventListener("click", () =>{
      document.querySelector("body").classList.remove("active")
    })
  }
}



const newDivElement = `<div class="newOverlay"></div>`
document.querySelector(".subcomp_frame.comp_frame_v1").insertAdjacentHTML("beforebegin", newDivElement)
document.querySelector(".newOverlay").insertAdjacentElement("afterbegin", document.querySelector(".subcomp_frame.comp_frame_v1"))

document.querySelector(".newOverlay").addEventListener("click", (e) =>{
  if(e.target.classList.contains("newOverlay")){
    document.querySelector("body").classList.remove("active")
  }
})