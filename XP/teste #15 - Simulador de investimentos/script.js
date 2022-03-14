// let depositoInicial = 0;
// let todoMesDepositado = 0;
// let tempoDeResgate = 0;

// let valorBruto = 0;
//  let valorTotalDeposito = 0;


// const buttonRemoverDepositoInicial = document.querySelectorAll(".depositoInicial button")[0]
// const buttonAdicinarDepositoInicial = document.querySelectorAll(".depositoInicial button")[1]


// const buttonRemoverTodoMesDepositando = document.querySelectorAll(".todoMesDepositando button")[0]
// const buttonAdicionarTodoMesDepositando = document.querySelectorAll(".todoMesDepositando button")[1]


// const buttonRemoverAnos = document.querySelectorAll(".resgateAnos button")[0]
// const buttonAdicionarAnos = document.querySelectorAll(".resgateAnos button")[1]



// function verifyButtonDisabled() {
//     if (depositoInicial <= 0) {
//         buttonRemoverDepositoInicial.disabled = true;
//     } else {
//         buttonRemoverDepositoInicial.disabled = false;
//     }


//     if (todoMesDepositado <= 0) {
//         buttonRemoverTodoMesDepositando.disabled = true;
//     } else {
//         buttonRemoverTodoMesDepositando.disabled = false;
//     }

//     if (tempoDeResgate <= 0) {
//         buttonRemoverAnos.disabled = true;
//     } else {
//         buttonRemoverAnos.disabled = false;
//     }
// }
// // ======================================================================
// //Deposito Inicial
// buttonAdicinarDepositoInicial.addEventListener("click", () => {
//     depositoInicial = depositoInicial + 100;
//     document.querySelector(".depositoInicial h2").innerHTML = `${depositoInicial}`;

//     verifyButtonDisabled()
// })

// buttonRemoverDepositoInicial.addEventListener("click", () => {
//     depositoInicial = depositoInicial - 100;
//     if (depositoInicial <= 0) {
//         depositoInicial = 0
//     }
//     document.querySelector(".depositoInicial h2").innerHTML = `${depositoInicial}`;
//     verifyButtonDisabled()
// })


// // ======================================================================
// //Todoo Mes Depositado
// buttonAdicionarTodoMesDepositando.addEventListener("click", () => {
//     const somador = Number(document.querySelector(".todoMesDepositando input").value) + 100
//     document.querySelector(".todoMesDepositando input").value = `${somador}`

//     if (somador >= 1) {
//         todoMesDepositado = 1
//     }

//     verifyButtonDisabled()
// })

// buttonRemoverTodoMesDepositando.addEventListener("click", () => {
//     const somador = Number(document.querySelector(".todoMesDepositando input").value) - 100
//     document.querySelector(".todoMesDepositando input").value = `${somador}`

//     if (somador <= 0) {
//         todoMesDepositado = 0
//     }
//     verifyButtonDisabled()
// })




// // ======================================================================
// //Tempo de resgate do valor
// buttonAdicionarAnos.addEventListener("click", () => {
//     tempoDeResgate = tempoDeResgate + 1
//     document.querySelector(".resgateAnos h2 span").innerHTML = `${tempoDeResgate}`
//     verifyButtonDisabled()
// })

// buttonRemoverAnos.addEventListener("click", () => {
//     tempoDeResgate = tempoDeResgate - 1;

//     if (tempoDeResgate <= 0) {
//         tempoDeResgate = 0
//     }
//     document.querySelector(".resgateAnos h2 span").innerHTML = `${tempoDeResgate}`

//     verifyButtonDisabled()
// })






// verifyButtonDisabled()




