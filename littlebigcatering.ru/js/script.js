
var modal = document.getElementById('pop-up');
var btn = document.getElementById("call-button");
var btn_1 = document.getElementById("call-button-1")
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
	modal.style.display = "block";
}

btn_1.onclick = function () {
	modal.style.display = "block";
}

span.onclick = function() {
	modal.style.display = "none";
}

window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}

let burger = document.getElementById('burger'),
	menu = document.getElementById('menu');

burger.onclick =function () {

	if (menu.classList.contains('hide')) {
		menu.classList.remove('hide');
		menu.classList.add('show');
	}

	else if (menu.classList.contains('show')) {
		menu.classList.remove('show');
		menu.classList.add('hide');
	}

	else;
	
}

menu.onclick = function () {
	if (menu.classList.contains('show')) {
		menu.classList.remove('show');
		menu.classList.add('hide');
	}
	else;
}
