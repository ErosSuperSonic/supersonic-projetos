//Resets
if (window.innerWidth > 768) {
  if (document.querySelector("#element-591")) {
    document.querySelector("#element-591").style.width = "100%";
    document.querySelector(
      "#page-block-es3gspiw74 > div.section-block > div"
    ).style.maxWidth = "100%";
  }
}

function getFinalData(quantidadeDias = 5) {
  if (quantidadeDias) {
    let weekDay = new Date();
    const diasDoAno = [
      "01/11/2022",
      "03/11/2022",
      "04/11/2022",
      "07/11/2022",
      "08/11/2022",
      "09/11/2022",
      "10/11/2022",
      "11/11/2022",
      "14/11/2022",
      "16/11/2022",
      "17/11/2022",
      "18/11/2022",
      "21/11/2022",
      "22/11/2022",
      "23/11/2022",
      "24/11/2022",
      "25/11/2022",
      "28/11/2022",
      "29/11/2022",
      "30/11/2022",
      "01/12/2022",
      "02/12/2022",
      "05/12/2022",
      "06/12/2022",
      "07/12/2022",
      "08/12/2022",
      "09/12/2022",
      "12/12/2022",
      "13/12/2022",
      "14/12/2022",
      "15/12/2022",
      "16/12/2022",
      "19/12/2022",
      "20/12/2022",
      "21/12/2022",
      "22/12/2022",
      "23/12/2022",
      "26/12/2022",
      "27/12/2022",
      "28/12/2022",
      "29/12/2022",
      "30/12/2022",

      "02/01/2023",
      "03/01/2023",
      "04/01/2023",
      "05/01/2023",
      "06/01/2023",
      "09/01/2023",
      "10/01/2023",
      "11/01/2023",
      "12/01/2023",
      "13/01/2023",
      "16/01/2023",
      "17/01/2023",
      "18/01/2023",
      "19/01/2023",
      "20/01/2023",
      "23/01/2023",
      "24/01/2023",
      "25/01/2023",
      "26/01/2023",
      "27/01/2023",
      "30/01/2023",
      "31/01/2023",
    ];

    let indexAtual = 0;

    diasDoAno.forEach((data, index) => {
      if (data === weekDay.toLocaleDateString()) {
        indexAtual = index;
      }
    });

    return diasDoAno[indexAtual + quantidadeDias];
  }
}

const objectInfoTable = {
  taxaCDB: "",
  CDIEquivalente: 8.4,
  valorBrutoCDB: "",
  valorBrutoEquivalente: "",
  IOF: "",
  IR_cdb: "",
  IR_compromissada: "",
  valorLiquidoCDB: "",
  valorLiquidoCompromissada: "",
  lucroCompromissada: "",
  lucroCDB: "",
};

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
const CDI = 13.75 / 100;

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

  if (quantidadeInvestidaValue < 100000) {
    quantidadeInvestidaInput.value = "100.000,00";
  }
  LucroComCdb();
  LucroComCompromissada();
  modificationInfosTable();

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
  modificationInfosTable();

  const valueForTable = mascaraMoeda(quantidadeInvestidaInput);
  setVariablesTable(5, valueForTable);
});

quantidadeInvestidaMenos.addEventListener("click", (e) => {
  const quantidadeInvestidaValue =
    Number(
      quantidadeInvestidaInput.value.replaceAll(".", "").replaceAll(",", "")
    ) / 100;

  if (quantidadeInvestidaValue === 100000) {
    quantidadeInvestidaInput.value = `10000000`;
    mascaraMoeda(quantidadeInvestidaInput);
  } else {
    quantidadeInvestidaInput.value = `${quantidadeInvestidaValue - 100000},00`;
    mascaraMoeda(quantidadeInvestidaInput);
  }
  LucroComCdb();
  LucroComCompromissada();
  modificationInfosTable();

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
  modificationInfosTable();
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
  modificationInfosTable();
});

//===========  Lucro com CDB ===========

function LucroComCdb() {
  const quantidadeInvestidaValue =
    Number(
      quantidadeInvestidaInput.value.replaceAll(".", "").replaceAll(",", "")
    ) / 100;
  let dias = diasInvestidosInput.value;
  const valorBruto = quantidadeInvestidaValue * (1 + CDI) ** (dias / 252);

  objectInfoTable.valorBrutoCDB = valorBruto;

  const rendimentoBruto =
    (quantidadeInvestidaValue - valorBruto).toFixed(2) * -1;
  let IOF = 0;

  var day1 = new Date().toLocaleDateString();
  let day2 = getFinalData(Number(dias));

  var difference = Math.abs(
    new Date(
      `${day2.split("/")[1]} / ${day2.split("/")[0]} / ${day2.split("/")[2]}`
    ) -
      new Date(
        `${day1.split("/")[1]} / ${day1.split("/")[0]} / ${day1.split("/")[2]}`
      )
  );

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

  objectInfoTable.IOF = IOF;

  const IR = ((rendimentoBruto - IOF) * (22.5 / 100)).toFixed(2);

  objectInfoTable.IR_cdb = IR;

  const valorLiquido = (valorBruto - IOF - IR).toFixed(2);
  objectInfoTable.valorLiquidoCDB = valorLiquido;

  const lucroCDB = (valorLiquido - quantidadeInvestidaValue).toFixed(2);

  objectInfoTable.lucroCDB = lucroCDB;

  const applicationData = day1;

  const dueDate = day2;

  setVariablesTable(6, applicationData);
  setVariablesTable(7, dias);
  setVariablesTable(8, dueDate);
  rendimentoPorcentagemCDI(dias);

  modificationInfosTable();
}

//===========  Lucro com Compromissada ===========

