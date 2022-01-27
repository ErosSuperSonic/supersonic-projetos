// Placed afterend of body.empreendimento-template-default>footer

// Mover menu de navegação para cima
const menuPage = document.querySelectorAll(
	".section-header-empreendimento .buttons-dinamic"
)[0];
const headerEmpreendimento = document.querySelectorAll(
	".section-header-empreendimento  div.row.mt-lg-5 > div"
)[0];
headerEmpreendimento.insertAdjacentElement("afterend", menuPage);

// Corrigindo botão de mapa
const menuBtn = document.querySelectorAll(".buttons-dinamic .btn");
menuBtn.forEach((btn) => {
	if (btn.innerHTML.indexOf(" MAP") > -1) {
		btn.innerText = " MAPA";
	} else if (btn.innerHTML.indexOf(" TOUR VIRTUAL 2") > -1) {
		btn.innerText = " TOUR VIRTUAL";
	}
});

// Trocando icones
menuBtn.forEach((button) => {
	button.querySelectorAll("i").forEach((i) => i.remove());
	const newIcon = document.createElement("div");
	newIcon.classList.add("ss-new-icon");
	button.insertAdjacentElement("afterBegin", newIcon);
});

document.querySelectorAll(".ss-new-icon").forEach((icon) => {
	const buttonName = icon.parentElement.innerText.trim().toLowerCase();
	switch (buttonName) {
		case "fotos":
			icon.innerHTML =
				"<svg width='22' height='18' viewBox='0 0 22 18' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M7.44495 0C7.0865 0 6.75215 0.169699 6.55549 0.451444L5.27519 2.28566H2.65929C1.94854 2.28566 1.27035 2.55547 0.772979 3.03051C0.276164 3.50502 0 4.14528 0 4.80963V15.476C0 16.1404 0.276164 16.7806 0.772979 17.2551C1.27035 17.7302 1.94854 18 2.65929 18H18.6134C19.3242 18 20.0024 17.7302 20.4997 17.2551C20.9966 16.7806 21.2727 16.1404 21.2727 15.476V4.80963C21.2727 4.14528 20.9966 3.50502 20.4997 3.03051C20.0024 2.55547 19.3242 2.28566 18.6134 2.28566H15.9964L14.7161 0.451444C14.5194 0.169699 14.1851 0 13.8266 0H7.44495ZM6.739 3.83462L8.0193 2.0004H13.2523L14.5326 3.83462C14.7292 4.11636 15.0636 4.28606 15.422 4.28606H18.6134C18.7489 4.28606 18.8824 4.33733 18.9834 4.43381C19.085 4.53083 19.145 4.66573 19.145 4.80963V15.476C19.145 15.6199 19.085 15.7548 18.9834 15.8518C18.8824 15.9483 18.7489 15.9996 18.6134 15.9996H2.65929C2.52378 15.9996 2.39037 15.9483 2.28935 15.8518C2.18777 15.7548 2.12775 15.6199 2.12775 15.476V4.80963C2.12775 4.66572 2.18777 4.53083 2.28935 4.43381C2.39037 4.33733 2.52378 4.28606 2.65929 4.28606H5.84954C6.20798 4.28606 6.54233 4.11636 6.739 3.83462ZM8.11054 9.76187C8.11054 8.40584 9.25714 7.33359 10.6363 7.33359C12.0156 7.33359 13.1622 8.40584 13.1622 9.76187C13.1622 11.1179 12.0156 12.1902 10.6363 12.1902C9.25714 12.1902 8.11054 11.1179 8.11054 9.76187ZM10.6363 5.33319C8.0505 5.33319 5.98279 7.33091 5.98279 9.76187C5.98279 12.1928 8.0505 14.1906 10.6363 14.1906C13.2222 14.1906 15.2899 12.1928 15.2899 9.76187C15.2899 7.33091 13.2222 5.33319 10.6363 5.33319Z'/></svg>";
			break;
		case "decorado":
			icon.innerHTML =
				"<svg width='22' height='18' viewBox='0 0 22 18' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M9.97054 0.379896C10.2394 0.135462 10.5897 1.21444e-05 10.953 8.22482e-10C11.3163 -1.21863e-05 11.6666 0.135413 11.9355 0.37983L19.2384 7.01906C19.3889 7.15595 19.5092 7.32279 19.5916 7.50888C19.6739 7.69497 19.7164 7.89622 19.7164 8.09971V16.5395H21.1769C21.5802 16.5395 21.9071 16.8665 21.9071 17.2698C21.9071 17.6731 21.5802 18 21.1769 18H18.989L18.9862 18L18.9833 18H2.92383L2.92095 18L2.91807 18H0.730237C0.326938 18 0 17.6731 0 17.2698C0 16.8665 0.326938 16.5395 0.730237 16.5395H2.19071V8.09968C2.19071 7.89621 2.23323 7.69498 2.31554 7.5089C2.39784 7.32281 2.51813 7.15598 2.66867 7.0191L9.97054 0.379896ZM18.2559 8.09971V16.5395H13.874V12.1573C13.874 11.77 13.7201 11.3985 13.4462 11.1246C13.1723 10.8507 12.8008 10.6969 12.4135 10.6969H9.49255C9.1052 10.6969 8.73373 10.8507 8.45984 11.1246C8.18594 11.3985 8.03207 11.77 8.03207 12.1573V16.5395H3.65119V8.09968L10.9531 1.46047L18.2559 8.09971ZM9.49255 16.5395V12.1573H12.4135V16.5395H9.49255Z'/></svg>";
			break;
		case "plantas":
			icon.innerHTML =
				"<svg width='18' height='18' viewBox='0 0 18 18' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M0 1.56522C0 0.700772 0.700772 0 1.56522 0H9H16.4348C17.2992 0 18 0.700772 18 1.56522V9V16.4348C18 17.2992 17.2992 18 16.4348 18H9H1.56522C0.700772 18 0 17.2992 0 16.4348V9V1.56522ZM1.56522 9.78261V16.4348H8.21739V9.78261H1.56522ZM8.21739 8.21739H1.56522V1.56522H8.21739V8.21739ZM9.78261 9.78261V16.4348H16.4348V9.78261H9.78261ZM16.4348 8.21739H9.78261V1.56522H16.4348V8.21739Z' /></svg>";
			break;
		case "vídeo":
			icon.innerHTML =
				"<svg width='18' height='18' viewBox='0 0 18 18' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M1.38462 9C1.38462 4.79414 4.79414 1.38462 9 1.38462C13.2059 1.38462 16.6154 4.79414 16.6154 9C16.6154 13.2059 13.2059 16.6154 9 16.6154C4.79414 16.6154 1.38462 13.2059 1.38462 9ZM9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0ZM7.99941 5.65473C7.78697 5.51311 7.51382 5.4999 7.28871 5.62038C7.0636 5.74085 6.92308 5.97545 6.92308 6.23077V11.7692C6.92308 12.0246 7.0636 12.2591 7.28871 12.3796C7.51382 12.5001 7.78697 12.4869 7.99941 12.3453L12.1533 9.57604C12.3459 9.44764 12.4615 9.23147 12.4615 9C12.4615 8.76853 12.3459 8.55236 12.1533 8.42397L7.99941 5.65473ZM10.5212 9L8.30769 10.4756V7.52436L10.5212 9Z'/></svg>";
			break;
		case "mapa":
			icon.innerHTML =
				"<svg width='20' height='18' viewBox='0 0 20 18' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M12.837 2.95522L7.08905 0.0812428C6.94098 0.00608375 6.76744 -0.0205034 6.59366 0.0166165C6.5837 0.0187364 6.57377 0.0210609 6.56389 0.0235896L0.568087 1.52254C0.234218 1.60601 0 1.90599 0 2.25013V15.7499C0 15.9808 0.106402 16.1989 0.288435 16.341C0.470469 16.4831 0.707832 16.5335 0.931883 16.4775L6.66261 15.0448L12.4106 17.9188C12.5583 17.9938 12.7314 18.0204 12.9049 17.9836C12.9152 17.9814 12.9255 17.979 12.9357 17.9764L18.9315 16.4775C19.2654 16.394 19.4996 16.094 19.4996 15.7499V2.25013C19.4996 2.01919 19.3932 1.80112 19.2112 1.65899C19.0291 1.51686 18.7918 1.46653 18.5677 1.52254L12.837 2.95522ZM13.4997 4.33567V16.2893L17.9996 15.1643V3.2107L13.4997 4.33567ZM5.99988 1.71073V13.6643L1.49997 14.7893V2.8357L5.99988 1.71073ZM7.49985 1.96366V13.7864L11.9998 16.0363V4.21362L7.49985 1.96366Z'/></svg>";
			break;
		case "tour virtual":
			icon.innerHTML =
				"<svg width='12' height='18' viewBox='0 0 12 18' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M5.3941 2.81859C5.28796 2.24444 5.66737 1.69296 6.24152 1.58683C6.81567 1.4807 7.36715 1.86011 7.47328 2.43426C7.57942 3.00841 7.20001 3.55989 6.62586 3.66602C6.05171 3.77215 5.50023 3.39275 5.3941 2.81859ZM5.95637 0.04421C4.53025 0.307828 3.58786 1.67763 3.85147 3.10375C4.11509 4.52987 5.48489 5.47226 6.91101 5.20864C8.33713 4.94502 9.27952 3.57522 9.01591 2.1491C8.75229 0.722985 7.38249 -0.219408 5.95637 0.04421ZM0.152425 7.55816L0.78443 8.02272C0.152425 7.55816 0.152737 7.55773 0.153057 7.5573L0.153737 7.55638L0.155235 7.55436L0.158794 7.54959L0.168161 7.53728C0.175407 7.52785 0.184669 7.51602 0.195959 7.502C0.218531 7.47398 0.249276 7.43715 0.288317 7.39327C0.366308 7.30562 0.477987 7.18921 0.624362 7.05854C0.916674 6.79759 1.35161 6.476 1.93644 6.2152C3.12411 5.68558 4.84886 5.44347 7.10624 6.31679C8.98584 6.894 10.0452 7.18633 10.6294 7.33357C10.9229 7.40754 11.091 7.44351 11.1795 7.46043C11.2169 7.4676 11.238 7.47094 11.2467 7.47222C11.6619 7.51135 11.9767 7.87098 11.956 8.29173C11.9346 8.7244 11.5666 9.05786 11.1339 9.03653L11.1725 8.2531C11.1339 9.03653 11.1332 9.03649 11.1325 9.03646L11.131 9.03638L11.1281 9.03622L11.1224 9.03588L11.111 9.03508L11.0877 9.03301C11.0719 9.03144 11.0547 9.02937 11.0356 9.02673C10.9976 9.02149 10.9488 9.01351 10.8847 9.00125C10.7571 8.97684 10.5578 8.93334 10.246 8.85476C9.62253 8.6976 8.52741 8.3946 6.61835 7.80802C6.59988 7.80235 6.58163 7.796 6.56363 7.78897L6.50322 7.76566C6.55396 8.12436 6.61228 8.56008 6.63925 9.0266C6.67874 9.7098 6.65519 10.5117 6.41578 11.3012C6.89544 11.7011 7.36441 12.1106 7.95276 12.8011C8.60206 13.5632 9.38675 14.6549 10.5223 16.4529C10.7536 16.8192 10.6442 17.3037 10.278 17.535C9.9117 17.7663 9.42726 17.6569 9.19594 17.2906C8.07602 15.5173 7.33725 14.4976 6.75866 13.8185C6.36779 13.3598 6.04577 13.051 5.71013 12.7597C5.48718 13.1941 5.34475 13.6302 5.17645 14.1456C5.12507 14.3029 5.07129 14.4676 5.01207 14.6419C4.70752 15.5382 4.29445 16.5424 3.35434 17.7082C3.08241 18.0454 2.5886 18.0984 2.25138 17.8264C1.91416 17.5545 1.86123 17.0607 2.13316 16.7235C2.91838 15.7497 3.25714 14.9305 3.52672 14.1372C3.57277 14.0016 3.61792 13.8623 3.66409 13.7198C3.88377 13.0418 4.1266 12.2924 4.59901 11.5452C5.03369 10.8577 5.12397 9.99711 5.0731 9.11714C5.04803 8.68341 4.99082 8.27223 4.93711 7.89518L4.92704 7.82476L4.92704 7.82474C4.90472 7.66889 4.88115 7.50431 4.86353 7.34494C3.86107 7.22476 3.10757 7.41062 2.57536 7.64795C2.16434 7.83124 1.86355 8.05522 1.66908 8.22882C1.57207 8.31542 1.5026 8.38854 1.4603 8.43608C1.43919 8.45981 1.42499 8.47699 1.41767 8.48609L1.41219 8.49301C1.15448 8.83714 0.666998 8.90989 0.319868 8.65473C-0.029179 8.39815 -0.104146 7.9072 0.152425 7.55816Z'/></svg>";
			break;
		case "navegação virtual":
			icon.innerHTML =
				"<svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M9.62069 0.62069C9.62069 0.277892 9.3428 0 9 0C8.6572 0 8.37931 0.277892 8.37931 0.62069V1.57722C4.76082 1.87574 1.87574 4.76082 1.57722 8.37931H0.62069C0.277892 8.37931 0 8.6572 0 9C0 9.3428 0.277892 9.62069 0.62069 9.62069H1.57722C1.87574 13.2392 4.76082 16.1243 8.37931 16.4228V17.3793C8.37931 17.7221 8.6572 18 9 18C9.3428 18 9.62069 17.7221 9.62069 17.3793V16.4228C13.2392 16.1243 16.1243 13.2392 16.4228 9.62069H17.3793C17.7221 9.62069 18 9.3428 18 9C18 8.6572 17.7221 8.37931 17.3793 8.37931H16.4228C16.1243 4.76082 13.2392 1.87574 9.62069 1.57722V0.62069ZM14.2759 8.37931H15.1762C14.8851 5.44691 12.5531 3.1149 9.62069 2.82375V3.72414C9.62069 4.06694 9.3428 4.34483 9 4.34483C8.6572 4.34483 8.37931 4.06694 8.37931 3.72414V2.82375C5.44691 3.1149 3.1149 5.44691 2.82375 8.37931H3.72414C4.06694 8.37931 4.34483 8.6572 4.34483 9C4.34483 9.3428 4.06694 9.62069 3.72414 9.62069H2.82375C3.1149 12.5531 5.44691 14.8851 8.37931 15.1762V14.2759C8.37931 13.9331 8.6572 13.6552 9 13.6552C9.3428 13.6552 9.62069 13.9331 9.62069 14.2759V15.1762C12.5531 14.8851 14.8851 12.5531 15.1762 9.62069H14.2759C13.9331 9.62069 13.6552 9.3428 13.6552 9C13.6552 8.6572 13.9331 8.37931 14.2759 8.37931ZM7.13793 9C7.13793 7.97161 7.97161 7.13793 9 7.13793C10.0284 7.13793 10.8621 7.97161 10.8621 9C10.8621 10.0284 10.0284 10.8621 9 10.8621C7.97161 10.8621 7.13793 10.0284 7.13793 9ZM9 5.89655C7.28601 5.89655 5.89655 7.28601 5.89655 9C5.89655 10.714 7.28601 12.1034 9 12.1034C10.714 12.1034 12.1034 10.714 12.1034 9C12.1034 7.28601 10.714 5.89655 9 5.89655Z'/></svg>";
			break;
	}
});

