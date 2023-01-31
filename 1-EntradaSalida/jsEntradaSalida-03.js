/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'

Manuel Bastos Gonzalez - Div X */
function mostrar()
{
	// Let = Variable local
	let nombreIngresado; 

	/* nombreIngresado=txtIdNombre.value; 
	Si uso esta manera, solo lo podré ver desde Chrome */
	nombreIngresado = document.getElementById("txtIdNombre").value
	
	alert(nombreIngresado);
}


