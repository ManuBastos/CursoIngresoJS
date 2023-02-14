function mostrar()
{
	// Variables
	let estacionAnio;
	let destinoIngresado;
	let base;
	let porcentaje;
	let precioFinal;
	let mensaje;

	// Valores de variables
	porcentaje = 0;
	base = 15000;
	estacionAnio = document.getElementById("txtIdEstacion").value;
	destinoIngresado = document.getElementById("txtIdDestino").value;

	// Switch
	switch (estacionAnio) {
		case "Invierno":
			switch (destinoIngresado) {
				case "Bariloche":
					porcentaje = 20;
					break;
				case "Cataratas":
				case "Cordoba":
					porcentaje = -10;
					break;
				case "Mar del plata":
					porcentaje = -20;
					break;
			}	
			break;
		case "Verano":
			switch (destinoIngresado) {
				case "Bariloche":
					porcentaje = -20;
					break;
				case "Cataratas":
				case "Cordoba":
					porcentaje = 10;
					break;
				case "Mar del plata":
					porcentaje = 20;
					break;
			}
			break;
		case "Otoño":
		case "Primavera":
			switch (destinoIngresado) {
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					porcentaje = 10;
					break;
				case "Cordoba":
					porcentaje = 0;
					break;
			}
			break;
	} // Fin de switch

	precioFinal = base + base * porcentaje / 100;

	mensaje = "El precio final del viaje es " + precioFinal;
	alert(mensaje);
};