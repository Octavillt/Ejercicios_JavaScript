/*
Completa la función de suma de cuadrados para que eleve al cuadrado 
cada número que se le pasa y luego suma los resultados.

Por ejemplo, para [1, 2, 2] debería devolver 9 porque 1^2 + 2^2 + 2^2 = 9
*/

function squareSum(numbers){
  let sum = 0;
  
  for(let i = 0 ; i < numbers.length; i++){
    sum += Math.pow(numbers[i], 2);
  }
  return sum;
}
console.log(squareSum([1, 2, 2])); // 9

// Otra manera de hacerlo Sin una Función seria
function squareSum(numbers){
  let sum = 0;
  
  for(let i = 0 ; i < numbers.length; i++){
    sum += numbers[i] * numbers[i];
  }
  return sum;
}
console.log(squareSum([1, 2, 2])); // 9