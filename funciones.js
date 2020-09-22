window.onload = configuraSelect;

function configuraSelect() {
	document.getElementById("nuevasRutas").selectedIndex = 0;
	document.getElementById("nuevasRutas").onchange = cambiaPagina ;
}

function cambiaPagina() {
	var elemetoSelect = document.getElementById("nuevasRutas");
	var nuevaPagina = elemetoSelect.options[elemetoSelect.selectedIndex].value;
	if (nuevaPagina !=" ") {
		window.location = nuevaPagina;
	}
	
}
