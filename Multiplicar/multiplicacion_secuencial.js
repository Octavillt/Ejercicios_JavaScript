/*
Multiplicar cada Posicion dado un Array
*/

// Utilizando for
let array = [1, 2, 3, 4];
let producto = 1;
for (let i = 0; i < array.length; i++) {
    producto *= array[i];
}
console.log(producto); // 24

// Utilizando reduce
array = [1, 2, 3, 4];
producto = array.reduce(function (pv, cv) {
    return pv * cv;
}, 1);
console.log(producto); // 24

//Utilizando map
let arr1 = [[3, 2], [2, 3], [4, 5]];
let multiplicar = (a, b) => a * b;
producto = arr => arr.reduce(multiplicar, 1);
let sumaArr = arr1.map(producto);
console.log(sumaArr); // [6, 6, 20]