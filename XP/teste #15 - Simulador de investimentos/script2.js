let depositoInicial = 0;
let todoMesDepositado = 0;
let tempoDeResgate = 0;

let valorBruto = 0;
let valorTotalDeposito = 0;




const inputValorInvestido = document.querySelector("#valueInvestimento");

const buttonRemoverDepositoInicial = document.querySelectorAll(".valorInvestido button")[1]
const buttonAdicinarDepositoInicial = document.querySelectorAll(".valorInvestido button")[0]

const buttonRemoverAnos = document.querySelectorAll(".resgate button")[1]
const buttonAdicionarAnos = document.querySelectorAll(".resgate button")[0]



function verifyButtonDisabled() {


    if (todoMesDepositado <= 0) {
        buttonRemoverDepositoInicial.disabled = true;
        buttonRemoverDepositoInicial.style.background = "#f7e8b7"
    } else {
        buttonRemoverDepositoInicial.disabled = false;
        buttonRemoverDepositoInicial.style.background = "#FBC105"
    }

    if (tempoDeResgate <= 0) {
        buttonRemoverAnos.disabled = true;
        buttonRemoverAnos.style.background = "#f7e8b7"
    } else {
        buttonRemoverAnos.disabled = false;
        buttonRemoverAnos.style.background = "#FBC105"
    }
}

// ======================================================================
//Todoo Mes Depositado
buttonAdicinarDepositoInicial.addEventListener("click", () => {

    const somador = Number(inputValorInvestido.value.replaceAll(",", "")) + 100
    inputValorInvestido.value = `${somador}`


    if (somador >= 1) {
        todoMesDepositado = 1
    }

    verifyButtonDisabled()
    verifyTotalResgate()
})




buttonRemoverDepositoInicial.addEventListener("click", () => {
    const somador = Number(inputValorInvestido.value.replaceAll(",", "")) - 100

    inputValorInvestido.value = `${somador}`

    if (somador <= 0) {
        todoMesDepositado = 0
    }
    verifyButtonDisabled()
    verifyTotalResgate()
})




// ======================================================================
//Tempo de resgate do valor
buttonAdicionarAnos.addEventListener("click", () => {
    tempoDeResgate = tempoDeResgate + 1
    document.querySelector(".resgate span").innerHTML = `${tempoDeResgate}`
    verifyButtonDisabled()
    verifyTotalResgate()
})

buttonRemoverAnos.addEventListener("click", () => {
    tempoDeResgate = tempoDeResgate - 1;

    if (tempoDeResgate <= 0) {
        tempoDeResgate = 0
    }
    document.querySelector(".resgate span").innerHTML = `${tempoDeResgate}`

    verifyButtonDisabled()
    verifyTotalResgate()
})

inputValorInvestido.addEventListener("keyup", () => {
    verifyTotalResgate()

})

function verifyTotalResgate() {
    const newValueInput = inputValorInvestido.value

    const meses = tempoDeResgate * 12

    let totalValue = 0;
    if (meses > 0) {
        totalValue = newValueInput * meses
    } else {
        totalValue = newValueInput
    }



    const taxaFixa = 0.1075 / 12
                        //1000        X (1 + 0.01)       ^ 12
    const valorFuturo = newValueInput * (1 + taxaFixa) ** meses
    document.querySelector("#inputTotal").value = `${valorFuturo.toFixed(2)}`
}





buttonAdicinarDepositoInicial.click();
buttonAdicionarAnos.click();
verifyButtonDisabled()