document.querySelectorAll("button.close").forEach((button) => {
	button.innerHTML =
		"<svg width='24' height='24' viewBox='0 0 24 24' xmlns=http://www.w3.org/2000/svg><path fill-rule='evenodd' clip-rule='evenodd' d='M12.0017 2C6.47791 2 2 6.47791 2 12.0017C2 17.5255 6.47791 22.0034 12.0017 22.0034C17.5255 22.0034 22.0034 17.5255 22.0034 12.0017C22.0034 6.47791 17.5255 2 12.0017 2ZM0 12.0017C0 5.37334 5.37334 0 12.0017 0C18.6301 0 24.0034 5.37334 24.0034 12.0017C24.0034 18.6301 18.6301 24.0034 12.0017 24.0034C5.37334 24.0034 0 18.6301 0 12.0017ZM16.3758 7.62685C16.7663 8.01738 16.7663 8.65055 16.3758 9.04107L13.4157 12.0012L16.3758 14.9613C16.7663 15.3518 16.7663 15.985 16.3758 16.3755C15.9853 16.7661 15.3521 16.7661 14.9616 16.3755L12.0014 13.4154L9.04131 16.3755C8.65079 16.7661 8.01762 16.7661 7.6271 16.3755C7.23657 15.985 7.23657 15.3518 7.6271 14.9613L10.5872 12.0012L7.6271 9.04107C7.23657 8.65055 7.23657 8.01738 7.6271 7.62685C8.01762 7.23633 8.65079 7.23633 9.04131 7.62685L12.0014 10.587L14.9616 7.62685C15.3521 7.23633 15.9853 7.23633 16.3758 7.62685Z' /></svg>";
});

