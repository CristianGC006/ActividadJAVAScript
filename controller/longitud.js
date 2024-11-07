//Convertir Kilometros a Millas

export function conversionMetros_KM() {
  function metros_kilometros() {
    let conversionKM = parseFloat(prompt("cuantos Metros vas a ingresar: "));
    let operacion = conversionKM / 1000;
    console.log(conversionKM + " Equivale a " + operacion + " Kilometros");
  }
  function kilometros_Millas(){
    var Kilometros=parseInt(prompt( "Cuanto kilometros deseas convertir? "))
    var Millas=Kilometros*0.621371
    console.log(Kilometros+" Equivalen a : "+Millas);

  }

  function millas_Metros(){
    let conversionMillas = parseFloat(prompt("cuantas Millas vas a ingresar: "));
    let operacionMillas = conversionMillas * 1609;
    console.log(conversionMillas+ " Equivale a " + operacionMillas+ " Kilometros");
  }

  let calConversion = Number(
    prompt(
      "Elige una opcion \n 1.Metros a Kilometros \n 2.Kilometros a millas \n 3.Millas a Metros"
    )
  );
  switch (calConversion) {
    case 1:
      metros_kilometros();
      break;
    case 2:
        kilometros_Millas();
        break;
    case 3:
        millas_Metros();
    default:
      console.log("Ingresa una opcion valida");
  }
}

