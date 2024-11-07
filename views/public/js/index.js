import { conversionMetros_KM } from "../../../controller/longitud.js";
import { conversionPeso } from "../../../controller/peso.js";
let opcion=Number(prompt("Ingresa una opcion para:\n 1.Para calcular longitudes\n 2.Para calcular pesos"))
switch(opcion){
    case 1:
        conversionMetros_KM()
        break;
    case 2:
        conversionPeso()
        break;
    case 3:
     
}