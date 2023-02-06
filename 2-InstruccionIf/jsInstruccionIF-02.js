// Manuel Bastos Gonzalez - Div X
function mostrar()
{
	let edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if (edad >= 18) {
		alert("Sos mayor de edad")
	};
}