/*Separar una Cadena a un Array*/
function stringToArray(string){
  let divPalabras = string.split(" ");
  return divPalabras;
}

console.log(stringToArray("I love arrays they are my favorite"));
// [ "I", "love", "arrays", "they", "are", "my", "favorite" ]

//Otra manera de hacerlo sin una funcion sería:
function stringToArray(string){
let palabras = [];
let palabra = "";

for (let i = 0; i < string.length; i++){
  if (string.charAt(i) === " ") { //Devuelve en un Nuevo String el Carácter UTF-16 de una Cadena.
    palabras.push(palabra);
    palabra = "";
  }else{
    palabra += string.charAt(i);
  }
}
}
palabras.push(palabra);
console.log(palabras);

/*

* Se declara un array vacío llamado palabras que almacenará las palabras separadas.

* Se declara una variable vacía llamada palabra que almacenará cada palabra mientras 
se recorre el string.

* Se inicia un bucle for que recorre cada carácter en el string.

* Se comprueba si el carácter actual es un espacio en blanco. Si es así, se agrega la 
palabra actual al array palabras y se reinicia la variable palabra.

* Si el carácter actual no es un espacio en blanco, se agrega el carácter a la palabra actual.

* Al final del bucle for, se agrega la última palabra a palabras.

* Finalmente, se muestra el array de palabras en la consola.

* Este código usa el método charAt(i) para obtener el carácter en la posición i en el string y 
concatenarlo a la variable palabra. Cada vez que se encuentra un espacio en blanco, se agrega la 
palabra actual al array palabras y se reinicia la variable palabra. De esta manera, se pueden separar 
todas las palabras en el string y almacenarlas en el array palabras.

*/