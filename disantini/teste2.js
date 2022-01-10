//Puxando dados com api
async function fetchProducts(){
    const response = await fetch("https://www.disantinni.com.br/on/demandware.store/Sites-di-santinni-Site/default/Product-Variation?dwvar_74675_color=74675018&dwvar_74675_size=35&pid=74675&quantity=1")
    return response
}

fetchProducts().then(product => {
    console.log(product); // fetched movies
});



const url = "https://www.disantinni.com.br/on/demandware.store/Sites-di-santinni-Site/default/Product-Variation?"
const pageAction = document.querySelector(".page[data-action]").dataset.action
const pageQueryString = document.querySelector(".page[data-action]").dataset.querystring

const locale  = 'default'