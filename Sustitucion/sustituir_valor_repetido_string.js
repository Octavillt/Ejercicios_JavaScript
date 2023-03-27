/*
El objetivo de este ejercicio es convertir una cadena en una nueva cadena donde cada carácter de la nueva cadena es "(" si ese carácter aparece solo una vez en la cadena original, o ")" si ese carácter aparece más de una vez en la original. cadena. Ignore las mayúsculas al determinar si un carácter es un duplicado.
*/
function duplicateEncode(word) {
    // Inicializa una variable para almacenar el resultado
    let result = "";
    // Convierte la cadena dada en minúsculas para ignorar las mayúsculas
    let minusCadena = word.toLowerCase();
    // Itera sobre cada carácter de la cadena
    for (let i = 0; i < minusCadena.length; i++) {
        // Si el índice del primer y último carácter es el mismo
        if (minusCadena.indexOf(minusCadena[i]) === minusCadena.lastIndexOf(minusCadena[i])) {
            // Agrega un "(" al resultado
            result += "(";
        } else {
            // De lo contrario, agrega un ")" al resultado
            result += ")";
        }
    }
    // Devuelve el resultado final
    return result;
}
console.log(duplicateEncode("din"));












