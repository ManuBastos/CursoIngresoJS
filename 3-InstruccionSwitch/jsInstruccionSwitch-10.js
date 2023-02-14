function mostrar()
{
	let estacionAnio;
	let destinoIngresado;
	let mensaje;
	
	estacionAnio = document.getElementById("txtIdEstacion").value;
	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch (estacionAnio) {
		case "Invierno":
			switch (destinoIngresado) {
				case "Bariloche":
					mensaje = "Se viaja a " + destinoIngresado;
					break;
				case "Cataratas":
				case "Mar del plata":
				case "Cordoba":
					mensaje = "No se viaja a " + destinoIngresado;
					break;
			}	
			break;
		case "Verano":
			switch (destinoIngresado) {
				case "Cataratas":
				case "Mar del plata":
					mensaje = "Se viaja a " + destinoIngresado;
					break;
				case "Bariloche":
				case "Cordoba":
					mensaje = "No se viaja a " + destinoIngresado;
					break;
			}
			break;
		case "Otoño":
			mensaje = "Se viaja a " + destinoIngresado;
			break;
		case "Primavera":
			switch (destinoIngresado) {
				case "Bariloche":
					mensaje = "No se viaja a " + destinoIngresado;
					break;
				case "Cordoba":
				case "Mar del plata":
				case "Cataratas":
					mensaje = "Se viaja a " + destinoIngresado;
					break;
			};
			break;
	};
	alert (mensaje)
}