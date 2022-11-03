const infosCards = [
  {
    title: "Ideal para quem está começando.",
    desc: "Aceite as principais bandeiras e receba também pagamentos por aproximação (NFC)",
  },
  {
    title: "Ideal para quem está começando.",
    desc: "Cabe no seu bolso, não precisa de celular e ainda vem com chip e plano de dados grátis.",
  },
  {
    title: "Delivery, MEI e profissionais autônomos",
    desc: "Ótima opção para longas jornadas de trabalho, ela conta com processamento rápido de operações e bateria de longa duração",
  },
  {
    title: "Todo tipo de negócio (A mais completa)",
    desc: "Gerencie seu estoque direto na maquininha, altere preços e realize vendas com mais agilidade.",
  },
  {
    title: "Todo tipo de negócio (Melhor custo-benefício)",
    desc: "Imprima e envie o comprovante por SMS, receba pagamentos com rapidez e compartilhe com até 6 pessoas.",
  },
  {
    title: "Todo tipo de negócio (Mais tecnologia)",
    desc: "Rápida e fácil de usar, aceita mais de 22 formas de pagamento e possui controle de fiado para te ajudar a gerenciar vendas a prazo.",
  },
];


document.querySelectorAll(".pf-destaque-off").forEach((el, index) =>{
  el.innerHTML =  `
    <div class="content-ss">
      <h4>${infosCards[index].title}</h4>
      <span>${infosCards[index].desc}</span>
    </div>  
  `
})