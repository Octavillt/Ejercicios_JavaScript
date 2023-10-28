/*
Elimina un signo de exclamación del final de una cadena. Para un kata principiante, puedes asumir que los datos de entrada son siempre una cadena,
no es necesario verificarlo.
*/
/*================================== Usando un bucle for  ==================================*/
function removeLastExclamation(string) {
    let reversedString = string.split('').reverse().join(''); // Invertimos la cadena.
    let removed = false; // Variable booleana para saber si ya se ha eliminado un signo de exclamación.
    let newReversedString = ''; // Cadena invertida donde almacenaremos los caracteres resultantes.

    // Iteramos sobre cada caracter en la cadena invertida.
    for (let i = 0; i < reversedString.length; i++) {
        let char = reversedString[i]; // Caracter actual.
        // Si el caracter es un signo de exclamación y aún no hemos eliminado ninguno...
        if ('!¡'.includes(char) && !removed) {
            removed = true; // Actualizamos la variable para indicar que ya se ha eliminado un signo.
        } else {
            // Agregamos el caracter actual a la nueva cadena invertida.
            newReversedString += char;
        }
    }
    // Devolvemos la cadena revertida a su orden original, sin el último signo de exclamación.
    return newReversedString.split('').reverse().join('');
}
console.log(removeLastExclamation("Hi!")); // "Hi"
console.log(removeLastExclamation("Hi!!!")); // "Hi!!"

/*================================== Usando lastIndexOf y substring  ==================================*/
const removeLastExclamation = (string) => {
    const lastIndex = string.lastIndexOf('!'); // Obtenemos el índice del último '!' en la cadena.
    // Si se encuentra un '!', eliminamos solo ese caracter.
    if (lastIndex !== -1) {
        return string.substring(0, lastIndex) + string.substring(lastIndex + 1);
    }
    // Si no hay '!', devolvemos la cadena original.
    return string;
}

console.log(removeLastExclamation("!Hi")); // "!Hi"
console.log(removeLastExclamation("!Hi!")); //  "!Hi"

/*================================== Usando Array.prototype.splice=================================*/
removeLastExclamation = (string) => {
    const arr = string.split(''); // Convertimos la cadena en un array de caracteres.
    const lastIndex = arr.lastIndexOf('!'); // Obtenemos el índice del último '!' en el array.
    // Si se encuentra un '!', eliminamos solo ese elemento.
    if (lastIndex !== -1) {
        arr.splice(lastIndex, 1);
    }
    // Convertimos el array de vuelta a una cadena y lo devolvemos.
    return arr.join('');
}

console.log(removeLastExclamation("Hi! Hi!")); // , "Hi! Hi"
console.log(removeLastExclamation("Hi")); // "Hi"
