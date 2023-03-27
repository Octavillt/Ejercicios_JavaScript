function sumMayMen(array) {
    // Declaramos dos variables `max` y `min` para almacenar el número más grande y el número más pequeño, respectivamente.
    let max = array[0];
    let min = array[0];
    
    // Usamos un bucle for para recorrer la matriz y comparar cada elemento con `max` y `min`.
    for (let i = 1; i < array.length; i++) {
        // Si un elemento es mayor que `max`, actualizamos `max` con el nuevo valor.
        if (array[i] > max) {
            max = array[i];
        }
        // Si un elemento es menor que `min`, actualizamos `min` con el nuevo valor.
        if (array[i] < min) {
            min = array[i];
        }
    }
    // Devolvemos la suma de `max` y `min`.
    return max + min;
}
console.log(sumMayMen([1,2,3,4,5,6,7,8,10])); //11

// Tambien se podria Resolver con una Funcion
function sumMayMen(array) {
    let max = Math.max(...array);
    let min = Math.min(...array);
    return max + min;
}
console.log(sumMayMen([1,2,3,4,5,6,7,8,10])); //11