document
	.querySelectorAll(".carousel-control-prev, .carousel-control-next")
	.forEach((arrow) => {
		arrow.innerHTML =
			"<svg width='23' height='23' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M13 2C6.92487 2 2 6.92487 2 13C2 19.0751 6.92487 24 13 24C19.0751 24 24 19.0751 24 13C24 6.92487 19.0751 2 13 2ZM0 13C0 5.8203 5.8203 0 13 0C20.1797 0 26 5.8203 26 13C26 20.1797 20.1797 26 13 26C5.8203 26 0 20.1797 0 13ZM13.0502 8.05028C13.4407 7.65975 14.0739 7.65975 14.4644 8.05028L18.7005 12.2863C18.7277 12.3131 18.7534 12.3413 18.7775 12.371C18.8246 12.4291 18.8642 12.4913 18.8964 12.5562C18.9627 12.6899 19 12.8406 19 13C19 13.1551 18.9647 13.3019 18.9017 13.4328C18.8654 13.5084 18.8191 13.5804 18.7627 13.6468C18.7433 13.6696 18.7229 13.6916 18.7016 13.7126L14.4644 17.9497C14.0739 18.3403 13.4407 18.3403 13.0502 17.9497C12.6597 17.5592 12.6597 16.9261 13.0502 16.5355L15.5857 14H8C7.44772 14 7 13.5523 7 13C7 12.4477 7.44772 12 8 12H15.5857L13.0502 9.46449C12.6597 9.07397 12.6597 8.4408 13.0502 8.05028Z' fill='white'/></svg>";
	});

