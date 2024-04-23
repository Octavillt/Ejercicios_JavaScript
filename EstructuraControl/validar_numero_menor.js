/*
Dada una serie de números enteros, su solución debe encontrar el número entero más pequeño.
Por ejemplo:
Dado [34, 15, 88, 2] su solución devolverá 2
Dado [34, -345, -1, 100] su solución devolverá -345
Puede asumir, para el propósito de este kata, que el valor proporcionado La matriz no estará vacía.
*/

// Definición de la clase SmallestIntegerFinder
class SmallestIntegerFinder {
    // Primer método para encontrar el número más pequeño en el arreglo
    findSmallestInt(args) {
        // Se verifica si el primer elemento del arreglo es un número y se usa Math.min para encontrar el mínimo
        let minArr = parseInt(args) ? Math.min(...args) : false;
        // Retorna el valor mínimo encontrado o false si no es un arreglo de números
        return minArr;
    }

    // Segundo método para encontrar el número más pequeño en el arreglo
    findSmallestInt_2(args) {
        // Se inicia con un valor infinitamente grande
        let minValue = Infinity;
        // Se recorre cada número en el arreglo
        for (let number of args) {
            // Si el número actual es menor que el valor mínimo actual, se actualiza minValue
            if (number < minValue) {
                minValue = number;
            }
        }
        // Retorna el valor mínimo encontrado
        return minValue;
    }
}

// Creación de una instancia de la clase y llamada al primer método
console.log(new SmallestIntegerFinder().findSmallestInt([34, 15, 88, 2]));
// Creación de una instancia de la clase y llamada al segundo método
console.log(new SmallestIntegerFinder().findSmallestInt_2([33, 6, -99, 3]));
