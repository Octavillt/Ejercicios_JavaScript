/* 
Le preguntas a una niña pequeña: "¿Cuántos años tienes?" Ella siempre dice, "x años", donde x es un número aleatorio entre 0 y 9. Escribe un programa que devuelva la edad de la niña (0-9) como un número entero. Suponga que la cadena de entrada de prueba siempre es una cadena válida. Por ejemplo, la entrada de prueba puede ser "1 año" o "5 años". El primer carácter de la cadena siempre es un número.
*/
function getAge(inputString) {
  for (let i = 0; i < inputString.length; i++) {
    let numero = inputString[i][0];
    let entero = +numero;
    if (entero <= 9) {
      return entero;
    } else {
      return false;
    }
  }
}
console.log(getAge('4 Años')); // 4 -> Numero


// Otra Manera de Hacerlo con la Función parseInt y charAt
function extractAge(inputString) {
  return parseInt(inputString.charAt(0));
}
let inputString = "8 años";
let age = extractAge(inputString);
console.log(age);


// Otra Manera de Hacerlo con la Función parseInt y substring
function obtenerEdad(cadena) {
  let primerCaracter = cadena.substring(0, 1);
  let edad = parseInt(primerCaracter);
  return edad;
}

console.log(obtenerEdad("8 años")); // salida esperada: 10
console.log(obtenerEdad("3 año")); // salida esperada: 3

// Otra Manera de Hacerlo con la Función parseInt y split
function getAge(inputString) {
  let separete = inputString.split("");
  let separeNum = parseInt(separete[0]);
  return (separeNum <= 9 ) ? separeNum : false;
}
console.log(getAge('4 Años'));