function LucroComCompromissada() {
  const quantidadeInvestidaValue =
    Number(
      quantidadeInvestidaInput.value.replaceAll(".", "").replaceAll(",", "")
    ) / 100;

  let dias = Number(diasInvestidosInput.value);

  const valoresTaxa = {
    1: 43, //43
    3: 48, //48
    5: 53, //53
    7: 58, //58
    10: 63, //63
  };
  let taxa = valoresTaxa[dias] / 100;

  let CDIEquivalente =
    (((((1 + CDI) ** (1 / 252) - 1) * taxa + 1) ** 252 - 1) * 100).toFixed(6) /
    100;

  objectInfoTable.CDIEquivalente = CDIEquivalente;

  const valorBruto = (
    quantidadeInvestidaValue *
    (1 + Number(CDIEquivalente)) ** (dias / 252)
  ).toFixed(2);

  objectInfoTable.valorBrutoEquivalente = valorBruto;

  const rendimentoBruto = (valorBruto - quantidadeInvestidaValue).toFixed(2);
  const IOF = 0;
  const IR = (rendimentoBruto - IOF) * (22.5 / 100);
  objectInfoTable.IR_compromissada = IR;
  const valorLiquido = (valorBruto - IOF - IR).toFixed(2);
  objectInfoTable.valorLiquidoCompromissada = valorLiquido;

  const lucroComComprom = (valorLiquido - quantidadeInvestidaValue).toFixed(2);

  objectInfoTable.lucroCompromissada = lucroComComprom;

  const hoje = new Date();
  const dataDeVencimento = getFinalData(Number(dias));

  const diffTime = Math.abs(
    new Date(
      `${dataDeVencimento.split("/")[1]}/${dataDeVencimento.split("/")[0]}/${
        dataDeVencimento.split("/")[2]
      }`
    ) - hoje
  );
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  rendimentoPorcentagemCDI(dias, diffDays);

  objectInfoTable.taxaCDB = valoresTaxa[dias];
  modificationInfosTable();
}

function rendimentoPorcentagemCDI(diasInvestidos = 5, diffDays) {
  diasInvestidos = Number(diasInvestidos);
  const valoresTaxa = {
    1: 43, //43
    3: 48, //48
    5: 53, //53
    7: 58, //58
    10: 63, //63
  };

  const iof = {
    1: 96,
    2: 93,
    3: 90,
    4: 86,
    5: 83,
    8: 73,
    7: 76,
    8: 73,
    9: 70,
    10: 66,
    11: 63,
    12: 60,
    13: 56,
    14: 53,
    15: 50,
    16: 46,
    17: 43,
    18: 40,
    19: 36,
    20: 33,
    21: 30,
    22: 26,
    23: 23,
    24: 20,
    25: 16,
    26: 13,
    27: 10,
    28: 6,
    29: 3,
  };

  const equivalente =
    valoresTaxa[diasInvestidos] / 100 / (1 - iof[diffDays] / 100);

  if (Number(equivalente)) {
    const rendimento = String(equivalente * 100).replace(".", ",");

    let convertRendimento = Number(rendimento.replace(",", "."))
      .toFixed(2)
      .replace(".", ",");

    if (diasInvestidos == 3) {
      rendimentoCDI.innerHTML = `${convertRendimento}% <span>do CDI</span>`;
    } else if (diasInvestidos == 7) {
      rendimentoCDI.innerHTML = `${convertRendimento}% <span>do CDI</span>`;
    } else {
      rendimentoCDI.innerHTML = `${convertRendimento}% <span>do CDI</span>`;
    }
  }
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
  if (cipher) {
    tableInfo[key].innerHTML = `<strong>R$ ${value}</strong>`;
  } else {
    tableInfo[key].innerHTML = `<strong>${value}</strong>`;
  }
}

function convertCampoString(campo, evento) {
  var valor = String(campo)
    .replace(/[^\d]+/gi, "")
    .reverse();
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

function modificationInfosTable() {
  // Lucro líquido CDB
  infoTableList[0].innerHTML = `R$ ${convertCampoString(
    objectInfoTable.lucroCDB
  )}`;

  //Lucro líquido compromissada
  infoTableList[1].innerHTML = `R$ ${convertCampoString(
    objectInfoTable.lucroCompromissada
  )}`;

  //TAXA CDB/CDI Compromissada
  infoTableList[3].innerHTML = `${objectInfoTable.taxaCDB}%`;

  //CDI equivalente compromissada
  infoTableList[5].innerHTML = `${String(
    (objectInfoTable.CDIEquivalente * 100).toFixed(2)
  ).replace(".", ",")}%`;

  // //Valor bruto CDB

  infoTableList[6].innerHTML = `R$ ${convertCampoString(
    objectInfoTable.valorBrutoCDB.toFixed(2)
  )}`;

  //Valor bruto Compromissada
  infoTableList[7].innerHTML = `R$ ${convertCampoString(
    objectInfoTable.valorBrutoEquivalente
  )}`;

  // IOF CDB

  infoTableList[8].innerHTML = `R$ ${String(objectInfoTable.IOF).replace(
    ".",
    ","
  )}`;

  // IR CDB
  infoTableList[10].innerHTML = `R$ ${String(objectInfoTable.IR_cdb).replace(
    ".",
    ","
  )}`;

  // IR Compromissada
  infoTableList[11].innerHTML = `R$ ${String(
    Number(objectInfoTable.IR_compromissada).toFixed(2)
  ).replace(".", ",")}`;

  // Valor líquido CDB
  infoTableList[12].innerHTML = `R$ ${convertCampoString(
    objectInfoTable.valorLiquidoCDB
  )}`;

  //Valor líquido compromissada
  infoTableList[13].innerHTML = `R$ ${convertCampoString(
    objectInfoTable.valorLiquidoCompromissada
  )}`;
}

modificationInfosTable();
