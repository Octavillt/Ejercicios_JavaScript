/*
¿Quién recuerda su tiempo en el patio de la escuela, cuando las niñas tomaban una flor y le arrancaban los pétalos,
diciendo cada una de las siguientes frases cada vez que se le arrancaba un pétalo?

"Te amo"
"un poco"
"mucho"
"apasionadamente"
"locamente"
"de nada"

Si hay más de 6 pétalos, comienza de nuevo con "Te amo" para 7 pétalos, "un poco" para 8 pétalos y así sucesivamente.
Cuando se rasgó el último pétalo hubo gritos de emoción, sueños, pensamientos y emociones que surgieron.
Tu objetivo en este kata es determinar qué frase dirían las chicas en el último pétalo de una flor de un número 
determinado de pétalos. El número de pétalos siempre es mayor que 0.
*/

// Definimos la función howMuchILoveYou que tomará un número de pétalos como argumento
function howMuchILoveYou(nbPetals) {
    // Este es el array de frases que pueden ser pronunciadas.
    // Nota: El orden de las frases en este array es importante ya que se corresponde con el número de pétalos
    let phrases = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];

    // Utilizamos el operador de módulo (%) para determinar cuál será la última frase pronunciada.
    // Esto es equivalente a decir "nbPetals dividido por 6 y nos quedamos con el resto".
    let residue = nbPetals % 6;

    // Imprimimos el residuo en la consola para fines de depuración. Esto no es necesario para la función en sí.
    console.log(residue);

    // Si el residuo no es 0, significa que aún nos quedan frases por decir antes de volver al comienzo del array.
    if (residue != 0) {
        // En este caso, retornamos la frase correspondiente al residuo (restamos 1 porque los arrays en JavaScript son base 0)
        return phrases[residue - 1];
    } else {
        // Si el residuo es 0, significa que hemos llegado al final del array y debemos volver a empezar.
        // Pero antes, retornamos la última frase del array.
        return phrases[5];
    }
}

// Imprimimos el resultado de la función con varios valores de prueba.
console.log(howMuchILoveYou(7)); // Debería imprimir "a little"
console.log(howMuchILoveYou(3)); // Debería imprimir "a lot"
console.log(howMuchILoveYou(6)); // Debería imprimir "not at all"
