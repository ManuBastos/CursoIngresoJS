/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

function sumar()
{	
	let numero
	let otroNumero

	numero = document.getElementById("txtIdNumeroUno").value
	otroNumero = document.getElementById("txtIdNumeroDos").value

	numero = parseInt(numero)
	otroNumero = parseInt(otroNumero)

	alert("El resultado es: " + (numero + otroNumero));	
}

function restar()
{
	let numero
	let otroNumero

	numero = document.getElementById("txtIdNumeroUno").value
	otroNumero = document.getElementById("txtIdNumeroDos").value

	numero = parseInt(numero)
	otroNumero = parseInt(otroNumero)

	alert("El resultado es: " + (numero-otroNumero))
}

function multiplicar()
{
	let numero
	let otroNumero

	numero = document.getElementById("txtIdNumeroUno").value
	otroNumero = document.getElementById("txtIdNumeroDos").value

	numero = parseInt(numero)
	otroNumero = parseInt(otroNumero)

	alert("El resultado es: " + (numero*otroNumero))
}

function dividir()
{
	let numero
	let otroNumero

	numero = document.getElementById("txtIdNumeroUno").value
	otroNumero = document.getElementById("txtIdNumeroDos").value

	numero = parseInt(numero)
	otroNumero = parseInt(otroNumero)
	
	alert("El resultado es: " + (numero/otroNumero))
}

