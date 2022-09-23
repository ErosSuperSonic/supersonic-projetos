function replaceTextJuros() {
  document.querySelectorAll(".price-block__price").forEach((element) => {
    const valueOld = element.innerHTML;

    if (!valueOld.split("<br>")[0].includes("equivalente")) {
      let newItemArray = valueOld
        .split("<br>")[0]
        .replace("12x de", "12x sem juros de ");
      let newValue = newItemArray + valueOld.split("<br>")[1];
      element.innerHTML = newValue;
    }
  });
}
