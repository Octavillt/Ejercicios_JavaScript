/*
Dada una matriz de números enteros, devuelve una nueva matriz con cada valor duplicado.
Por ejemplo: [1, 2, 3] --> [2, 4, 6]
*/

/*======================================= Usando un Array y Asignación Directa ==============================*/
function doubleWithDirect(numbers) {
  // Declaramos un nuevo array vacío llamado 'dobleArr'.
  let dobleArr = [];
  // Usamos un bucle 'for' para iterar sobre cada elemento del array de entrada.
  for (let i = 0; i < numbers.length; i++) {
      // Multiplicamos cada número por 2 y lo almacenamos en la misma posición del nuevo array.
      dobleArr[i] = numbers[i] * 2;
  }
  // Retornamos el nuevo array.
  return dobleArr;
}
// Debería retornar [2, 4, 6].
console.log(doubleWithDirect([1, 2, 3]));

/*================================================ Usando .push() =========================================*/
doubleWithPush = (arrNumber) => {
  // Declaramos un nuevo array vacío llamado 'numberDouble'.
  let numberDouble = [];
  // Usamos un bucle 'for' para iterar sobre cada elemento del array de entrada.
  for (let i = 0; i < arrNumber.length; i++) {
      // Multiplicamos cada número por 2 y lo agregamos al nuevo array usando '.push()'.
      numberDouble.push(arrNumber[i] * 2);
  }
  // Retornamos el nuevo array.
  return numberDouble;
}
// Debería retornar [2, 4, 6].
console.log(doubleWithPush([1, 2, 3]));

/*================================================ Usando .map() =========================================*/
const doubleWithMap = (arr) => {
  // Usamos '.map()' para crear un nuevo array en el que cada elemento sea el doble del original.
  return arr.map(num => num * 2);
}
// Debería retornar [2, 4, 6].
console.log(doubleWithMap([1, 2, 3]));
