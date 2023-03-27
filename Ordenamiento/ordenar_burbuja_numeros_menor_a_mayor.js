/*
Ordenar un Arreglo del Menor Numero al Mayor Numero
*/
let arreglo = [10, 8, 9, 5, 3, 78, 23]; // Declara el arreglo con los números desordenados
let n = arreglo.length; // Obtiene la longitud del arreglo
// Ordena el arreglo de menor a mayor usando el algoritmo de burbuja
for (let i = 0; i < n - 1; i++) { // Repite el proceso n - 1 veces
  for (let j = 0; j < n - i - 1; j++) { // Recorre el arreglo desde el inicio hasta el final menos i
    if (arreglo[j] > arreglo[j + 1]) { // Compara el elemento actual con el siguiente
      // Intercambia los elementos si están en el orden incorrecto
      let temp = arreglo[j]; // Guarda el elemento actual en una variable temporal
      arreglo[j] = arreglo[j + 1]; // Asigna el elemento siguiente al elemento actual
      arreglo[j + 1] = temp; // Asigna el elemento temporal al elemento siguiente
    }
  }
}
console.log(arreglo); // Muestra [3, 5, 8, 9, 10, 23, 78]

// Con la Funcion sort sería de la Siguiente Manera
const arreglo1 = [10, 8, 9, 5, 3, 78, 23];
// Ordena el arreglo1 de menor a mayor usando el método sort()
arreglo1.sort((a, b) => a - b);
console.log(arreglo1); // Muestra [3, 5, 8, 9, 10, 23, 78]
