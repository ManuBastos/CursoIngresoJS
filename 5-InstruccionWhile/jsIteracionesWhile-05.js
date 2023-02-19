/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.

Manuel Bastos Gonzalez - Div X */
function mostrar()
{
	/* let sexoIndicado;
	sexoIndicado = prompt("Indique su sexo: f (femenino) o m (masculino)");

	while (sexoIndicado != "f" && sexoIndicado != "m") {
		sexoIndicado = prompt("Sexo incorrecto. Indique si su sexo: f (femenino) o m (masculino)");
	}

	document.getElementById("txtIdSexo").value = "El sexo indicado es " + sexoIndicado; */

	let sexoIndicado;

	do {
		sexoIndicado = prompt("Indique su sexo: f (femenino) o m (masculino)");
	} while (sexoIndicado != "f" && sexoIndicado != "m");

	document.getElementById("txtIdSexo").value = "El sexo indicado es " + sexoIndicado;
}