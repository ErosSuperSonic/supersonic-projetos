// //Resets
// if(window.innerWidth > 768){
//   document.querySelector("#element-568").style.width = "100%"
// document.querySelector("#page-block-gy918ronptb > div.section-block > div").style.maxWidth = "100%"
// }

String.prototype.reverse = function () {
  return this.split("").reverse().join("");
};

function mascaraMoeda(campo, evento) {
  var tecla = !evento ? window.event.keyCode : evento.which;

  var valor = campo.value.replace(/[^\d]+/gi, "").reverse();
  var resultado = "";
  var mascara = "##.###.###,##".reverse();
  for (var x = 0, y = 0; x < mascara.length && y < valor.length; ) {
    if (mascara.charAt(x) != "#") {
      resultado += mascara.charAt(x);
      x++;
    } else {
      resultado += valor.charAt(y);
      y++;
      x++;
    }
  }
  campo.value = resultado.reverse();

  return (campo.value = resultado.reverse());
}

const quantidadeInvestidaInput = document.querySelector(
  ".quantidadeInvestida input"
);
const diasInvestidosInput = document.querySelector(".diasInvestidos input");
const rendimentoCDI = document.querySelector(".rendimentoCDI h4");
// const lucroCDBCampo = document.querySelector(".lucroCDB");
// const lucroSemIOF = document.querySelector(".lucroSemIOF");
const CDI = 13.65 / 100;

//Variáveis tabela

const tableInfo = document.querySelectorAll(".tableInfo td");
const infoTableList = document.querySelectorAll(".listWithInfosInGraph .value");

//========== Quantidade investida ============
const [quantidadeInvestidaMenos, quantidadeInvestidaMais] =
  document.querySelectorAll(
    ".quantidadeInvestida .modificadoresQuantidade button"
  );

quantidadeInvestidaInput.addEventListener("blur", (e) => {
  const quantidadeInvestidaValue =
    Number(
      quantidadeInvestidaInput.value.replaceAll(".", "").replaceAll(",", "")
    ) / 100;

  if (quantidadeInvestidaValue < 300000) {
    quantidadeInvestidaInput.value = "300.000,00";
  }
  LucroComCdb();
  LucroComCompromissada();

  const valueForTable = mascaraMoeda(quantidadeInvestidaInput);
  setVariablesTable(5, valueForTable);
});

quantidadeInvestidaMais.addEventListener("click", (e) => {
  const quantidadeInvestidaValue =
    Number(
      quantidadeInvestidaInput.value.replaceAll(".", "").replaceAll(",", "")
    ) / 100;
  quantidadeInvestidaInput.value = `${quantidadeInvestidaValue + 100000},00`;

  mascaraMoeda(quantidadeInvestidaInput);
  LucroComCdb();
  LucroComCompromissada();

  const valueForTable = mascaraMoeda(quantidadeInvestidaInput);
  setVariablesTable(5, valueForTable);
});

quantidadeInvestidaMenos.addEventListener("click", (e) => {
  const quantidadeInvestidaValue =
    Number(
      quantidadeInvestidaInput.value.replaceAll(".", "").replaceAll(",", "")
    ) / 100;

  if (quantidadeInvestidaValue === 300000) {
    quantidadeInvestidaInput.value = `30000000`;
    mascaraMoeda(quantidadeInvestidaInput);
  } else {
    quantidadeInvestidaInput.value = `${quantidadeInvestidaValue - 100000},00`;
    mascaraMoeda(quantidadeInvestidaInput);
  }
  LucroComCdb();
  LucroComCompromissada();

  const valueForTable = mascaraMoeda(quantidadeInvestidaInput);
  setVariablesTable(5, valueForTable);
});

//========== Dias investidos na compromissada ============
const [diasInvestidosMenos, diasInvestidosMais] = document.querySelectorAll(
  ".diasInvestidos .modificadoresQuantidade button"
);
const listDiasUteis = [1, 3, 5, 7, 10];

diasInvestidosMenos.addEventListener("click", (e) => {
  const indexDoListDiasUteis = listDiasUteis.indexOf(
    Number(diasInvestidosInput.value)
  );
  if (indexDoListDiasUteis > 0) {
    diasInvestidosInput.value = `0${listDiasUteis[indexDoListDiasUteis - 1]}`;
  } else {
    diasInvestidosInput.value = `${listDiasUteis.at(-1)}`;
  }

  LucroComCdb();
  LucroComCompromissada();
});

diasInvestidosMais.addEventListener("click", (e) => {
  const indexDoListDiasUteis = listDiasUteis.indexOf(
    Number(diasInvestidosInput.value)
  );

  if (indexDoListDiasUteis < 3) {
    diasInvestidosInput.value = `0${listDiasUteis[indexDoListDiasUteis + 1]}`;
  } else if (indexDoListDiasUteis === 3) {
    diasInvestidosInput.value = `${listDiasUteis[indexDoListDiasUteis + 1]}`;
  } else {
    diasInvestidosInput.value = `0${listDiasUteis[0]}`;
  }

  LucroComCdb();
  LucroComCompromissada();
});

