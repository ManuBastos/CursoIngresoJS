/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.

Manuel Bastos Gonzalez - Div X */
function mostrar()
{
	let numero;
	numero = prompt("Ingrese un número del 0 al 9:");
	numero = parseInt(numero);
	
	// Si el while es correcto, no entra en el código. Si es incorrecto, sí (en este case le volverá a preguntar por el número)
	while (numero < 0 || numero > 9) {
		numero = prompt("Número incorrecto. Ingrese nuevamente un número entre 0 y 9: ");
		numero = parseInt(numero);
	}

	document.getElementById("txtIdNumero").value = numero;

	/* let numero 

	do {
		numero = parseInt(prompt("Ingrese un número del 0 al 9:"))
	} while (numero < 0 || numero > 9);

	document.getElementById("txtIdNumero").value = numero */

}