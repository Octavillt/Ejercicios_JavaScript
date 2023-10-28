/*
Los americanos son gente rara: en sus edificios, el primer piso es en realidad la planta baja y no existe el piso 13 (por superstición). 
Escribe una función que dado un piso en el sistema americano devuelva el piso en el sistema europeo. Con el reemplazo del primer piso 
por la planta baja y la eliminación del piso 13, los números se mueven hacia abajo para ocupar su lugar. En el caso de más de 13, 
bajan dos porque hay dos números omitidos debajo de ellos. Los sótanos (negativos) siguen siendo los mismos que el nivel universal.

Ejmplo:
1 -> EU =>  0 -> EURO 
0  =>  0 
5  =>  4
15  =>  13
-3  =>  -3

*/
/*===================================== Utilizando if's ====================================================== */
getRealFloor = (n) => {
    // Para pisos negativos, no hay cambios. Los sótanos son los mismos en ambos sistemas.
    if (n < 0) {
        return n;
    }
    // En Estados Unidos, el primer piso es la planta baja en Europa.
    // Por lo tanto, si n es 1, debemos devolver 0.
    if (n === 1) {
        return 0;
    }
    // En Estados Unidos, el piso 13 se omite por superstición.
    // Por lo tanto, para pisos mayores a 13, se deben omitir dos pisos en total.
    if (n > 13) {
        return n - 2;
    }
    // Para todos los demás pisos (2-12), solo necesitamos omitir un piso.
    return n - 1;
}

console.log(getRealFloor(1));  // Debería devolver 0
console.log(getRealFloor(0));  // Debería devolver 0
console.log(getRealFloor(5));  // Debería devolver 4
console.log(getRealFloor(15)); // Debería devolver 13
console.log(getRealFloor(-3)); // Debería devolver -3


/*===================================== Utilizando Operador Ternario ====================================================== */
// Función para obtener el piso real en el sistema europeo basado en el piso americano
function getRealFloor(n) {
    // Usamos operadores ternarios para manejar todas las condiciones en una sola línea.
    // Si n es menor que 0, devolvemos n. 
    // Si n es igual a 1 o 0, devolvemos 0.
    // Si n es mayor que 13, restamos 2 para omitir tanto el piso 13 como el piso 1.
    // De lo contrario, restamos 1 para omitir sólo el piso 1.
    return n < 0 ? n : n === 1 || n === 0 ? 0 : n > 13 ? n - 2 : n - 1;
}

// Ejemplos de cómo usar la función
console.log(getRealFloor(1));  // Debería devolver 0
console.log(getRealFloor(0));  // Debería devolver 0
console.log(getRealFloor(5));  // Debería devolver 4
console.log(getRealFloor(15)); // Debería devolver 13
console.log(getRealFloor(-3)); // Debería devolver -3

