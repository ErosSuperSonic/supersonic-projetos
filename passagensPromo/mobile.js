if (window.innerWidth <= 768) {
    adicionarSeloInFirstCard()
    adicionarCopyMelhorPreco()
    titlePopup()


}


function adicionarSeloInFirstCard() {
    let encontrouSelos = false;

    const seloSearch = setInterval(() => {
        if (!encontrouSelos) {
            const selosFilter = document.querySelectorAll(".sticky_price")[0]


            if (selosFilter) {

                if (!document.querySelector(".seloContainer")) {
                    selosFilter.insertAdjacentHTML("afterbegin", `
                                                                <p class="seloContainer">
                                                                    <svg width="135" height="25" viewBox="0 0 135 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M26.25 5.25H114C114.966 5.25 115.75 6.0335 115.75 7V18C115.75 18.9665 114.966 19.75 114 19.75H26.25V5.25Z" stroke="#32CC34" stroke-width="0.5"/>
                                                                    <g filter="url(#filter0_d_461_117)">
                                                                    <circle cx="25.5" cy="12.5" r="8" fill="#CDFF74" stroke="#CDFF74"/>
                                                                    <path d="M25.9258 7.40002V18.7334" stroke="#186AAF" stroke-linecap="round" stroke-linejoin="round"/>
                                                                    <path d="M28.9004 10.7129C28.9004 10.4267 28.8454 10.1433 28.7386 9.87888C28.6318 9.61445 28.4753 9.37419 28.278 9.1718C28.0807 8.96942 27.8464 8.80888 27.5886 8.69935C27.3308 8.58982 27.0545 8.53345 26.7754 8.53345H24.8629C24.2993 8.53345 23.7588 8.76307 23.3603 9.1718C22.9618 9.58054 22.7379 10.1349 22.7379 10.7129C22.7379 11.291 22.9618 11.8453 23.3603 12.2541C23.7588 12.6628 24.2993 12.8924 24.8629 12.8924H27.2004C27.764 12.8924 28.3045 13.122 28.703 13.5308C29.1015 13.9395 29.3254 14.4939 29.3254 15.0719C29.3254 15.6499 29.1015 16.2043 28.703 16.613C28.3045 17.0218 27.764 17.2514 27.2004 17.2514H24.6504C24.0868 17.2514 23.5463 17.0218 23.1478 16.613C22.7493 16.2043 22.5254 15.6499 22.5254 15.0719" stroke="#186AAF" stroke-linecap="round" stroke-linejoin="round"/>
                                                                    </g>
                                                                    <path d="M47.1406 16L44.7188 9.67188H44.6797C44.7253 10.1732 44.748 10.7689 44.748 11.459V16H43.9814V8.86133H45.2314L47.4922 14.75H47.5312L49.8115 8.86133H51.0518V16H50.2217V11.4004C50.2217 10.873 50.2445 10.3001 50.29 9.68164H50.251L47.8096 16H47.1406ZM55.1533 16.0977C54.3623 16.0977 53.7373 15.8568 53.2783 15.375C52.8226 14.8932 52.5947 14.2243 52.5947 13.3682C52.5947 12.5055 52.8063 11.8203 53.2295 11.3125C53.6559 10.8047 54.2272 10.5508 54.9434 10.5508C55.6139 10.5508 56.1445 10.7721 56.5352 11.2148C56.9258 11.6543 57.1211 12.2354 57.1211 12.958V13.4707H53.4346C53.4508 14.099 53.6087 14.5758 53.9082 14.9014C54.2109 15.2269 54.6357 15.3896 55.1826 15.3896C55.7588 15.3896 56.3285 15.2692 56.8916 15.0283V15.751C56.6051 15.8747 56.3333 15.9626 56.0762 16.0146C55.8223 16.07 55.5146 16.0977 55.1533 16.0977ZM54.9336 11.2295C54.5039 11.2295 54.1605 11.3695 53.9033 11.6494C53.6494 11.9294 53.4997 12.3167 53.4541 12.8115H56.252C56.252 12.3005 56.138 11.9098 55.9102 11.6396C55.6823 11.3662 55.3568 11.2295 54.9336 11.2295ZM59.3184 16H58.5078V8.40234H59.3184V16ZM64.6992 16V12.5381C64.6992 12.1019 64.5999 11.7764 64.4014 11.5615C64.2028 11.3467 63.8919 11.2393 63.4688 11.2393C62.9056 11.2393 62.4938 11.3923 62.2334 11.6982C61.9762 12.0042 61.8477 12.5055 61.8477 13.2021V16H61.0371V8.40234H61.8477V10.7021C61.8477 10.9788 61.8346 11.2083 61.8086 11.3906H61.8574C62.0169 11.1335 62.2432 10.9316 62.5361 10.7852C62.8324 10.6354 63.1693 10.5605 63.5469 10.5605C64.2012 10.5605 64.6911 10.7168 65.0166 11.0293C65.3454 11.3385 65.5098 11.8317 65.5098 12.5088V16H64.6992ZM71.7988 13.3193C71.7988 14.1917 71.5791 14.8737 71.1396 15.3652C70.7002 15.8535 70.0931 16.0977 69.3184 16.0977C68.8398 16.0977 68.415 15.9854 68.0439 15.7607C67.6729 15.5361 67.3864 15.2139 67.1846 14.7939C66.9827 14.374 66.8818 13.8825 66.8818 13.3193C66.8818 12.4469 67.0999 11.7682 67.5361 11.2832C67.9723 10.7949 68.5778 10.5508 69.3525 10.5508C70.1012 10.5508 70.6953 10.7998 71.1348 11.2979C71.5775 11.7959 71.7988 12.4697 71.7988 13.3193ZM67.7217 13.3193C67.7217 14.0029 67.8584 14.5238 68.1318 14.8818C68.4053 15.2399 68.8073 15.4189 69.3379 15.4189C69.8685 15.4189 70.2705 15.2415 70.5439 14.8867C70.8206 14.5286 70.959 14.0062 70.959 13.3193C70.959 12.639 70.8206 12.123 70.5439 11.7715C70.2705 11.4167 69.8652 11.2393 69.3281 11.2393C68.7975 11.2393 68.3971 11.4134 68.127 11.7617C67.8568 12.11 67.7217 12.6292 67.7217 13.3193ZM75.666 10.5508C75.9036 10.5508 76.1169 10.5703 76.3057 10.6094L76.1934 11.3613C75.972 11.3125 75.7767 11.2881 75.6074 11.2881C75.1745 11.2881 74.8034 11.4639 74.4941 11.8154C74.1882 12.167 74.0352 12.6048 74.0352 13.1289V16H73.2246V10.6484H73.8936L73.9863 11.6396H74.0254C74.224 11.2913 74.4632 11.0228 74.7432 10.834C75.0231 10.6452 75.3307 10.5508 75.666 10.5508ZM82.3945 16.0977C82.0462 16.0977 81.7272 16.0342 81.4375 15.9072C81.151 15.777 80.9102 15.5785 80.7148 15.3115H80.6562C80.6953 15.624 80.7148 15.9202 80.7148 16.2002V18.4023H79.9043V10.6484H80.5635L80.6758 11.3809H80.7148C80.9232 11.0879 81.1657 10.8763 81.4424 10.7461C81.7191 10.6159 82.0365 10.5508 82.3945 10.5508C83.1042 10.5508 83.651 10.7933 84.0352 11.2783C84.4225 11.7633 84.6162 12.4437 84.6162 13.3193C84.6162 14.1982 84.4193 14.8818 84.0254 15.3701C83.6348 15.8551 83.0911 16.0977 82.3945 16.0977ZM82.2773 11.2393C81.7305 11.2393 81.335 11.3906 81.0908 11.6934C80.8467 11.9961 80.7214 12.4779 80.7148 13.1387V13.3193C80.7148 14.0713 80.8402 14.61 81.0908 14.9355C81.3415 15.2578 81.7435 15.4189 82.2969 15.4189C82.7591 15.4189 83.1204 15.2318 83.3809 14.8574C83.6445 14.4831 83.7764 13.9671 83.7764 13.3096C83.7764 12.6423 83.6445 12.1312 83.3809 11.7764C83.1204 11.4183 82.7526 11.2393 82.2773 11.2393ZM88.4785 10.5508C88.7161 10.5508 88.9294 10.5703 89.1182 10.6094L89.0059 11.3613C88.7845 11.3125 88.5892 11.2881 88.4199 11.2881C87.987 11.2881 87.6159 11.4639 87.3066 11.8154C87.0007 12.167 86.8477 12.6048 86.8477 13.1289V16H86.0371V10.6484H86.7061L86.7988 11.6396H86.8379C87.0365 11.2913 87.2757 11.0228 87.5557 10.834C87.8356 10.6452 88.1432 10.5508 88.4785 10.5508ZM92.3799 16.0977C91.5889 16.0977 90.9639 15.8568 90.5049 15.375C90.0492 14.8932 89.8213 14.2243 89.8213 13.3682C89.8213 12.5055 90.0329 11.8203 90.4561 11.3125C90.8825 10.8047 91.4538 10.5508 92.1699 10.5508C92.8405 10.5508 93.3711 10.7721 93.7617 11.2148C94.1523 11.6543 94.3477 12.2354 94.3477 12.958V13.4707H90.6611C90.6774 14.099 90.8353 14.5758 91.1348 14.9014C91.4375 15.2269 91.8623 15.3896 92.4092 15.3896C92.9854 15.3896 93.555 15.2692 94.1182 15.0283V15.751C93.8317 15.8747 93.5599 15.9626 93.3027 16.0146C93.0488 16.07 92.7412 16.0977 92.3799 16.0977ZM92.1602 11.2295C91.7305 11.2295 91.387 11.3695 91.1299 11.6494C90.876 11.9294 90.7262 12.3167 90.6807 12.8115H93.4785C93.4785 12.3005 93.3646 11.9098 93.1367 11.6396C92.9089 11.3662 92.5833 11.2295 92.1602 11.2295ZM97.873 16.0977C97.0983 16.0977 96.4977 15.86 96.0713 15.3848C95.6481 14.9062 95.4365 14.2308 95.4365 13.3584C95.4365 12.4632 95.6514 11.7715 96.0811 11.2832C96.514 10.7949 97.1292 10.5508 97.9268 10.5508C98.1839 10.5508 98.4411 10.5785 98.6982 10.6338C98.9554 10.6891 99.1572 10.7542 99.3037 10.8291L99.0547 11.5176C98.8757 11.446 98.6803 11.3874 98.4688 11.3418C98.2572 11.293 98.07 11.2686 97.9072 11.2686C96.82 11.2686 96.2764 11.9619 96.2764 13.3486C96.2764 14.0062 96.4082 14.5107 96.6719 14.8623C96.9388 15.2139 97.3327 15.3896 97.8535 15.3896C98.2995 15.3896 98.7568 15.2936 99.2256 15.1016V15.8193C98.8675 16.0049 98.4167 16.0977 97.873 16.0977ZM98.5957 17.4111C98.5957 17.7269 98.4704 17.971 98.2197 18.1436C97.9723 18.3161 97.6045 18.4023 97.1162 18.4023C96.9502 18.4023 96.7939 18.3877 96.6475 18.3584V17.8408C96.7939 17.8669 96.9632 17.8799 97.1553 17.8799C97.4124 17.8799 97.6061 17.8473 97.7363 17.7822C97.8698 17.7171 97.9365 17.5967 97.9365 17.4209C97.9365 17.2809 97.8714 17.167 97.7412 17.0791C97.6143 16.9945 97.3734 16.9245 97.0186 16.8691L97.4482 16H97.9854L97.7168 16.5615C98.3027 16.6885 98.5957 16.9717 98.5957 17.4111ZM105.119 13.3193C105.119 14.1917 104.899 14.8737 104.46 15.3652C104.021 15.8535 103.413 16.0977 102.639 16.0977C102.16 16.0977 101.735 15.9854 101.364 15.7607C100.993 15.5361 100.707 15.2139 100.505 14.7939C100.303 14.374 100.202 13.8825 100.202 13.3193C100.202 12.4469 100.42 11.7682 100.856 11.2832C101.293 10.7949 101.898 10.5508 102.673 10.5508C103.422 10.5508 104.016 10.7998 104.455 11.2979C104.898 11.7959 105.119 12.4697 105.119 13.3193ZM101.042 13.3193C101.042 14.0029 101.179 14.5238 101.452 14.8818C101.726 15.2399 102.128 15.4189 102.658 15.4189C103.189 15.4189 103.591 15.2415 103.864 14.8867C104.141 14.5286 104.279 14.0062 104.279 13.3193C104.279 12.639 104.141 12.123 103.864 11.7715C103.591 11.4167 103.186 11.2393 102.648 11.2393C102.118 11.2393 101.717 11.4134 101.447 11.7617C101.177 12.11 101.042 12.6292 101.042 13.3193Z" fill="#CDFF74"/>
                                                                    <path d="M0 4H133C134.105 4 135 4.89543 135 6V22C135 23.1046 134.105 24 133 24H0V4Z" fill="#CDFF74"/>
                                                                    <path d="M39.1855 19L36.7188 11.8457H36.666C36.6777 12.0059 36.6914 12.2246 36.707 12.502C36.7227 12.7793 36.7363 13.0762 36.748 13.3926C36.7598 13.709 36.7656 14.0117 36.7656 14.3008V19H35.4883V10.4336H37.4629L39.8359 17.2715H39.8711L42.3262 10.4336H44.2949V19H42.9531V14.2305C42.9531 13.9688 42.957 13.6855 42.9648 13.3809C42.9766 13.0762 42.9883 12.7871 43 12.5137C43.0156 12.2402 43.0273 12.0215 43.0352 11.8574H42.9883L40.4277 19H39.1855ZM51.4023 19H46.5508V10.4336H51.4023V11.6172H47.957V13.9434H51.1855V15.1211H47.957V17.8105H51.4023V19ZM53.2539 19V10.4336H54.6602V17.8047H58.2988V19H53.2539ZM66.5371 19H65.1367V15.1328H61.1875V19H59.7812V10.4336H61.1875V13.9375H65.1367V10.4336H66.5371V19ZM76.4102 14.7051C76.4102 15.3652 76.3262 15.9668 76.1582 16.5098C75.9941 17.0488 75.7461 17.5137 75.4141 17.9043C75.082 18.291 74.666 18.5898 74.166 18.8008C73.666 19.0117 73.0801 19.1172 72.4082 19.1172C71.7246 19.1172 71.1309 19.0117 70.627 18.8008C70.127 18.5898 69.7109 18.2891 69.3789 17.8984C69.0508 17.5078 68.8047 17.041 68.6406 16.498C68.4766 15.9551 68.3945 15.3535 68.3945 14.6934C68.3945 13.8105 68.5391 13.041 68.8281 12.3848C69.1211 11.7246 69.5645 11.2129 70.1582 10.8496C70.7559 10.4824 71.5098 10.2988 72.4199 10.2988C73.3105 10.2988 74.0508 10.4805 74.6406 10.8438C75.2305 11.207 75.6719 11.7188 75.9648 12.3789C76.2617 13.0352 76.4102 13.8105 76.4102 14.7051ZM69.8711 14.7051C69.8711 15.3652 69.9609 15.9375 70.1406 16.4219C70.3203 16.9023 70.5957 17.2734 70.9668 17.5352C71.3418 17.793 71.8223 17.9219 72.4082 17.9219C72.998 17.9219 73.4785 17.793 73.8496 17.5352C74.2207 17.2734 74.4941 16.9023 74.6699 16.4219C74.8457 15.9375 74.9336 15.3652 74.9336 14.7051C74.9336 13.7012 74.7324 12.916 74.3301 12.3496C73.9316 11.7793 73.2949 11.4941 72.4199 11.4941C71.834 11.4941 71.3516 11.623 70.9727 11.8809C70.5977 12.1387 70.3203 12.5078 70.1406 12.9883C69.9609 13.4648 69.8711 14.0371 69.8711 14.7051ZM80.6582 10.4336C81.3965 10.4336 82.0059 10.5234 82.4863 10.7031C82.9707 10.8828 83.3301 11.1562 83.5645 11.5234C83.8027 11.8906 83.9219 12.3574 83.9219 12.9238C83.9219 13.3457 83.8438 13.7051 83.6875 14.002C83.5312 14.2988 83.3262 14.5449 83.0723 14.7402C82.8184 14.9355 82.5469 15.0918 82.2578 15.209L84.6895 19H83.1016L81.0332 15.5664H79.6562V19H78.25V10.4336H80.6582ZM80.5645 11.6055H79.6562V14.4062H80.6289C81.2812 14.4062 81.7539 14.2852 82.0469 14.043C82.3438 13.8008 82.4922 13.4434 82.4922 12.9707C82.4922 12.4746 82.334 12.123 82.0176 11.916C81.7051 11.709 81.2207 11.6055 80.5645 11.6055ZM91.5215 10.4336C92.627 10.4336 93.4336 10.6602 93.9414 11.1133C94.4492 11.5664 94.7031 12.2012 94.7031 13.0176C94.7031 13.3887 94.6445 13.7422 94.5273 14.0781C94.4141 14.4102 94.2266 14.7051 93.9648 14.9629C93.7031 15.2168 93.3574 15.418 92.9277 15.5664C92.502 15.7148 91.9766 15.7891 91.3516 15.7891H90.4375V19H89.0312V10.4336H91.5215ZM91.4277 11.5996H90.4375V14.6172H91.2051C91.6465 14.6172 92.0215 14.5664 92.3301 14.4648C92.6387 14.3594 92.873 14.1934 93.0332 13.9668C93.1934 13.7402 93.2734 13.4414 93.2734 13.0703C93.2734 12.5742 93.123 12.2051 92.8223 11.9629C92.5254 11.7207 92.0605 11.5996 91.4277 11.5996ZM98.8223 10.4336C99.5605 10.4336 100.17 10.5234 100.65 10.7031C101.135 10.8828 101.494 11.1562 101.729 11.5234C101.967 11.8906 102.086 12.3574 102.086 12.9238C102.086 13.3457 102.008 13.7051 101.852 14.002C101.695 14.2988 101.49 14.5449 101.236 14.7402C100.982 14.9355 100.711 15.0918 100.422 15.209L102.854 19H101.266L99.1973 15.5664H97.8203V19H96.4141V10.4336H98.8223ZM98.7285 11.6055H97.8203V14.4062H98.793C99.4453 14.4062 99.918 14.2852 100.211 14.043C100.508 13.8008 100.656 13.4434 100.656 12.9707C100.656 12.4746 100.498 12.123 100.182 11.916C99.8691 11.709 99.3848 11.6055 98.7285 11.6055ZM108.93 19H104.078V10.4336H108.93V11.6172H105.484V13.9434H108.713V15.1211H105.484V17.8105H108.93V19ZM114.432 11.5059C114.021 11.5059 113.654 11.5801 113.33 11.7285C113.01 11.877 112.738 12.0918 112.516 12.373C112.293 12.6504 112.123 12.9883 112.006 13.3867C111.889 13.7812 111.83 14.2266 111.83 14.7227C111.83 15.3867 111.924 15.959 112.111 16.4395C112.299 16.916 112.584 17.2832 112.967 17.541C113.35 17.7949 113.834 17.9219 114.42 17.9219C114.783 17.9219 115.137 17.8867 115.48 17.8164C115.824 17.7461 116.18 17.6504 116.547 17.5293V18.7246C116.199 18.8613 115.848 18.9609 115.492 19.0234C115.137 19.0859 114.727 19.1172 114.262 19.1172C113.387 19.1172 112.66 18.9355 112.082 18.5723C111.508 18.209 111.078 17.6973 110.793 17.0371C110.512 16.377 110.371 15.6035 110.371 14.7168C110.371 14.0684 110.461 13.4746 110.641 12.9355C110.82 12.3965 111.082 11.9316 111.426 11.541C111.77 11.1465 112.193 10.8438 112.697 10.6328C113.205 10.418 113.785 10.3105 114.438 10.3105C114.867 10.3105 115.289 10.3594 115.703 10.457C116.121 10.5508 116.508 10.6855 116.863 10.8613L116.371 12.0215C116.074 11.8809 115.764 11.7598 115.439 11.6582C115.115 11.5566 114.779 11.5059 114.432 11.5059ZM115.393 20.5703C115.393 20.9844 115.254 21.3066 114.977 21.5371C114.699 21.7676 114.248 21.8828 113.623 21.8828C113.475 21.8828 113.338 21.873 113.213 21.8535C113.088 21.834 112.98 21.8125 112.891 21.7891V20.9863C112.984 21.0098 113.102 21.0312 113.242 21.0508C113.383 21.0703 113.512 21.0801 113.629 21.0801C113.832 21.0801 113.992 21.0449 114.109 20.9746C114.23 20.9043 114.291 20.7852 114.291 20.6172C114.291 20.4375 114.203 20.2949 114.027 20.1895C113.852 20.084 113.592 20.0098 113.248 19.9668L113.74 19H114.631L114.391 19.5039C114.57 19.5508 114.734 19.6191 114.883 19.709C115.035 19.7988 115.158 19.9141 115.252 20.0547C115.346 20.1992 115.393 20.3711 115.393 20.5703ZM125.992 14.7051C125.992 15.3652 125.908 15.9668 125.74 16.5098C125.576 17.0488 125.328 17.5137 124.996 17.9043C124.664 18.291 124.248 18.5898 123.748 18.8008C123.248 19.0117 122.662 19.1172 121.99 19.1172C121.307 19.1172 120.713 19.0117 120.209 18.8008C119.709 18.5898 119.293 18.2891 118.961 17.8984C118.633 17.5078 118.387 17.041 118.223 16.498C118.059 15.9551 117.977 15.3535 117.977 14.6934C117.977 13.8105 118.121 13.041 118.41 12.3848C118.703 11.7246 119.146 11.2129 119.74 10.8496C120.338 10.4824 121.092 10.2988 122.002 10.2988C122.893 10.2988 123.633 10.4805 124.223 10.8438C124.812 11.207 125.254 11.7188 125.547 12.3789C125.844 13.0352 125.992 13.8105 125.992 14.7051ZM119.453 14.7051C119.453 15.3652 119.543 15.9375 119.723 16.4219C119.902 16.9023 120.178 17.2734 120.549 17.5352C120.924 17.793 121.404 17.9219 121.99 17.9219C122.58 17.9219 123.061 17.793 123.432 17.5352C123.803 17.2734 124.076 16.9023 124.252 16.4219C124.428 15.9375 124.516 15.3652 124.516 14.7051C124.516 13.7012 124.314 12.916 123.912 12.3496C123.514 11.7793 122.877 11.4941 122.002 11.4941C121.416 11.4941 120.934 11.623 120.555 11.8809C120.18 12.1387 119.902 12.5078 119.723 12.9883C119.543 13.4648 119.453 14.0371 119.453 14.7051Z" fill="#186AAF"/>
                                                                    <circle cx="22.8182" cy="13.8182" r="6.31818" fill="#186AAF" stroke="#186AAF"/>
                                                                    <path d="M23.1592 9.72729V18.8182" stroke="#CDFF74" stroke-linecap="round" stroke-linejoin="round"/>
                                                                    <path d="M25.5453 12.3847C25.5453 12.1551 25.5012 11.9278 25.4155 11.7157C25.3299 11.5036 25.2043 11.3109 25.046 11.1485C24.8877 10.9862 24.6998 10.8574 24.493 10.7696C24.2862 10.6817 24.0646 10.6365 23.8407 10.6365H22.3066C21.8546 10.6365 21.421 10.8207 21.1013 11.1485C20.7817 11.4764 20.6021 11.9211 20.6021 12.3847C20.6021 12.8484 20.7817 13.2931 21.1013 13.6209C21.421 13.9488 21.8546 14.133 22.3066 14.133H24.1816C24.6337 14.133 25.0673 14.3172 25.3869 14.645C25.7066 14.9729 25.8862 15.4176 25.8862 15.8812C25.8862 16.3449 25.7066 16.7896 25.3869 17.1174C25.0673 17.4453 24.6337 17.6295 24.1816 17.6295H22.1362C21.6841 17.6295 21.2506 17.4453 20.9309 17.1174C20.6112 16.7896 20.4316 16.3449 20.4316 15.8812" stroke="#CDFF74" stroke-linecap="round" stroke-linejoin="round"/>
                                                                    <defs>
                                                                    <filter id="filter0_d_461_117" x="14" y="0" width="25" height="25" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                                                    <feOffset dx="1"/>
                                                                    <feGaussianBlur stdDeviation="2"/>
                                                                    <feComposite in2="hardAlpha" operator="out"/>
                                                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_461_117"/>
                                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_461_117" result="shape"/>
                                                                    </filter>
                                                                    </defs>
                                                                    </svg>
                                                                <p>
                    `)

                }
                setTimeout(() => {
                    encontrouSelos = true;
                    clearInterval(seloSearch);
                }, 6000)
            }
        }
    }, 300);
}

