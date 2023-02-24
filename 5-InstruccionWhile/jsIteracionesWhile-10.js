/* Al presionar el botón pedir números hasta que el usuario quiera, mostrar:
1- Suma de los negativos.
2- Suma de los positivos.
3- Cantidad de positivos.
4- Cantidad de negativos.
5- Cantidad de ceros.
6- Cantidad de números pares.
7- Promedio de positivos.
8- Promedios de negativos.
9- Diferencia entre positivos y negativos, (positivos-negativos). 

Manuel Bastos Gonzalez - Div X */
function mostrar()
{
	let numero;
	let respuesta;
	let contador;
	let acumulador;
	let sumaPositivos;
	let sumaNegativos;
	let positivos;
	let negativos;
	let ceros;
	let numeroPar;
	let promedioPositivos;
	let promedioNegativos;
	let diferencia

	respuesta = 's';

	contador = 0; 
	acumulador = 0;
	sumaPositivos = 0;
	sumaNegativos = 0;
	positivos = 0;
	negativos = 0;
	ceros = 0;
	numeroPar = 0;
	promedioPositivos = 0;
	promedioNegativos = 0;
	diferencia = 0;

	while (respuesta == 's')
	{
		numero = prompt("Ingrese un número:");
		numero = parseInt(numero);

		acumulador = acumulador + numero;
		contador = contador + 1;
		
		respuesta = prompt("¿Desea ingresar otro número? Responda s/n");
		
		if (numero < 0) {
			sumaNegativos = sumaNegativos + numero;
		}
		else {
			sumaPositivos = sumaPositivos + numero;
		}

		if (numero < 0) {
			negativos = negativos + 1;
		}
		else {
			positivos = positivos + 1;
		}

		if (numero == 0) {
			ceros = ceros + 1;
		}

		if (numero % 2 == 0) {
			numeroPar = numeroPar + 1;
		}

		promedioNegativos = sumaNegativos / contador;
		promedioPositivos = sumaPositivos / contador;

		diferencia = sumaPositivos + sumaNegativos;
	}

	document.write("La suma de negativos es: " + sumaNegativos + "<br>");
	document.write("La suma de positivos es: " + sumaPositivos + "<br>");
	document.write("La cantidad de negativos es: " + negativos + "<br>");
	document.write("La cantidad de positivos es: " + positivos + "<br>");
	document.write("La cantidad de ceros es: " + ceros + "<br>");
	document.write("La cantidad de numeros pares es: " + numeroPar + "<br>");
	document.write("El promedio de negativos es: " + promedioNegativos.toFixed(2) + "<br>");
	document.write("El promedio de positivos es: " + promedioPositivos.toFixed(2) + "<br>");
	document.write("La diferencia entre los números positivos y los números negativos es: " + diferencia);
}