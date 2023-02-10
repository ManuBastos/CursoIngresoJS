// Manuel Bastos Gonzalez - Div X
function mostrar()
{
	let edad;
	let estadoCivil;

	edad = document.getElementById("txtIdEdad").value;
	estadoCivil = document.getElementById("estadoCivil").value;

	edad = parseInt(edad);

	if (edad >= 18 && estadoCivil == "Soltero") 
		{
			alert ("Es soltero y no es menor")
		}
}
// Crear tres variables y mediante un programa descubrir el menor valor
/* let numeroUno;
let numeroDos;
let numeroTres;

numeroUno = 10;
numeroDos = 0;
numeroTres = 3;

if (numeroUno < numeroDos && numeroUno < numeroTres) {
	alert("El número más chico es: " + numeroUno);
}
else if (numeroDos < numeroUno && numeroDos < numeroTres) {
	alert("El número más chico es: " + numeroDos);
}
else if (numeroTres < numeroUno && numeroTres < numeroDos) {
	alert("El número más chico es: " + numeroTres);
} */

// Crear tres variables y mediante un programa descubrir el mayor valor
/* let numeroUno;
let numeroDos;
let numeroTres;

numeroUno = 10;
numeroDos = 1;
numeroTres = 3;

if (numeroUno > numeroDos && numeroUno > numeroTres) {
	alert("El número más grande es: " + numeroUno);
}
else if (numeroDos > numeroTres) {
	alert("El número más grande es: " + numeroDos);
}
else {
	alert("El número más grande es: " + numeroTres);
} */