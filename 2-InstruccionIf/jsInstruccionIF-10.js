// Manuel Bastos Gonzalez - Div X
function mostrar()
{
	let aleatorio;
	let valorMinimo;
	let valorMaximo;

	valorMinimo = 1;
	valorMaximo = 10;

	aleatorio = Math.round(Math.random() * (valorMaximo - valorMinimo) + valorMinimo);
	// aleatorio = Math.round(Math.random() * 10);

	if (aleatorio > 8) {
		alert("Excelente, su nota es " + aleatorio);
	}
	else if (aleatorio > 3) {
		alert("Aprobó, su nota es " + aleatorio);
	}
	else {
		alert("Vamos la próxima se puede, su nota es " + aleatorio);
	}
}