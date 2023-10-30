/*
Complete la función que acepta un parámetro de cadena e invierte cada palabra en la cadena.
Se deben conservar todos los espacios de la cadena. 
Ejemplos:

"This is an example!" ==> "sihT si na !elpmaxe" 
"double  spaces" ==> "elbuod secaps"

*/
/*===================================== Usando .split("") .reverse() .join("") y .map() =======================*/
const reverseWords = (str) => {
    // Usamos el método '.split(" ")' para dividir la cadena en un array de palabras.
    let wordsArray = str.split(" ");
    // Usamos '.map()' para aplicar una función a cada elemento del array.
    // En este caso, la función invierte cada palabra.
    let reversedWordsArray = wordsArray.map(word => {
        // Convertimos cada palabra en un array de caracteres,
        // invertimos el array y lo volvemos a convertir en una cadena.
        return word.split("").reverse().join("");
    });
    // Usamos '.join(" ")' para convertir el array de palabras invertidas de nuevo en una cadena,
    // separando cada palabra con un espacio.
    let reversedStr = reversedWordsArray.join(" ");
    // Retornamos la cadena invertida.
    return reversedStr;
}
// Debería retornar "elbuod secaps".
console.log(reverseWords('double spaces'));

/*================================ Usando .split("") .reverse() .join("") y Bucle for ============================*/
reverseWords = (str) => {
    // Dividimos la cadena en un array de palabras.
    let wordsArray = str.split(" ");
    let reversedWordsArray = [];
    // Utilizamos un bucle 'for' para iterar sobre cada palabra del array.
    for (let i = 0; i < wordsArray.length; i++) {
        let word = wordsArray[i];
        let reversedWord = word.split("").reverse().join("");
        reversedWordsArray.push(reversedWord);
    }
    // Unimos las palabras invertidas en una sola cadena.
    return reversedWordsArray.join(" ");
}
console.log(reverseWords('double spaces'));  // Output: "elbuod secaps"

/*================================================== Usando .split("") .reverse() .join("") y forEach ====================================================*/
function reverseWords(str) {
    // Dividimos la cadena en un array de palabras.
    let wordsArray = str.split(" ");
    let reversedWordsArray = [];
    // Utilizamos '.forEach()' para iterar sobre cada palabra.
    wordsArray.forEach(word => {
        let reversedWord = word.split("").reverse().join("");
        reversedWordsArray.push(reversedWord);
    });
    // Unimos las palabras invertidas en una sola cadena.
    return reversedWordsArray.join(" ");
}
console.log(reverseWords('double spaces'));  // Output: "elbuod secaps"

