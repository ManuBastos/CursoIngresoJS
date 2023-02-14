// Manuel Bastos Gonzalez - Div X
function mostrar()
{
	let mesDelAnio;
	mesDelAnio = document.getElementById("txtIdMes").value;

	switch(mesDelAnio) {
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio");
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Ya pasamos el frio, hace calor!");
			break;
		default:
			alert("Falta para el invierno");
	};
};