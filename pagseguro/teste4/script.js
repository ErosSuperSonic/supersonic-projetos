const inputSelect = document.querySelector(".inputs-user select");
const inputValueMaquininha = document.querySelector("#digiteValor");
const selectForParcel = document.querySelector("#selectForParcel");
const inputsVendas = document.querySelectorAll(".inputs-vendas");
const spanInputDigiteValor = document.querySelector(".labelDigiteValor span");

// Mascara para valor
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

function createOptionsInSelect(quantidadeParcelas) {
  document.querySelectorAll(".option-add-js").forEach((el) => {
    el.remove();
  });

  for (let i = 2; i <= quantidadeParcelas; i++) {
    let option = document.createElement("option");
    option.value = "CREDIT_CARD-" + i;
    option.innerHTML = i + " Parcelas";
    option.classList.add("option-add-js");
    selectForParcel.appendChild(option);
  }
}
inputsVendas.forEach((input) => {
  input.addEventListener("click", () => {
    setCreateOption(
      inputValueMaquininha.value.replaceAll(".", "").replaceAll(",00", "")
    );
  });
});

inputValueMaquininha.addEventListener("keyup", (e) => {
  const valueTotal = Number(String(e.target.value).replaceAll(",", ""));
  mascaraMoeda(e.target);
  setCreateOption(valueTotal / 100);

  if (e.target.value.length > 1) {
    spanInputDigiteValor.classList.add("active");
  } else {
    spanInputDigiteValor.classList.remove("active");
  }
});

function setCreateOption(valueTotal) {
  const veiculoDePagamento = getChannel();
  // Mobile  === Venda com a maquininha
  // WEB vendas pela internet
  if (valueTotal >= 8 && valueTotal <= 11) {
    createOptionsInSelect(2);
  } else if (valueTotal >= 12 && valueTotal <= 15) {
    createOptionsInSelect(3);
  } else if (valueTotal >= 16 && valueTotal <= 19) {
    createOptionsInSelect(4);
  } else if (valueTotal >= 20 && valueTotal <= 23) {
    createOptionsInSelect(5);
  } else if (valueTotal >= 24 && valueTotal <= 27) {
    createOptionsInSelect(6);
  } else if (valueTotal >= 28 && valueTotal <= 31) {
    createOptionsInSelect(7);
  } else if (valueTotal >= 32 && valueTotal <= 35) {
    createOptionsInSelect(8);
  } else if (valueTotal >= 36 && valueTotal <= 39) {
    createOptionsInSelect(9);
  } else if (valueTotal >= 40 && valueTotal <= 43) {
    createOptionsInSelect(10);
  } else if (valueTotal >= 44 && valueTotal <= 47) {
    createOptionsInSelect(11);
  } else if (valueTotal >= 48 && veiculoDePagamento === "WEB") {
    createOptionsInSelect(12);
  } else if (
    valueTotal >= 48 &&
    valueTotal <= 55 &&
    veiculoDePagamento === "MOBILE"
  ) {
    createOptionsInSelect(13);
  } else if (
    valueTotal >= 56 &&
    valueTotal <= 59 &&
    veiculoDePagamento === "MOBILE"
  ) {
    createOptionsInSelect(14);
  } else if (
    valueTotal >= 60 &&
    valueTotal <= 63 &&
    veiculoDePagamento === "MOBILE"
  ) {
    createOptionsInSelect(15);
  } else if (
    valueTotal >= 64 &&
    valueTotal <= 66 &&
    veiculoDePagamento === "MOBILE"
  ) {
    createOptionsInSelect(16);
  } else if (
    valueTotal >= 67 &&
    valueTotal <= 71 &&
    veiculoDePagamento === "MOBILE"
  ) {
    createOptionsInSelect(17);
  } else if (valueTotal >= 72 && veiculoDePagamento === "MOBILE") {
    createOptionsInSelect(18);
  }
}

inputSelect.addEventListener("change", () => {
  const channel = getChannel();
  let select = "";
  let installments = "";

  inputSelect.querySelectorAll("option").forEach((el) => {
    if (el.selected) {
      select = el.value;
      installments = el.value.replace("CREDIT_CARD-", "");
    }
  });

  const data = {
    channel: channel,
    installmentType: "SELLER",
    installments: installments,
    paymentMethod: "CREDIT_CARD",
    price: Number(
      inputValueMaquininha.value
        .replaceAll(".", "")
        .replaceAll(",00", "")
        .replace(",", ".")
    ),
    select: select,
    type: "EMBEDDED",
  };

  getResponseData(data);
});

function getChannel() {
  let channel = "";
  document.querySelectorAll(".inputs-vendas input").forEach((el) => {
    if (el.checked === true) {
      channel = el.className;
    }
  });
  return channel;
}
function getResponseData(dataUser) {
  // axios
  //   .post(
  //     "https://api.site.pagseguro.uol.com.br/ps-website-bff/v2/tax-and-rates/simulate",
  //     dataUser
  //   )
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });

  const options = {
    method: "POST",
    url: "https://api.site.pagseguro.uol.com.br/ps-website-bff/v2/tax-and-rates/simulate",
    headers: { "Content-Type": "application/json" },
    data: {
      channel: "MOBILE",
      installmentType: "SELLER",
      installments: "3",
      paymentMethod: "CREDIT_CARD",
      price: 100,
      select: "CREDIT_CARD-3",
      type: "EMBEDDED",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}
