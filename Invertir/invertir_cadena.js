/*===================================== Usando .split("") .reverse() .join("") =======================*/
function invertirCadena(cad) {
    // Paso 1. Usa el método split() para devolver un nuevo arreglo
    let separarCadena = cad.split(""); // let separarCadena = "hola".split("");
    // ["h", "o", "l", "a"]

    // Paso 2. Usa el método reverse() para invertir el nuevo arreglo creado
    let invertirArreglo = separarCadena.reverse(); // let invertirArreglo = ["h", "o", "l", "a"].reverse();
    // ["a", "l", "o", "h"]

    // Paso 3. Usa el método join() para unir todos los elementos del arreglo en una cadena
    let unirArreglo = invertirArreglo.join(""); // let unirArreglo = ["a", "l", "o", "h"].join("");
    // "aloh"

    //Paso 4. Devolver la cadena invertida
    return unirArreglo; // "aloh"
}
consolo.log(invertirCadena("hola")); // "aloh"

/*================================================== Usando un Bucle for ====================================================*/
invertirCadena = (cad) => {
    let result = ""; // Declaramos una variable "result" para almacenar la cadena invertida.
    for (let i = cad.length - 1; i >= 0; i--) { // Este es un bucle for que itera sobre la cadena "cad" desde su último carácter hasta el primero.
        result += cad[i]; // En cada iteración, agregamos el carácter en la posición "i" a "result".
    }
    return result; // Devolvemos "result" como la cadena invertida.
}
console.log(invertirCadena("octavio")); //oivatco

/*================================================== Usando reduce() ====================================================*/
const invertirCadena4 = (cad) => {
    // Dividimos la cadena en un array de caracteres.
    let separarCadena = cad.split("");
    // Utilizamos 'reduce()' para invertir la cadena.
    // El primer argumento de 'reduce()' es la función acumuladora, y el segundo argumento es el valor inicial ('').
    let invertido = separarCadena.reduce((acumulador, caracter) => {
        return caracter + acumulador;
    }, "");
    // Devolvemos la cadena invertida.
    return invertido;
}
// Ejemplo de uso de la función.
console.log(invertirCadena4("octavio"));  // Output: "oivatco"