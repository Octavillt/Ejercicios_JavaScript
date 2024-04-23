/*
En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único.
Sin embargo, debido a un error en la máquina de juguetes, algunos números se han asignado a más de un juguete.
¡Encuentra el primer número de identificación que se ha repetido, donde la segunda ocurrencia tenga el índice más pequeño!
En otras palabras, si hay más de un número repetido, debes devolver el número cuya segunda ocurrencia aparezca primero en la lista.
Si no hay números repetidos, devuelve -1.
*/

/**
 * Encuentra el primer elemento que se repite en un array, basado en su orden de aparición.
 *
 * @param {Array} gifts - El array en el que se buscará el elemento repetido.
 * @returns {number} - El primer elemento repetido en el array. Si no se encuentra ningún elemento repetido, retorna -1.
 */
function findFirstRepeated(gifts) {
    // Recorremos cada elemento del array 'gifts' con 'i'
    for (let i = 0; i < gifts.length; i++) {
        // En cada iteración de 'i', comparamos el elemento actual con todos los elementos anteriores usando 'j'
        for (let j = 0; j < i; j++) {
            // Comparamos el elemento en la posición 'i' con el elemento en la posición 'j'
            if (gifts[i] === gifts[j]) {
                // Si los elementos son iguales, retornamos el elemento repetido
                return gifts[i];
            }
        }
    }
    // Si terminamos de recorrer el array sin encontrar elementos repetidos, retornamos -1
    return -1;
}

// Ejemplo de uso
let miArray = [2, 1, 3, 5, 3, 2];
console.log(findFirstRepeated(miArray)); // Devuelve 3, ya que es el primer número que se repite considerando su orden de aparición