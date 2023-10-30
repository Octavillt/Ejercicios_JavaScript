/*
El software de reconocimiento de caracteres se utiliza ampliamente para digitalizar textos impresos.
De este modo, los textos se pueden editar, buscar y almacenar en un ordenador. Cuando los documentos 
(especialmente los bastante antiguos escritos con una máquina de escribir) se digitalizan, 
los software de reconocimiento de caracteres suelen cometer errores. Tu tarea es corregir los errores 
en el texto digitalizado. Sólo tienes que manejar los siguientes errores:

S se malinterpreta como 5 
O se malinterpreta como 0 
I se malinterpreta como 1 

Los casos de prueba contienen números sólo por error.
*/

/*===================================== Usando objeto y map ======================================*/
const correct = (string) => {
    // Convertimos la cadena en un array de caracteres para facilitar la manipulación
    let stringArr = string.split("");
    // Objeto para mapear los caracteres erróneos a los caracteres correctos
    const corrections = {
        '5': 'S',
        '0': 'O',
        '1': 'I'
    };
    // Usamos map para crear un nuevo array con los caracteres corregidos
    let correctedArr = stringArr.map((element) => {
        // Si el elemento es un caracter erróneo, lo corregimos.
        // Si no, dejamos el caracter como está.
        return corrections[element] || element;
    });
    // Convertimos el array corregido de nuevo a una cadena
    let correctedString = correctedArr.join("");
    // Retornamos la cadena corregida
    return correctedString;
};
console.log(correct('L0ND0N'));  // Debería mostrar "LONDON"

/*=========================================== Usando bucle for ========================================*/
correctWithForLoop = (string) => {
    let correctedString = "";
    const corrections = {
        '5': 'S',
        '0': 'O',
        '1': 'I'
    };
    // Recorremos cada caracter de la cadena original
    for (let i = 0; i < string.length; i++) {
        // Verificamos si el caracter actual necesita ser corregido
        if (corrections.hasOwnProperty(string[i])) {
            correctedString += corrections[string[i]];
        } else {
            correctedString += string[i];
        }
    }
    return correctedString;
};
console.log(correctWithForLoop('L0ND0N'));  // Debería mostrar "LONDON"

/*===================================== Usando replace con Expresiones Regulares ======================================*/
function correctWithReplace(string) {
    // Usamos el método replace con una expresión regular para encontrar y corregir todos los caracteres erróneos
    // La expresión regular /[501]/g encuentra todas las ocurrencias de '5', '0' o '1'
    return string.replace(/[501]/g, (match) => {
        const corrections = {
            '5': 'S',
            '0': 'O',
            '1': 'I'
        };
        return corrections[match];
    });
};
console.log(correctWithReplace('L0ND0N'));  // Debería mostrar "LONDON"