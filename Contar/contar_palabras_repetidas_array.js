/*Cuenta las Palabras repetidas de un Arreglo*/

function contarPalabras(cadena) { 
    let palabras = cadena.split(" "); // Divide la cadena en palabras y las almacena en una matriz llamada "palabras"
    let objeto = {}; // Crea un objeto vacío llamado "objeto"
    for (let i = 0; i < palabras.length; i++) { // Itera sobre cada palabra en la matriz "palabras"
      if (objeto[palabras[i]]) { // Si la palabra ya está en el objeto
        objeto[palabras[i]]++; // Incrementa el valor de la propiedad correspondiente en el objeto
      } else { // Si la palabra no está en el objeto
        objeto[palabras[i]] = 1; // Agrega la palabra al objeto con un valor de 1
      }
    }
    return objeto; // Devuelve el objeto
}

console.log(contarPalabras("Arreglo Arreglo Arreglo")); // { Arreglo: 3 }