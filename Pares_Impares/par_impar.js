/*
Timmy y Sarah creen que están enamorados, pero en el lugar donde viven, 
solo lo sabrán una vez que recojan una flor cada uno. Si una de las flores 
tiene un número par de pétalos y la otra tiene un número impar de pétalos, 
significa que están enamorados. 

Escribe una función que tome el número de pétalos 
de cada flor y devuelva verdadero si están enamorados y falso si no lo están.
*/

/*============================================= Usando if - else ======================================*/
const lovefunc = (flor1, flor2) => {
  // Usamos un 'if' para verificar si ambos números son pares (divisibles por 2).
  if (flor1 % 2 === 0 && flor2 % 2 === 0) {
    // Si ambos son pares, la función retorna 'false'.
    return false;
  } else {
    // De lo contrario (si al menos uno es impar), la función retorna 'true'.
    return true;
  }
}
console.log(lovefunc(757, 457)); // Ambos son impares, por lo que retorna 'true'.
console.log(lovefunc(0, 0)); // Ambos son pares, por lo que retorna 'false'.

/*============================================= Usando Operador ternario ======================================*/
lovefunc = (flower1, flower2) => {
  // Usamos el operador ternario para verificar si ambos números son pares.
  // Si es cierto, retorna 'false'. De lo contrario, retorna 'true'.
  let loveFlowers = flower1 % 2 === 0 && flower2 % 2 === 0 ? false : true;

  // Retorna el valor almacenado en 'loveFlowers'.
  return loveFlowers;
}
console.log(lovefunc(2, 2)); // Ambos son pares, por lo que retorna 'false'.
console.log(lovefunc(0, 1)); // Uno es impar, por lo que retorna 'true'.

/*================================================ Usando XOR Bitwise =========================================*/
function lovefunc(flower1, flower2) {
  // Retorna 'true' si los números son diferentes en paridad (uno par y uno impar).
  // Retorna 'false' si los números son iguales en paridad (ambos pares o ambos impares).
  return (flower1 % 2) ^ (flower2 % 2);
}
console.log(lovefunc(2, 3)); // Uno es par y uno es impar, por lo que retorna 'true' (1).
console.log(lovefunc(2, 2)); // Ambos son pares, por lo que retorna 'false' (0).