// Removendo margem superior do Breadcrumb
const breadcrumb = document.querySelectorAll(
	".section-header-empreendimento .row.mt-4"
)[0];

breadcrumb.style = "margin-top: 0px !important";

// Reorganizando descrição dos empreendimentos
const diferenciais = document.querySelectorAll(
	".section-header-empreendimento .row.mt-5"
)[0];
const proximidades = document.querySelectorAll(
	".section-header-empreendimento .row.mt-5"
)[1];
const descricao = document.querySelector(
	".section-header-empreendimento .row .row.mt-4"
);

descricao.insertAdjacentElement("beforeBegin", proximidades);
proximidades.insertAdjacentElement("afterEnd", diferenciais);

descricao.style = "margin-top: 3rem !important";
diferenciais.style = "margin-top: 1rem !important";
proximidades.style = "margin-top: 1.625rem !important";

const h2prox = proximidades.querySelector("h2");
const h2dif = diferenciais.querySelector("h2");

h2prox.innerText = "O que tem por perto do Imóvel";
h2prox.insertAdjacentHTML(
	"afterEnd",
	"<span class='subtitle'>Tudo o que você precisa para morar/investir bem</span>"
);

h2dif.innerText = "Diferenciais que tornam este imóvel incrível";

// Mover descrição e contagem da foto para cima
const photoDescriptions = Array.from(
	document.querySelectorAll(".description-photo")
);

