/*
Dada una matriz de enteros como cadenas y números, devuelva la suma de los 
valores de la matriz como si todos fueran números. 
Devuelve tu respuesta como un número.
*/
function sumMatrix(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += Number(array[i]);
    }
    return sum;
}
console.log(sumMatrix(['5',6]))// 11

// Otra manera de resolverlo con Funciones seria:
function sumMatrix(array) {
    let sum = array.reduce((total, num) => total + +num, 0);
    return sum;
}
console.log(sumMatrix(['8',11]))// 19
