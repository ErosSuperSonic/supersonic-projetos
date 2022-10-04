const contentSS = `
  <div class="cadastrarFaturaEletronica">
    <span>Ganhe tempo e receba as faturas por e-mail</span>
    <a href="https://autoatendimento-qas.comgas.com.br/faturaEletronica">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.33333 4C4.44928 4 3.60143 4.33714 2.97631 4.93726C2.35119 5.53737 2 6.35131 2 7.2V7.5216L12 12.6912L22 7.5232V7.2C22 6.35131 21.6488 5.53737 21.0237 4.93726C20.3986 4.33714 19.5507 4 18.6667 4H5.33333ZM22 9.3392L12.395 14.304C12.2736 14.3667 12.1379 14.3996 12 14.3996C11.8621 14.3996 11.7264 14.3667 11.605 14.304L2 9.3392V16.8C2 17.6487 2.35119 18.4626 2.97631 19.0627C3.60143 19.6629 4.44928 20 5.33333 20H18.6667C19.5507 20 20.3986 19.6629 21.0237 19.0627C21.6488 18.4626 22 17.6487 22 16.8V9.3392Z" fill="white"/>
      </svg>
        
      Cadastrar fatura por e-mail
    </a>
  </div>
`

const root = document.querySelector("body");
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if(window.location.pathname === '/contas-e-pagamentos'){
      insertButtonInSite()
    }
  });
});

observer.observe(root, {
  childList: true,
  subtree: true,
});


function insertButtonInSite(){
  const row1ContasPagamentos = document.querySelector("#mainContent > div > ng-component > div > nav")
  
  if(row1ContasPagamentos){    
    if(!row1ContasPagamentos.querySelector(".cadastrarFaturaEletronica")){
      row1ContasPagamentos.insertAdjacentHTML("afterbegin", contentSS)
    }
  }
}