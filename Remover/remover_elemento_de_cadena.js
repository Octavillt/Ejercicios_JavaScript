/*
Función de escritura RemoveExclamationMarks que elimina todos los signos de 
exclamación de una cadena dada.
*/

function removeExclamationMarks(s) {
  let cadenaReplasada = s.replace("!","");
  return cadenaReplasada;
}
console.log(removeExclamationMarks("Hello World!")); // Hello World

// Otra manera de hacerlo con for 
function removeExclamationMarks(s) {
  let cadena = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "!") {
      cadena += s[i];
    }
  }
  return cadena;
}
console.log(removeExclamationMarks("Hello World!"));// Hello World
