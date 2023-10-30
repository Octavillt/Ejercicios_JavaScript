/*
Este kata consiste en multiplicar un número dado por ocho si es un número par 
y por nueve en caso contrario.
*/
/*========================================== Usando Operador if - else =============================*/
function simpleMultiplication(number) {
    // Verificamos si el número es par utilizando el operador de módulo '%'.
    // Si 'number % 2' es igual a 0, entonces el número es par.
    if (number % 2 === 0) {
        // Si el número es par, lo multiplicamos por 8.
        // Guardamos el resultado en la variable 'numPar'.
        let numPar = (number * 8);
        // Retornamos el resultado almacenado en 'numPar'.
        return numPar;
    } else { // En caso de que el número no sea par (es impar).
        // Si el número es impar, lo multiplicamos por 9.
        // Guardamos el resultado en la variable 'numImpar'.
        let numImpar = (number * 9);
        // Retornamos el resultado almacenado en 'numImpar'.
        return numImpar;
    }
}
// Hacemos una prueba de la función con el número 7, que es un número impar.
// Debería retornar 63, ya que 7 * 9 = 63.
console.log(simpleMultiplication(7));  // Resultado: 63

/*========================================== Usando Operador Ternario =============================*/
function simpleMultiplication(number) {
    // Utilizamos el operador ternario para verificar si el número es par o impar.
    // Si es par (number % 2 === 0), multiplicamos por 8. De lo contrario, multiplicamos por 9.
    // El resultado se retorna directamente.
    return (number % 2 === 0) ? number * 8 : number * 9;
}

// Ejemplo de uso de la función con el número 7, que es impar.
// Debería retornar 63, ya que 7 * 9 = 63.
console.log(simpleMultiplication(7));  // Resultado: 63

/*========================================== Usando una Variable para el Multiplicador =============================*/
function simpleMultiplication(number) {
    // Declaramos una variable 'multiplier' que almacenará el número por el cual debemos multiplicar.
    let multiplier;

    // Verificamos si el número es par o impar.
    if (number % 2 === 0) {
        // Si el número es par, establecemos el multiplicador en 8.
        multiplier = 8;
    } else {
        // Si el número es impar, establecemos el multiplicador en 9.
        multiplier = 9;
    }

    // Retornamos el resultado de multiplicar 'number' por 'multiplier'.
    return number * multiplier;
}
// Ejemplo de uso de la función con el número 7, que es impar.
// Debería retornar 63, ya que 7 * 9 = 63.
console.log(simpleMultiplication(7));  // Resultado: 63
