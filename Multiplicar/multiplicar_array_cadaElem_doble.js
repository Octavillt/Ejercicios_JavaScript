/*
Dada una matriz de enteros, devuelva una nueva matriz con cada valor 
multiplicado por 2. 

Por ejemplo: [1, 2, 3] --> [2, 4, 6]
*/

function maps(numbers){
  let dobleArr = [];
  for(let i = 0; i < numbers.length; i++){
    dobleArr[i] = numbers[i] * 2;
  }
  return dobleArr;
}
console.log(maps([1, 2, 3])); // [2, 4, 6]


// Otra manera de Resolverlo Con una Función seria
function maps(numbers) {
  let dobleArr = [];

  for (let i = 0; i < numbers.length; i++) {
    dobleArr.push(numbers[i] * 2);
  }
  return dobleArr;
}
console.log(maps([1, 2, 3])); // [2, 4, 6]
