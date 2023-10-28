/*
Dada una matriz de enteros como cadenas y números, devuelva la suma de los 
valores de la matriz como si todos fueran números. 
Devuelve tu respuesta como un número.
*/
/*================================== Usando un bucle for  ==================================*/
sumMatrix = (array) => {
    let sum = 0; // Inicializamos una variable sum con valor 0
    for (let i = 0; i < array.length; i++) { // Utilizamos un bucle for para recorrer cada elemento del array
        sum += Number(array[i]); // Sumamos el valor del elemento convertido a un número a sum
    }
    return sum; // Devolvemos el resultado final
}
console.log(sumMatrix(['5', 6])) // Imprime 11


/*===================================== Utilizando la función reduce ========================================== */
const sumMatrix = (array) => {
    let sum = array.reduce((total, num) => total + +num, 0); // Usamos el método reduce para sumar todos los elementos
    return sum; // Devolvemos el resultado final
}
console.log(sumMatrix(['8', 11])) // Imprime 19
