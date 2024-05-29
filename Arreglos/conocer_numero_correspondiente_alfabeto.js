/*
Su equipo está escribiendo un nuevo editor de texto elegante y a usted se le ha asignado la tarea de implementar la numeración de líneas.
Escriba una función que tome una lista de cadenas y devuelva cada línea precedida por el número correcto.
La numeración comienza en 1. El formato es n: cadena. Observe los dos puntos y el espacio entre ellos.
Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
*/

let number = function (array) {
    if (array.length === 0) {
        return array;
    }
    else {
        let newArray = [];
        for (let i = 0; i < array.length; i++) {
            newArray.push(`${i + 1}: ${array[i]}`);
        }
        return newArray;
    }
}

console.log(number(["a", "b", "c"]));
