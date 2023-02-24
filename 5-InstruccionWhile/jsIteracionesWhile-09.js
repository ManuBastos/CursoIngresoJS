// Manuel Bastos Gonzalez - Div X
function mostrar()
{
	let numero;
	let respuesta;
	let minimo;
	let maximo;
	let flag;

	respuesta = 's';
	flag = true;

	while (respuesta == 's') 
	{
		numero = prompt("Ingrese un número:");
		numero = parseInt(numero);

		if (flag == true) {
			minimo = numero;
			maximo = numero;
			flag = false;
		}
		
		if (numero > maximo)
		{
			maximo = numero;
		}
		
		if (numero < minimo)
		{
			minimo = numero;
		}
	
		respuesta = prompt("¿Desea ingresar otro número? Responda s/n");
	}
	
	document.getElementById("txtIdMaximo").value = maximo;
	document.getElementById("txtIdMinimo").value = minimo;
}