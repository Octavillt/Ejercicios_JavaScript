/*
Obtiene una matriz de números, devuelve la suma de todos los positivos. 
Ejemplo [1,-4,7,12] => 1 + 7 + 12 = 20 
Nota: si no hay nada que sumar, la suma es 0 por defecto.
*/

function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

console.log(positiveSum([1, -4, 7, 12]));