photoDescriptions.forEach((desc) => {
	desc.parentElement.insertAdjacentElement("afterBegin", desc);
});

const photoCount = document.querySelectorAll(".count-photos");

Array.from(photoCount).forEach((count) => {
	count.parentElement.insertAdjacentElement("afterBegin", count);
});

// Trocando formato do contador de fotos
photoCount.forEach((count) => {
	count.innerText = count.innerText.replace("/", " de ");
});

// Criando galerias no modal
const containerColumn = document.querySelectorAll(
	".modal-content .container .mt-3 > div"
);

const galleryLabel = document.createElement("span");
galleryLabel.classList.add("ss-gallery-label");
galleryLabel.innerText = "Próximas fotos";
containerColumn[1].insertAdjacentElement("beforeEnd", galleryLabel);

const galleryContainer = document.createElement("div");
galleryContainer.classList.add("ss-gallery-container");
containerColumn[1].insertAdjacentElement("beforeEnd", galleryContainer);

function renderGallery(id_carousel, id_module) {
	galleryContainer.innerHTML = "";
	const arrayFotos = Array.from(
		document.querySelectorAll(
			`.modal-content #${id_carousel} .carousel-item .img-${id_module}`
		)
	);

	console.log("render gallery", id_carousel, id_module);

	arrayFotos.forEach((foto) => {
		const fotoContainer = document.createElement("div");
		fotoContainer.classList.add("ss-foto-container");
		fotoContainer.insertAdjacentElement("beforeEnd", foto.cloneNode(true));
		galleryContainer.appendChild(fotoContainer);
	});
}

