//Pop out Menu e login abaixo

const menuMobile = document.querySelector('.img-menu');
const popOutLogin = document.querySelector('.img-login');
const closePopout = document.querySelector('.close-popOut');

function alternarMenu() {
	const nav = document.querySelector('.nav-menu');
	menuMobile.classList.toggle('active');
	nav.classList.toggle('active');
}

menuMobile.addEventListener('click', alternarMenu);

function alterarLogin() {
	const popOut = document.querySelector('.popOut-Login');
	popOut.classList.toggle('active2');
}

popOutLogin.addEventListener('click', alterarLogin);
closePopout.addEventListener('click', alterarLogin);


// Pagina de Reservas abaixo

const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
	control.addEventListener("click", (e) => {
		isLeft = e.target.classList.contains("arrow-left");

		if (isLeft) {
			currentItem -= 1;
		} else {
			currentItem += 1;
		}

		if (currentItem >= maxItems) {
			currentItem = 0;
		}

		if (currentItem < 0) {
			currentItem = maxItems - 1;
		}

		items[currentItem].scrollIntoView({
			inline: "center",
			block: "center",
			behavior: "auto",
		});

		items[currentItem].classList.add("current-item");
	});
});

const carrinhoValue = parseFloat(document.getElementById('valorCarrinho'));
const carrinho = document.getElementById('valorCarrinho');

function btn1() {
	const carrinhoValue = parseFloat(document.getElementById('valorCarrinho').innerHTML);
	const carrinho = document.getElementById('valorCarrinho').innerHTML;
	var valor = carrinhoValue + 50;
	carrinho = document.getElementById('valorCarrinho').innerHTML = valor + ",00";
}
function btn2() {
	const carrinhoValue = parseFloat(document.getElementById('valorCarrinho').innerHTML);
	const carrinho = document.getElementById('valorCarrinho').innerHTML;
	var valor = carrinhoValue + 20;
	carrinho = document.getElementById('valorCarrinho').innerHTML = valor + ",00";
}
function btn3() {
	const carrinhoValue = parseFloat(document.getElementById('valorCarrinho').innerHTML);
	const carrinho = document.getElementById('valorCarrinho').innerHTML;
	var valor = carrinhoValue + 25;
	carrinho = document.getElementById('valorCarrinho').innerHTML = valor + ",00";
}
function btn4() {
	const carrinhoValue = parseFloat(document.getElementById('valorCarrinho').innerHTML);
	const carrinho = document.getElementById('valorCarrinho').innerHTML;
	var valor = carrinhoValue + 15;
	carrinho = document.getElementById('valorCarrinho').innerHTML = valor + ",00";
}
function btn5() {
	const carrinhoValue = parseFloat(document.getElementById('valorCarrinho').innerHTML);
	const carrinho = document.getElementById('valorCarrinho').innerHTML;
	var valor = carrinhoValue + 30;
	carrinho = document.getElementById('valorCarrinho').innerHTML = valor + ",00";
}
function btn6() {
	const carrinhoValue = parseFloat(document.getElementById('valorCarrinho').innerHTML);
	const carrinho = document.getElementById('valorCarrinho').innerHTML;
	var valor = carrinhoValue + 20;
	carrinho = document.getElementById('valorCarrinho').innerHTML = valor + ",00";
}
function btn7() {
	const carrinhoValue = parseFloat(document.getElementById('valorCarrinho').innerHTML);
	const carrinho = document.getElementById('valorCarrinho').innerHTML;
	var valor = carrinhoValue + 10;
	carrinho = document.getElementById('valorCarrinho').innerHTML = valor + ",00";
}
function btn8() {
	const carrinhoValue = parseFloat(document.getElementById('valorCarrinho').innerHTML);
	const carrinho = document.getElementById('valorCarrinho').innerHTML;
	var valor = carrinhoValue + 8;
	carrinho = document.getElementById('valorCarrinho').innerHTML = valor + ",00";
}

//Pagina da loja abaixo

function produto1() {
	const molinete1 = document.querySelector('.produto1');
	molinete1.classList.toggle('active2');
}
function produto2() {
	const molinete1 = document.querySelector('.produto2');
	molinete1.classList.toggle('active2');
}
function produto3() {
	const molinete1 = document.querySelector('.produto3');
	molinete1.classList.toggle('active2');
}
function produto4() {
	const molinete1 = document.querySelector('.produto4');
	molinete1.classList.toggle('active2');
}
function produto5() {
	const molinete1 = document.querySelector('.produto5');
	molinete1.classList.toggle('active2');
}
function produto6() {
	const molinete1 = document.querySelector('.produto6');
	molinete1.classList.toggle('active2');
}
function produto7() {
	const molinete1 = document.querySelector('.produto7');
	molinete1.classList.toggle('active2');
}
function produto8() {
	const molinete1 = document.querySelector('.produto8');
	molinete1.classList.toggle('active2');
}
function produto9() {
	const molinete1 = document.querySelector('.produto9');
	molinete1.classList.toggle('active2');
}

// Página Inicial: slide 

var counter = 1;
setInterval(function() {
	document.getElementById('radio' + counter).checked = true;
	counter++;
	if (counter > 3) {
		counter = 1;
	}
}, 4000);

//Pagina do carrinho

function fecharPOCarrinho1() {
	document.querySelector('.reserva1-carrinho').classList.add('active4')
}
function fecharPOCarrinho2() {
	document.querySelector('.produto1-carrinho').classList.add('active4')
}
function fecharPOCarrinho3() {
	document.querySelector('.produto2-carrinho').classList.add('active4')
}

const XCarrinho1 = document.querySelector('.closePO-carrinho1');
const XCarrinho2 = document.querySelector('.closePO-carrinho2');
const XCarrinho3 = document.querySelector('.closePO-carrinho3');
XCarrinho1.addEventListener('click', fecharPOCarrinho1);
XCarrinho2.addEventListener('click', fecharPOCarrinho2);
XCarrinho3.addEventListener('click', fecharPOCarrinho3);

//Duvidas Frequentes - Sobre nos

function linha1(){
	const linha1 = document.querySelector('.txt1');
	linha1.classList.toggle('txtActive');
}

function linha2(){
	const linha2 = document.querySelector('.txt2');
	linha2.classList.toggle('txtActive');
}

function linha3(){
	const linha3 = document.querySelector('.txt3');
	linha3.classList.toggle('txtActive');
}
