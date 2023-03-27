/*
Se le da una matriz con números positivos y un número no negativo N. Debe encontrar la potencia N-ésima del elemento en la matriz con el índice N. Si N está fuera de la matriz, luego devuelva -1. No olvides que el primer elemento tiene el índice 0.
*/

function index(array, n){
    let ultimoElemento = array[array.length - 1];
    let elementos = array.length;
    let result = 1;
    for(i = 0; i < n; i++){
        //console.log(elementos);
        if(ultimoElemento === n || elementos < n){
            result = -1;
        }else{
            result *= array[n]; //-> array[n] * array[n] 
        }
    }
    return result;
}
console.log(index([1, 3, 10, 100],3));
