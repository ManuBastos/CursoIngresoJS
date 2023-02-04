/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{  
    let numeroUno
    let numeroDos
    let numeroTres
    let resultado

    
    numeroUno = document.getElementById("txtIdPrecioUno").value
    numeroDos = document.getElementById("txtIdPrecioDos").value
    numeroTres = document.getElementById("txtIdPrecioTres").value
    
    numeroUno = parseInt(numeroUno)
    numeroDos = parseInt(numeroDos)
    numeroTres = parseInt(numeroTres)

    resultado = numeroUno + numeroDos + numeroTres

    alert("La suma de los tres productos es: " + resultado)
}
function Promedio () 
{
	let numeroUno
    let numeroDos
    let numeroTres
    let resultado

    
    numeroUno = document.getElementById("txtIdPrecioUno").value
    numeroDos = document.getElementById("txtIdPrecioDos").value
    numeroTres = document.getElementById("txtIdPrecioTres").value
    
    numeroUno = parseInt(numeroUno)
    numeroDos = parseInt(numeroDos)
    numeroTres = parseInt(numeroTres)

    resultado = (numeroUno + numeroDos + numeroTres) / 3

    alert("El promedio de los tres productos es: " + resultado)
}
function PrecioFinal () 
{
	let numeroUno
    let numeroDos
    let numeroTres
    let resultado

    
    numeroUno = document.getElementById("txtIdPrecioUno").value
    numeroDos = document.getElementById("txtIdPrecioDos").value
    numeroTres = document.getElementById("txtIdPrecioTres").value
    
    numeroUno = parseInt(numeroUno)
    numeroDos = parseInt(numeroDos)
    numeroTres = parseInt(numeroTres)

    resultado = (numeroUno + numeroDos + numeroTres) * 1.21

    alert("El precio final con IVA es: " + resultado)
}