/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	

Manuel Bastos Gonzalez - Div X*/
function mostrar()
{	
	let nombre
	let edad

	nombre = document.getElementById("txtIdNombre").value
	edad = document.getElementById("txtIdEdad").value

	//alert("Usted se llama " + nombre + " y tiene " + edad + " años");
	alert(`Usted se llama ${nombre} y tiene ${edad} años`)
}