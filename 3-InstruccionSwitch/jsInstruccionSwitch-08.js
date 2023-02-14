function mostrar()
{
	let destinoIngresado;
	let mensaje;
	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch (destinoIngresado) {
		case "Bariloche":
		case "Ushuaia":
			mensaje = "Hace frio";
			break;
		case "Mar del plata":
		case "Cataratas":
			mensaje = "Hace calor";
			break
	};
	alert(mensaje);
};