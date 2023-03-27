/*
Escriba una función que tome una serie de palabras y las junte en una oración y
devuelva la oración. Pero debe agregar espacios entre cada palabra
*/

function smash(words) {
  return words.join(" ");
}
const words = ["Hola", "mundo", "desde", "JavaScript"];
const espacio = smash(words);
console.log(espacio); // "Hola mundo desde JavaScript"

// Manera más optimizada 
function smash (words) {
   return words.join(" ");
};
console.log(smash(["Hola", "mundo", "desde", "JavaScript"]));

// Sin la Funcion join sería
function smash(words) {
  let espacio = "";
  for (let i = 0; i < words.length; i++) {
    espacio += words[i];
    if (i !== words.length - 1) {
      espacio += " ";
    }
  }
  return espacio;
}
console.log(smash(["Hola", "mundo", "desde", "JavaScript"])); // "Hola mundo desde JavaScript"
