/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)

Manuel Bastos Gonzalez - Div X */
function mostrar()
{
	// WHILE
	let clave;
	clave = prompt("Ingrese su clave:");
	
	while (clave != "utn750") {
		alert("Clave incorrecta");
		clave = prompt("Ingrese su clave:");
		clave = prompt("Clave incorrecta. Ingrese nuevamente su clave: ")
	}

	alert("Clave correcta. Bienvenido")
	
	// DO WHILE - La diferencia en este ejercicio es que, si el usuario se equivoca, no hay manera de decirle un mensaje como el de "clave incorrecta, vuelva a ingresar su clave"
	/* let clave;
	
	do {
		clave = prompt("Ingrese su clave:");
	} while (clave != "utn750"); */
}
