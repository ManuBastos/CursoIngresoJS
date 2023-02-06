// Manuel Bastos Gonzalez - Div X
function mostrar()
{
	let edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if ( !(edad >= 13) || !(edad <=17) ) 
	{
		alert ("El usuario NO es un adolescente");
	}
}