/*
Escriba una función que devuelva el número mínimo y máximo de la lista/matriz dada.

Todas las matrices o listas siempre tendrán al menos un elemento, por lo que no es necesario comprobar la longitud.
Además, su función siempre obtendrá una matriz o una lista, no es necesario buscar valores nulos, indefinidos o similares.
*/

// Solucion con Math.min y Math.max
function minMax(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let result = [min, max];
    return result;
}
console.log(minMax([1])); // [1,1]

// Solucion con sort
maxMin = (arr) => {
    let sorted = arr.sort((a, b) => a - b);
    return [sorted[0], sorted[sorted.length - 1]];
}
console.log(minMax([3, 6, 3, 4, 8, 9, 11, 33, 66, 99, 36, 39])); // [3,99]