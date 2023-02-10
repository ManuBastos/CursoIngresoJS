// Manuel Bastos Gonzalez - Div X
function mostrar()
{
	let edad;
	let estadoCivil;

	edad = document.getElementById("txtIdEdad").value;
	estadoCivil = document.getElementById("estadoCivil").value;

	edad = parseInt(edad);

	if (edad < 18 && (estadoCivil != "Soltero")) {
		alert("Es muy pequeño para NO ser soltero");
	}

	/* 
	let edad;
	let estadoCivil;

	edad = document.getElementById("txtIdEdad").value;
	estadoCivil = document.getElementById("estadoCivil").value;

	edad = parseInt(edad);

	if (edad < 18) {
		if (estadoCivil != 'Soltero') {
			alert("Es muy pequeño para NO ser soltero");
		}
	}
	else {
		alert("Es mayor de edad")
	}  
	*/	
}