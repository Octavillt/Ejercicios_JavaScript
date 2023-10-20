/*
Se le proporciona una matriz (que tendrá una longitud de al menos 3, pero podría ser muy grande) que contiene números enteros. 
La matriz está completamente compuesta por enteros impares o completamente compuesta por enteros pares excepto por un 
solo número entero N. Escriba un método que tome la matriz como argumento y devuelva este "valor atípico" N.
*/
const arrNums = [2, 4, 0, 100, 4, 11];
let sumaElemt = 0;
let elementos = 0; 
let mediana = arrNums.length / 2;
//console.log(mediana);

for(let i = 0; i < mediana; i++){
    sumaElemt += parseInt(arrNums[i]);
    elementos ++;
    console.log(arrNums[i]);
}
//console.log(sumaElemt); 
//console.log(elementos);
// let media = sumaElemt / elementos;
// console.log(media);