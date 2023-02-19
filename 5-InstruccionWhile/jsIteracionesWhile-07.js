// Manuel Bastos Gonzalez - Div X
function mostrar()
{
	let numero;
	let respuesta;
	let contador;
	let acumulador;
	let promedio;

	respuesta = 's';
	contador = 0
	acumulador = 0;
	promedio = 0;
	
	while (respuesta == 's') 
	{
		numero = prompt("Ingrese un número:");
		numero = parseInt(numero);

		acumulador = acumulador + numero;
		contador = contador + 1 // En este caso, el contador es necesario para luego hacer el promedio
		
		promedio = acumulador / contador;

		respuesta = prompt("¿Desea ingresar otro número? Responda s/n"); // Esta es la variable de control, por eso tiene que ir al final. La variable de control es la que decide si se vuelve a entrar en el while o no.
	}
	
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
}