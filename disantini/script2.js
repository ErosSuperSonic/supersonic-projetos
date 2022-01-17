//Adionando e Ativando popup
const btnGuiaTamanhos = document.querySelector(".guia-tamanho-ss");
const maincontent = document.querySelector("#maincontent");

maincontent.insertAdjacentHTML(
	"afterend",
	`<div class="guia-tamanhos-ss-popup">
    <div class="container-popup">
        <div class="title">
            <p>Guia de tamanhos</p>

            <div class="close-popup-ss">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="56.936"
                    height="56.936" viewBox="0 0 56.936 56.936">
                    <g id="Grupo_665" data-name="Grupo 665" transform="translate(8 8)">
                        <g transform="matrix(1, 0, 0, 1, -8, -5)">
                            <circle id="Elipse_50-2" data-name="Elipse 50" cx="19.468" cy="19.468" r="19.468"
                                transform="translate(8 5)" fill="#fff"></circle>
                        </g>
                        <path id="Caminho_110" data-name="Caminho 110"
                            d="M-2463.8,51.342l-4.462-4.462,4.261-4.263a2.874,2.874,0,0,0,0-4.067,2.878,2.878,0,0,0-4.068,0l-4.26,4.262-4.461-4.462a2.88,2.88,0,0,0-4.07,0,2.878,2.878,0,0,0,0,4.068l4.463,4.462-4.262,4.262a2.877,2.877,0,0,0,0,4.067,2.864,2.864,0,0,0,2.034.842,2.871,2.871,0,0,0,2.036-.844l4.26-4.26,4.462,4.46a2.86,2.86,0,0,0,2.034.842,2.864,2.864,0,0,0,2.034-.844A2.873,2.873,0,0,0-2463.8,51.342Z"
                            transform="translate(2491.797 -27.414)" fill="#4e4e50"></path>
                    </g>
                </svg>
            </div>
        </div>

        <div class="element">
            <table class="table">
                <thead class="bg-grey-ss">
                  <tr>
                    <th class="text-center" scope="col" >Tamanho</th>
                    <th class="text-center" scope="col">EUA</th>
                    <th class="text-center" scope="col" >Comprimento do pé (cm)</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td class="text-center" scope="row">34,5</th>
                    <td class="text-center">34,5</td>
                    <td class="text-center">22</td>
                  </tr>

                  <tr class="bg-grey-ss">
                    <td class="text-center" scope="row">35</th>
                    <td class="text-center">4,5</td>
                    <td class="text-center">22,5</td>
                  </tr>

                  <tr>
                    <td class="text-center" scope="row">36</th>
                    <td class="text-center">5</td>
                    <td class="text-center">23,5</td>
                  </tr>

                  <tr class="bg-grey-ss">
                    <td class="text-center" scope="row">37</th>
                    <td class="text-center">6</td>
                    <td class="text-center">24</td>
                  </tr>


                  <tr>
                    <td class="text-center" scope="row">37,5</th>
                    <td class="text-center">6,5</td>
                    <td class="text-center">24,5</td>
                  </tr>

                  <tr class="bg-grey-ss">
                    <td class="text-center" scope="row">38</th>
                    <td class="text-center">7</td>
                    <td class="text-center">25</td>
                  </tr>

                  <tr>
                    <td class="text-center" scope="row">39</th>
                    <td class="text-center">7,5</td>
                    <td class="text-center">25,5</td>
                  </tr>

                  <tr class="bg-grey-ss">
                    <td class="text-center" scope="row">39,5</th>
                    <td class="text-center">8</td>
                    <td class="text-center">26</td>
                  </tr>

                  <tr>
                    <td class="text-center" scope="row">40</th>
                    <td class="text-center">8,5</td>
                    <td class="text-center">26,5</td>
                  </tr>

                  <tr class="bg-grey-ss">
                    <td class="text-center" scope="row">40,5</th>
                    <td class="text-center">9</td>
                    <td class="text-center">27</td>
                  </tr>


                  <tr>
                    <td class="text-center" scope="row">41</th>
                    <td class="text-center">9,5</td>
                    <td class="text-center">27,5</td>
                  </tr>

                  <tr class="bg-grey-ss">
                    <td class="text-center" scope="row">42</th>
                    <td class="text-center">10,5</td>
                    <td class="text-center">28</td>
                  </tr>

                  

                  <tr>
                    <td class="text-center" scope="row">42,5</th>
                    <td class="text-center">10,5</td>
                    <td class="text-center">28,5</td>
                  </tr>

                  <tr class="bg-grey-ss">
                    <td class="text-center" scope="row">43</th>
                    <td class="text-center">11</td>
                    <td class="text-center">28</td>
                  </tr>


            
                </tbody>
              </table>
              
        </div>
    </div>
</div>
`
);

btnGuiaTamanhos.addEventListener("click", () => {
    document.querySelector(".guia-tamanhos-ss-popup").classList.toggle("active-ss");
});

const btnClosePopup = document.querySelector(".close-popup-ss");
btnClosePopup.addEventListener("click", () => {
	document.querySelector(".guia-tamanhos-ss-popup").classList.toggle("active-ss");
});