const arrayNomesSecoesModal = []; //criando array para guardar nome das seções que podem ser clicadas no modal

function positionContainerColumn() { //Função para evitar repetição 
	containerColumn[1].style = "display: flex !important";
	containerColumn[0].style =
		"flex: 0 0 75% !important; max-width: 75% !important";
}

document.querySelectorAll(".ver-fotos").forEach((el) => {
	el.addEventListener("click", () => {
		document
			.querySelectorAll(".modal-content .list-inline a")
			.forEach((el) => {
				//selecionar todos os itens de clicar dentro do modal
				const valueAddArray = el.innerText.trim(); //Tirando o espaçamento das palavras que podem ser clicadas 
				arrayNomesSecoesModal.push(valueAddArray); //adicionando texto dos itens clivaveis no array 

			});

		for (let elem of arrayNomesSecoesModal) { //For para verificar qual está sendo execultado 
			if (elem === "FOTOS") {
				positionContainerColumn();
				renderGallery("carouselFotos", "fotos");
				break;
			} else if (elem === "DECORADO") {
				positionContainerColumn();
				renderGallery("carouselFotos", "fotos");
				break;
			} else if (elem === "PLANTAS") {
				positionContainerColumn();
				renderGallery("carouselFotos", "fotos");
				break;
			}
		}
	});
});


// Ouvindo seleção de módulos
document.querySelectorAll(".modal-content .list-inline a").forEach((el) => {
	el.addEventListener("click", (event) => {
		switch (event.target.innerText) {
			case "FOTOS":
				positionContainerColumn();
				renderGallery("carouselFotos", "fotos");
				break;
			case "DECORADO":
				positionContainerColumn();
				renderGallery("carouselDecorado", "fotos");
				break;
			case "PLANTAS":
				positionContainerColumn();
				renderGallery("carouselPlantas", "planta");
				break;
			default:
				positionContainerColumn();
		}
	});
});

// Inserindo botão no mapa do iframe
const iframe = document.querySelector(".iframe-map");
const btn = document.createElement("button");
btn.classList.add("ss-expand-map");
btn.innerHTML = "<i class='fas fa-expand-arrows-alt'></i> Expandir mapa";
iframe.insertAdjacentElement("beforeEnd", btn);