//===========  Lucro com CDB ===========

function LucroComCdb() {
  const quantidadeInvestidaValue =
    Number(
      quantidadeInvestidaInput.value.replaceAll(".", "").replaceAll(",", "")
    ) / 100;
  let dias = diasInvestidosInput.value;
  const valorBruto = quantidadeInvestidaValue * (1 + CDI) ** (dias / 252);
  const rendimentoBruto =
    (quantidadeInvestidaValue - valorBruto).toFixed(2) * -1;
  let IOF = 0;

  function infoToday() {
    let day = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();

    return `${month}/${day}/${year}`;
  }

  var day1 = new Date(infoToday());
  let day2 = new Date("09/05/2022");

  if (dias === "01") {
    day2 = new Date("09/26/2022");
  } else if (dias === "03") {
    day2 = new Date("09/28/2022");
  } else if (dias === "05") {
    day2 = new Date("09/30/2022");
  } else if (dias === "07") {
    day2 = new Date("10/04/2022");
  } else {
    day2 = new Date("10/07/2022");
  }

  var difference = Math.abs(day2 - day1);
  diasEntreAsDatas = difference / (1000 * 3600 * 24);

  const listIOFDesconto = [
    96, 93, 90, 86, 83, 80, 76, 73, 70, 66, 63, 60, 56, 53, 50, 46, 43, 40, 36,
    33, 30, 26, 23, 20, 16, 13, 10, 6, 3,
  ];

  if (diasEntreAsDatas < 30) {
    IOF = (
      rendimentoBruto *
      (listIOFDesconto[diasEntreAsDatas - 1] / 100)
    ).toFixed(2);
  }
  const IR = ((rendimentoBruto - IOF) * (22.5 / 100)).toFixed(2);

  const valorLiquido = (valorBruto - IOF - IR).toFixed(2);

  const lucroCDB = (valorLiquido - quantidadeInvestidaValue).toFixed(2);

  // lucroCDBCampo.innerHTML = `R$ ${lucroCDB.replace(".", ",")}`;

  const applicationData = `${day1.getDate()}/${
    day1.getMonth() <= 10
      ? String(day1.getMonth()).padStart(2, "0")
      : day1.getMonth()
  }/${day1.getFullYear()}`;

  const dueDate = `${
    day2.getDate() <= 10
      ? String(day2.getDate()).padStart(2, "0")
      : day2.getDate()
  }/${
    day2.getMonth() <= 10
      ? String(day2.getMonth()).padStart(2, "0")
      : day2.getMonth()
  }/${day2.getFullYear()}`;

  setVariablesTable(6, applicationData);
  setVariablesTable(7, dias);
  setVariablesTable(8, dueDate);
  rendimentoPorcentagemCDI(dias);
}

//===========  Lucro com Compromissada ===========

function LucroComCompromissada() {
  const quantidadeInvestidaValue =
    Number(
      quantidadeInvestidaInput.value.replaceAll(".", "").replaceAll(",", "")
    ) / 100;

  let dias = Number(diasInvestidosInput.value);

  const valoresTaxa = {
    1: 43,
    3: 48,
    5: 53,
    7: 58,
    10: 63,
  };

  let taxa = valoresTaxa[dias] / 100;

  let CDIEquivalente =
    (((((1 + CDI) ** (1 / 252) - 1) * taxa + 1) ** 252 - 1) * 100).toFixed(6) /
    100;

  const valorBruto = (
    quantidadeInvestidaValue *
    (1 + Number(CDIEquivalente)) ** (dias / 252)
  ).toFixed(2);

  const rendimentoBruto = (valorBruto - quantidadeInvestidaValue).toFixed(2);
  const IOF = 0;
  const IR = (rendimentoBruto - IOF) * (22.5 / 100);

  const valorLiquido = (valorBruto - IOF - IR).toFixed(2);

  const lucroComComprom = (valorLiquido - quantidadeInvestidaValue).toFixed(2);

  // lucroSemIOF.innerHTML = `R$ ${lucroComComprom.replace(".", ",")}`;

  rendimentoPorcentagemCDI(dias);
}

function rendimentoPorcentagemCDI(diasInvestidos = 5) {
  const valoresTaxa = {
    1: 1075,
    3: 480,
    5: 312,
    7: 242,
    10: 185,
  };

  rendimentoCDI.innerHTML = `${valoresTaxa[diasInvestidos]}% <span>do CDI</span>`;
}

rendimentoPorcentagemCDI();
LucroComCdb();
LucroComCompromissada();

function setVariablesTable(key, value) {
  if (key == 5) {
    tableInfo[key].innerHTML = `<strong>R$ ${value}</strong>`;
  } else {
    tableInfo[key].innerHTML = `<strong>${value}</strong>`;
  }
}

function setVariablesTableInfos(key, value, cipher = false) {
  if(cipher){
    tableInfo[key].innerHTML = `<strong>R$ ${value}</strong>`;
  }else{
    tableInfo[key].innerHTML = `<strong>${value}</strong>`;
  }
}
