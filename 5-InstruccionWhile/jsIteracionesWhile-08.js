// Manuel Bastos Gonzalez - Div X
function mostrar()
{
	let numero;
	let respuesta;
	let sumaPositivos;
	let productoNegativos;
	let flag;

	respuesta = 's';
	productoNegativos = 1;
	sumaPositivos = 0;
	flag = true;
	
	while (respuesta == 's') 
	{
		numero = prompt("Ingrese un número:");
		numero = parseInt(numero);
		
		if (numero >= 0) {
			sumaPositivos = sumaPositivos + numero;
		}
		else {
			flag = false
			productoNegativos = productoNegativos * numero;
		}
		
		if (flag == true) {
			productoNegativos = 0;
		}

		respuesta = prompt("¿Desea ingresar otro número? Responda s/n");
	}
	
	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = productoNegativos;
}