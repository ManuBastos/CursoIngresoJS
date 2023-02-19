// Manuel Bastos Gonzalez - Div X
function mostrar()
{
	let numero;
	let respuesta;
	let contador;
	let acumulador;
	let promedio;
	let sumaPositivos;
	let sumaNegativos;

	respuesta = 's';
	contador = 0
	acumulador = 0;
	promedio = 0;
	sumaNegativos = 0;
	sumaPositivos = 0;
	
	while (respuesta == 's') 
	{
		numero = prompt("Ingrese un número:");
		numero = parseInt(numero);

		acumulador = acumulador + numero;
		contador = contador + 1
		
		promedio = acumulador / contador;
		
		if (numero > 0) {
			sumaPositivos = sumaPositivos + numero
		}
		else if (numero < 0) {
			sumaNegativos = sumaNegativos + numero
		}
		
		respuesta = prompt("¿Desea ingresar otro número? Responda s/n");
	}
	
	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = sumaNegativos;
}