// Manuel Bastos Gonzalez - Div X

function mostrar()
{
	let mesDelAnio;
	mesDelAnio = document.getElementById("txtIdMes").value;
	
	/* if (mesDelAnio == "Enero") {
		alert("Que comiences bien el año!!!");
	} else if (mesDelAnio == "Marzo") {
		alert("A clases!!!");
	} else if (mesDelAnio == "Julio") {
		alert("Se vienen las vacaciones!!!");
	} else if (mesDelAnio == "Diciembre") {
		alert("Felices fiestas!!!"); } */

	switch (mesDelAnio) {
		case "Enero":
			alert("Que comiences bien el año");
			break;
		case "Marzo":
			alert("A clases");
			break;
		case "Julio":
			alert("Se vienen las vacaciones");
			break;
		case "Diciembre":
			alert("Felices fiestas");
			break;
		default:
			alert("Nada de nada")	
	}
}