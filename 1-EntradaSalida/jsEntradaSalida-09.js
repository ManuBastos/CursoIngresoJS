/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".

Manuel Bastos Gonzalez - Div X*/
function mostrarAumento()
{
	let sueldo
	let resultado

	sueldo = document.getElementById("txtIdSueldo").value
	sueldo = parseInt(sueldo)

	resultado = sueldo * 1.1
	document.getElementById("txtIdResultado").value = resultado.toFixed(2)
	// Con el toFixed lo que hago es indicarle al programa la cantidad de decimales que quiero que aparezcan. Si pongo 0, no aparece ninguno.

	alert("El resultado es");
}
