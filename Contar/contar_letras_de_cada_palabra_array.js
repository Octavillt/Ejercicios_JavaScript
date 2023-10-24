/* Cuenta el Numero de Palabras o Elementos que contenga una Cadena y lo Retorna en un Arrglo*/

function contarLongitud(cadena) { // Define una función llamada "contarLongitud" que toma una cadena como argumento
    let palabras = cadena.split(" "); // Divide la cadena en palabras y las almacena en una matriz llamada "palabras"
    let resultado = []; // Crea una matriz vacía llamada "resultado"
    for (let i = 0; i < palabras.length; i++) { // Itera sobre cada palabra en la matriz "palabras"
        arrCadena.push(`${cadena[i]} ${cadena[i].length}`); // Agrega una cadena al final de la matriz "resultado" que contiene la palabra y su longitud
    }
    return resultado; // Devuelve la matriz "resultado"
}

console.log(contarLongitud("Manzana Verde")); // [ 'Manzana 7', 'Verde 5' ]