function adicionarCopyMelhorPreco() {
    const myHTML = `        <div class="copy-ss">
                                <p>
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7.5 13.125C10.6066 13.125 13.125 10.6066 13.125 7.5C13.125 4.3934 10.6066 1.875 7.5 1.875C4.3934 1.875 1.875 4.3934 1.875 7.5C1.875 10.6066 4.3934 13.125 7.5 13.125Z"
                                            stroke="#FF0000" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M7.5 4.21875V7.5H10.7812" stroke="#FF0000" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>


                                    Aproveite o melhor preço antes que ele aumente.
                                </p>
                            </div>`




    let encontrouCard = false;

    const encontrouFirstCard = setInterval(() => {
        if (!encontrouCard) {
            const firstCard = document.querySelector(".flightcardsidebar")

            if (firstCard) {
                firstCard.style.borderRadius = "0px" //tirar o border radius do elemento com melhor preço
                if (!document.querySelector(".copy-ss")) {
                    firstCard.insertAdjacentHTML("afterend", myHTML)
                }
                setTimeout(() => {
                    encontrouCard = true;
                    clearInterval(encontrouFirstCard);
                }, 6000)
            }
        }
    }, 300);
}



function addEventButtonsMelhoresTarifas() {
    let encontrouButton = false;

    const encontrouButtons = setInterval(() => {
        if (!encontrouButton) {
            const buttons = document.querySelectorAll(".item_cia_column button")

            if (buttons) {
                buttons.forEach((button) => {
                    button.addEventListener("click", () => {
                        adicionarSeloInFirstCard();
                        adicionarCopyMelhorPreco();
                    })
                })

                setTimeout(() => {
                    encontrouButton = true;
                    clearInterval(encontrouButtons);
                }, 6000)
            }
        }
    }, 300);
}

