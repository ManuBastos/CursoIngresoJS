// Manuel Bastos Gonzalez - Div X
function mostrar()
{
	let edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if (edad >= 18) {
		alert("El usuario es mayor de edad");
	}
	else {
		alert("El usuario es menor de edad");
	}
}