// Función para encontrar el valor atípico en una matriz de enteros.
const findOutlier = (arr) => {
    // Primero, validamos que el array tenga al menos 3 elementos.
    // Si no, no podemos determinar un valor atípico.
    if (arr.length < 3) {
        return 'El array debe tener al menos 3 elementos.';
    }

    // Inicializamos contadores para números pares e impares.
    // Estos nos ayudarán a identificar el valor atípico más tarde.
    let evenCount = 0;
    let oddCount = 0;

    // Inicializamos variables para almacenar el último número par e impar que encontramos.
    // Utilizaremos estas variables para retornar el valor atípico.
    let lastEven, lastOdd;

    // Iteramos a través de cada elemento en el array.
    for (let i = 0; i < arr.length; i++) {
        // Utilizamos Number.isInteger() para verificar que el elemento actual es un número entero.
        if (!Number.isInteger(arr[i])) {
            return 'Todos los elementos del array deben ser enteros.';
        }

        // Usamos el operador módulo para verificar si el número es par o impar.
        if (arr[i] % 2 === 0) {
            evenCount++;  // Incrementamos el contador de números pares.
            lastEven = arr[i];  // Actualizamos el último número par encontrado.
        } else {
            oddCount++;  // Incrementamos el contador de números impares.
            lastOdd = arr[i];  // Actualizamos el último número impar encontrado.
        }

        // Si hemos encontrado al menos un número par y un número impar, podemos detener la iteración.
        // No necesitamos seguir, ya que sólo estamos buscando un valor atípico.
        if (evenCount > 0 && oddCount > 0) {
            break;
        }
    }

    // Ahora, determinamos cuál es el valor atípico en base a los contadores.
    if (evenCount === 1) {
        return lastEven;  // Si sólo hay un número par, ese es el valor atípico.
    } else if (oddCount === 1) {
        return lastOdd;  // Si sólo hay un número impar, ese es el valor atípico.
    }

    // En caso de que no podamos determinar un valor atípico, retornamos un mensaje indicándolo.
    return 'No se encontró un valor atípico.';
}

// Realizamos pruebas de la función para asegurarnos de que funcione como se espera.
console.log(findOutlier([1, 3, 6, 9, 11, 15, 13]));  // Debería retornar 6 (el número par en una lista de impares)
console.log(findOutlier([2, 6, 4, 8, 12, 1, 10]));  // Debería retornar 1 (el número impar en una lista de pares)
