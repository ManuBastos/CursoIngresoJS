function mostrar()
{
	let numero

	let acumulador
	let contador
	let promedio

	acumulador = 0 // Siempre que inicializo una variable es con 0.
	contador = 0
	promedio = 0

	while(contador < 5) { // Cuando empieza "contador" es 0, por lo tanto entra en el while. 
		numero = prompt("Ingrese un número")
		numero = parseInt(numero)

		acumulador = acumulador + numero // Va sumando los numeros ya que la variable numero siempre sera distinta, mientras el while siga estando en uso.
		promedio = acumulador / 5
		contador = contador + 1 // Aca va sumando siempre 1, para que en algun momento el while no se cumpla.
		// contador++

		// El contador siempre lo pongo al final para que sea lo último que haga el while. Si lo pongo primero, el último no lo hará.
	}

	document.getElementById("txtIdSuma").value = acumulador
	document.getElementById("txtIdPromedio").value = promedio
}