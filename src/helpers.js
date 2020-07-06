export function calcularTotal(cantidad, plazo){
    let totalCantidad;
    if(cantidad <= 1000){
        totalCantidad = cantidad * .25; 
    } else if(cantidad > 1000 && cantidad <= 5000){
        totalCantidad = cantidad * .20; 
    }else if(cantidad > 5000 && cantidad <= 10000){
        totalCantidad = cantidad * .15; 
    } else {
        totalCantidad = cantidad * .10;
    }

    // calcular el plazo 
     let totalPlazo = 0; 
     switch(plazo){
         case 3: 
            totalPlazo = cantidad * .05;
            break;
        case 6: 
            totalPlazo = cantidad * .10;
            break;
        case 12: 
            totalPlazo = cantidad * .15;
            break;
        case 24: 
            totalPlazo = cantidad * .20;
            break;
        default:
            break; 
     }
     return totalPlazo + totalCantidad + cantidad; 
}