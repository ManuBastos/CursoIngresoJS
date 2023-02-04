/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."

Manuel Bastos Gonzalez - Div X*/

function SacarResto()
{
	let numero
	let otroNumero

	numero = document.getElementById("txtIdNumeroDividendo").value
	otroNumero = document.getElementById("txtIdNumeroDivisor").value

	numero = parseInt(numero)
	otroNumero = parseInt(otroNumero)

	alert("El resto es: " + (numero % otroNumero));
}
