export function CalcularpH(valor1, valor2, litros) {

    let total;
    switch(litros){
        case 600:
            total = ((((valor1 * 8) + (valor2 * 4)) - 2) * 54 ).toFixed(2)
            break;
        
        case 400:
            total = ((((valor1 * 8) + (valor2 * 4)) - 2) * 36 ).toFixed(2)
            break;


        case 200:
            total = ((((valor1 * 8) + (valor2 * 4)) - 2) * 18 ).toFixed(2)
            break;            


        case 20:
            total = ((((valor1 * 8) + (valor2 * 4)) - 2) * 1.8 ).toFixed(2)
            break;
        
        default:
            break;
    }

    return total;

}