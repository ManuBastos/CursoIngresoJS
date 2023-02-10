// Manuel Bastos Gonzalez - Div X
function mostrar()
{
	let aleatorio;
	let valorMinimo;
	let valorMaximo;

	valorMinimo = 1;
	valorMaximo = 10;

	aleatorio = Math.round(Math.random() * (valorMaximo - valorMinimo) + valorMinimo)

	alert(aleatorio)
}