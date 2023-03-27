/*
Dado un número aleatorio no negativo, debe devolver los dígitos 
de este número dentro de una matriz en orden inverso.

35231 => [1,3,2,5,3]
*/

function digitize(n) {
 let str = String(n);
 let digitos = str.split('');
 let arr = [];

  for(let i = 0; i < digitos.length; i++){
    arr.push(Number(digitos[i]));
  }
  return arr.reverse();
}

console.log(digitize(35231)); // [ 1, 3, 2, 5, 3 ]


/*

* Convertir el número a una cadena usando la función String().
* Dividir la cadena en dígitos individuales usando la función split().
* Convertir cada dígito de nuevo a un número con la función Number().
* Guardar los números en una matriz.
* Retornar el Arreglo Invertido usando la funcion reverse().

*/

// Explicacion mas Detallada
/*

1.  let str = String(n);: aquí estamos convirtiendo el número n a una cadena de caracteres. 
    Esto es necesario para poder separar los dígitos y almacenarlos en un arreglo.

2.  let digitos = str.split('');: aquí estamos separando los dígitos de la cadena de caracteres 
    str en un arreglo utilizando el método split y como argumento estamos usando una cadena vacía para 
    indicar que queremos separar cada caracter.

3.  let arr = [];: aquí estamos creando un arreglo vacío que vamos a usar para almacenar 
    los números convertidos.

4.  for(let i = 0; i < digitos.length; i++): aquí estamos iniciando un ciclo for para recorrer cada 
    uno de los elementos en el arreglo digitos. La variable i es el índice del elemento actual y 
    digitos.length es la longitud del arreglo.

5.  arr.push(Number(digitos[i]));: aquí estamos convirtiendo cada elemento en el arreglo digitos a 
    un número y agregándolo al final del arreglo arr con el método push.

6.  return arr.reverse();: aquí estamos invirtiendo el orden de los elementos en el arreglo arr y 
    devolviendo el resultado.

7.  console.log(digitize(35231));: aquí estamos invocando la función digitize y pasándole el 
    número 35231. El resultado de la función será un arreglo de números invertidos, que se mostrará 
    en la consola.


*/