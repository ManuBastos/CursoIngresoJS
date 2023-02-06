function mostrar()
{
	let edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if (edad >= 18) 
	{
		alert("El usuario es mayor de edad");
	}
	else if (edad <=17 && edad >=13) 
	{
		alert("El usuario es un adolescente");
	}
	else 
	{	
		alert("El usuario es un niño")
	}
}