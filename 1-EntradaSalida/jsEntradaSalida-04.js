/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'

Manuel Bastos Gonzalez - Div X
*/
function mostrar()
{
	let dato 
	dato = prompt("Ingrese su nombre")
	document.getElementById("txtIdNombre").value = dato
}

