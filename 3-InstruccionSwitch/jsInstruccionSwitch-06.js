function mostrar()
{
	let horaDelDia;
	let mensaje;
	
	horaDelDia = document.getElementById("txtIdHora").value;
	horaDelDia = parseInt(horaDelDia);

	// Con switch
	/* switch (horaDelDia) {
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana");
			break;
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
			alert("Es de tarde");
			break;
		case 20:
		case 21:
		case 22:
		case 23:
		case 24:
		case 0:
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			alert("Es de noche")
			break
		default:
			alert("La hora no existe")
	} */

	// If
	if (horaDelDia >= 7 && horaDelDia <= 11) {
		mensaje = "Es de mañana" }
	else if (horaDelDia >= 12 && horaDelDia <= 19) {
		mensaje = "Es de tarde"
	}
	else if ((horaDelDia >=20 && horaDelDia <=24) || (horaDelDia >= 0 && horaDelDia <= 6)) {
		mensaje = "Es de noche"
	}
	else {
		mensaje = "La hora no existe!"
	}
	alert(mensaje)
	document.getElementById("txtIdHora").value = ""
}