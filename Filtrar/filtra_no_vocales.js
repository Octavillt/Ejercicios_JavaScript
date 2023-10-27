/* 
Cree una función llamada acceso directo para eliminar las vocales minúsculas (a, e, i, o, u) en una cadena determinada.

"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"

no te preocupes por las vocales mayúsculas
y no se considera una vocal para este kata
*/
/*================================== Usando un bucle for  ==================================*/
function shortcut(str) {
    // Inicializamos una variable para almacenar la nueva cadena sin vocales
    let newStr = "";
    // Recorremos cada carácter de la cadena de entrada
    for (let i = 0; i < str.length; i++) {
        // Guardamos el carácter actual en una variable para facilitar su manejo
        let char = str[i];
        // Verificamos si el carácter actual es una vocal minúscula
        if ("aeiou".includes(char)) {
            // Si es una vocal, lo saltamos y continuamos con el siguiente carácter
            continue;
        }
        // Si el carácter no es una vocal, lo añadimos a la nueva cadena
        newStr += char;
    }
    // Devolvemos la nueva cadena sin vocales
    return newStr;
}
console.log(shortcut("hello")); // Debería imprimir "hll"
shortcut("tuoiea");

/*================================== Usando filter  ==================================*/
shortcut = (str) => {
    // Convertimos la cadena en un array de caracteres para poder usar filter
    let arr = Array.from(str);
    // Usamos filter para eliminar las vocales
    let filteredArr = arr.filter(char => !"aeiou".includes(char));
    // Convertimos el array resultante de nuevo a una cadena
    return filteredArr.join("");
}
console.log(shortcut("hello")); // Debería imprimir "hll"

/*================================== Usando replace con una expresión regular  ==================================*/
const shortcut = (str) => {
    // Usamos replace para eliminar todas las vocales minúsculas en una sola operación
    // La expresión regular /[aeiou]/g significa "cualquier vocal minúscula en toda la cadena"
    return str.replace(/[aeiou]/g, "");
}
console.log(shortcut("hello")); // Debería imprimir "hll"
