/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{   
    let cantidadLamparas;
    let precioFinal;
    let marca;
    let descuento;
    let porcentaje;

    const PRECIOLAMPARA = 35;

    // Inicilación de una variable (flag):
    porcentaje = 0

    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    cantidadLamparas = parseInt(cantidadLamparas);

    precioFinal = cantidadLamparas * PRECIOLAMPARA;

    marca = document.getElementById("Marca").value;
    
    // A. Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
    if (cantidadLamparas >= 6) 
    {
        //La variable que más arriba inicialicé, ahora cambia su valor
        porcentaje = 0.5
        //descuento = cantidadLamparas * PRECIOLAMPARA * 0.5;
        //precioFinal = cantidadLamparas * PRECIOLAMPARA - descuento;
    }
    // B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
    else if (cantidadLamparas == 5) 
        {
            if (marca == "ArgentinaLuz") 
            {   
                porcentaje = 0.4
                //descuento = cantidadLamparas * PRECIOLAMPARA * 0.4;
                //precioFinal = cantidadLamparas * PRECIOLAMPARA - descuento;
            }
            else 
            {
                porcentaje = 0.3
                //descuento = cantidadLamparas * PRECIOLAMPARA * 0.3;
                //precioFinal = cantidadLamparas * PRECIOLAMPARA - descuento;
            }
        }
        // C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
        else if (cantidadLamparas == 4) 
        {
            if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
            {
                porcentaje = 0.25
                //descuento = cantidadLamparas * PRECIOLAMPARA * 0.25;
                //precioFinal = cantidadLamparas * PRECIOLAMPARA - descuento;
            }
            else 
            {
                porcentaje = 0.2
                //descuento = cantidadLamparas * PRECIOLAMPARA * 0.2;
                //precioFinal = cantidadLamparas * PRECIOLAMPARA - descuento;
            }
        }
            // D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
            else if (cantidadLamparas == 3) 
            {
                if (marca == "ArgentinaLuz") 
                {
                    porcentaje = 0.15
                    //descuento = cantidadLamparas * PRECIOLAMPARA * 0.15;
                    //precioFinal = cantidadLamparas * PRECIOLAMPARA - descuento; 
                }
                else if (marca == "FelipeLamparas") 
                {
                    porcentaje = 0.1
                    //descuento = cantidadLamparas * PRECIOLAMPARA * 0.10;
                    //precioFinal = cantidadLamparas * PRECIOLAMPARA - descuento;    
                }
                    else 
                    {
                        porcentaje = 0.5
                        //descuento = cantidadLamparas * PRECIOLAMPARA * 0.05;
                        //precioFinal = cantidadLamparas * PRECIOLAMPARA - descuento;    
                    }
            }      
    // E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje: "Usted pago X de IIBB., siendo X el impuesto que se pagó. 
    
    if (porcentaje > 0) {
        descuento = cantidadLamparas * PRECIOLAMPARA * porcentaje;
        precioFinal = cantidadLamparas * PRECIOLAMPARA - descuento;    
    }

    if (precioFinal > 120) 
    {
        let impuestosBrutos;
        impuestosBrutos = precioFinal * 0.10;
        
        alert("Usted pagó $" + impuestosBrutos.toFixed(2) + " de impuestos brutos");
        
        precioFinal = precioFinal + impuestosBrutos;
    }
    
    document.getElementById("txtIdprecioDescuento").value = precioFinal;
}