/* 2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{   
    let largoTerreno
    let anchoTerreno
    let resultado

    largoTerreno = document.getElementById("txtIdLargo").value
    anchoTerreno = document.getElementById("txtIdAncho").value

    largoTerreno = parseInt(largoTerreno)
    anchoTerreno = parseInt(anchoTerreno)

    resultado = largoTerreno + anchoTerreno

    alert("La cantidad de alambre a comprar es: " + resultado / 3)
}
function Circulo () 
{
    let largoTerreno
    let anchoTerreno
    let radioTerreno
    let resultado

    largoTerreno = document.getElementById("txtIdLargo").value
    anchoTerreno = document.getElementById("txtIdAncho").value
    radioTerreno = document.getElementById("txtIdRadio").value

    largoTerreno = parseInt(largoTerreno)
    anchoTerreno = parseInt(anchoTerreno)
    radioTerreno = parseInt(radioTerreno)

    resultado = largoTerreno + anchoTerreno + radioTerreno

    alert("La cantidad de alambre a comprar es: " + resultado / 3)
	
}
function Materiales () 
{
    let largoTerreno
    let anchoTerreno
    let area

    largoTerreno = document.getElementById("txtIdLargo").value
    anchoTerreno = document.getElementById("txtIdAncho").value

    largoTerreno = parseInt(largoTerreno)
    anchoTerreno = parseInt(anchoTerreno)

    area = largoTerreno * anchoTerreno

    alert("La cantidad de bolsas de cemento a comprar es de " + (area * 2) + " y la cantidad de bolsas de cal es de " + (area * 3))
}