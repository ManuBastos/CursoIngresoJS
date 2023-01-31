/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"

Manuel Bastos Gonzalez - Div X*/
function sumar()
{
	let numero
	let otroNumero
	let resultado

	numero = document.getElementById("txtIdNumeroUno").value
	otroNumero = document.getElementById("txtIdNumeroDos").value

	numero = parseInt(numero)
	otroNumero = parseInt(otroNumero)

	resultado = numero + otroNumero

	alert("La suma es: " + resultado);
}