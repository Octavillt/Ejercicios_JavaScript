/*
Creará un programa que tomará dos listas de números enteros, a y b. Cada lista constará de 3 enteros positivos arriba de 0, 
que representan las dimensiones de los paralelepípedos a y b. Debes encontrar la diferencia de los volúmenes de los paralelepípedos 
sin importar cuál es mayor. Por ejemplo, si los parámetros pasados son ([2, 2, 3], [5, 4, 1]), el volumen de a es 12 
y el volumen de b es 20. Por lo tanto, la función debería devolver 8. Su función se probará con ejemplos prefabricados y aleatorios. 
Si puede, intente escribirlo en una línea de código
*/

function findDifference(a, b) {
    // Crear dos listas vacías para guardar los productos parciales
    let arrList1 = [];
    let arrList2 = [];
    // Crear dos variables para guardar los productos totales
    let producto1 = 1;
    let producto2 = 1;
    // Recorrer el arreglo a
    for (let i = 0; i < a.length; i++) {
        // Multiplicar el elemento actual por el producto anterior
        producto1 *= a[i];
        // Guardar el producto parcial en la lista correspondiente
        arrList1.push(producto1);
    }
    // Sacar el último producto parcial de la lista y guardarlo en una variable
    let result1 = arrList1.pop();
    // Recorrer el arreglo b
    for (let i = 0; i < b.length; i++) {
        // Multiplicar el elemento actual por el producto anterior
        producto2 *= b[i];

        // Guardar el producto parcial en la lista correspondiente
        arrList2.push(producto2);
    }
    // Sacar el último producto parcial de la lista y guardarlo en una variable
    let result2 = arrList2.pop();
    // Calcular la diferencia entre los productos totales
    let diferencia = result1 - result2;
    // Si la diferencia es negativa, convertirla a positiva
    if (diferencia < 0) {
        let coversion = -1 * diferencia;
        return coversion;
    } else {
        // Si la diferencia es positiva, devolverla tal cual
        return diferencia;
    }
}
// Ejecuta la función con dos arreglos como argumentos y muestra el resultado en la consola
console.log(findDifference([9, 7, 2], [5, 2, 2]));


function findDifference(a, b) {
    // Calcula el producto de los elementos del arreglo "a" usando "reduce"
    const product1 = a.reduce((acc, val) => acc * val, 1);
    // Calcula el producto de los elementos del arreglo "b" usando "reduce"
    const product2 = b.reduce((acc, val) => acc * val, 1);
    // Calcula la diferencia absoluta entre los productos
    const difference = Math.abs(product1 - product2);
    // Retorna la diferencia calculada
    return difference;
}
// Ejecuta la función con dos arreglos como argumentos y muestra el resultado en la consola
console.log(findDifference([9, 7, 2], [5, 2, 2]));



function findDifference(a, b) {
    // Calcula el volumen del primer paralelepípedo utilizando reduce para multiplicar los elementos de la lista a
    let volumeA = a.reduce((acc, val) => acc * val);
    // Calcula el volumen del segundo paralelepípedo utilizando reduce para multiplicar los elementos de la lista b
    let volumeB = b.reduce((acc, val) => acc * val);
    // Resta los dos volúmenes y devuelve su valor absoluto utilizando Math.abs
    return Math.abs(volumeA - volumeB);
}
// Ejecuta la función con dos arreglos como argumentos y muestra el resultado en la consola
console.log(findDifference([9, 7, 2], [5, 2, 2]));