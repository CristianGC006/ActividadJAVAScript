export function conversionPeso(){
    function gramosKilogramos(){
        let conversionGramo = parseFloat(prompt("cuantos Kilogramos vas a ingresar: "));
        let operacion =  conversionGramo/ 1000;
        console.log(conversionGramo + " Equivale a " + operacion + " Kilogramos");
    }
    function kilogramosLibras(){
        let conversionLibras = parseFloat(prompt("cuantos Libras vas a ingresar: "));
        let operacion = conversionLibras * 0.453592;
        if(conversionLibras<1){
        console.log(conversionLibras + " Kilos Equivale a " + operacion + " Libras");
      
    }else{console.log(conversionLibras + " Kilo Equivale a " + operacion + " Libras");}}
    function librasGramos(){
        let conversionLibrasK = parseFloat(prompt("cuantos Libras vas a ingresar: "));
        let operacion = conversionLibras * 453.592;
        if(conversionLibrasK<1){
        console.log(conversionLibrasK + "  Libra Equivale a " + operacion + " Gramos");
    } else{console.log(conversionLibrasK + "  Libras Equivale a " + operacion + " Gramos");}}

    let opciones=Number(prompt("Elige una opcion:\n 1.Gramos a Kilogramos\n 2.Kilogramos a Libras\n 3.Libras a Gramos"))
    switch(opciones){
        case 1:
            gramosKilogramos()
            break;
        case 2:
            kilogramosLibras()
            break;
        case 3:
            librasGramos()
            break;
        default:
            console.log("Ingresa una opcion valida")
    }
}