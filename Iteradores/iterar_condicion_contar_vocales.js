/*
Devuelve el número (recuento) de vocales en la cadena dada. Consideraremos a, e, i, o, u como vocales para este Kata (pero no y). La cadena de entrada solo constará de letras minúsculas y/o espacios.
*/

// Una manera de hacerlo con un for simple sería
function getCount(str) {
    let conteo = 0;
    let minusCadena = str.toLocaleLowerCase();
    for (let i = 0; i < minusCadena.length; i++) {
        if (minusCadena[i] === 'a' || minusCadena[i] === 'e' ||
            minusCadena[i] === 'i' || minusCadena[i] === 'o' ||
            minusCadena[i] === 'u') {
            conteo++;
        }
    }
    return conteo;
}
console.log(getCount('aeiou')); // 5

// Una manera de hacerlo con un for simple y un Arreglo sería
function getCount(str) {
    // Inicializa una variable para almacenar el recuento de vocales
    let count = 0;
    // Crea un conjunto con las vocales para verificar si un carácter es una vocal
    let vowels = new Set(["a", "e", "i", "o", "u"]);
    // Itera sobre cada carácter de la cadena usando un bucle for simple
    for (let i = 0; i < str.length; i++) {
        // Si el carácter es una vocal, incrementa el recuento
        if (vowels.has(str[i])) {
            count++;
        }
    }
    // Devuelve el recuento final de vocales
    return count;
}
console.log(getCount('aeiou')); // 5

// Una manera de hacerlo con un for of y un Arreglo sería
function getCount(str) {
    // Inicializa una variable para almacenar el recuento de vocales
    let count = 0;
    // Crea un conjunto con las vocales para verificar si un carácter es una vocal
    let vowels = new Set(["a", "e", "i", "o", "u"]);
    // Itera sobre cada carácter de la cadena
    for (let char of str) {
        // Si el carácter es una vocal, incrementa el recuento
        if (vowels.has(char)) {
            count++;
        }
    }
    // Devuelve el recuento final de vocales
    return count;
}
console.log(getCount('aeiou'));// 5
