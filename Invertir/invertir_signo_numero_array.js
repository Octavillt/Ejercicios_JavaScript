/*
Dado un conjunto de números, devuelve el inverso aditivo de cada uno. Cada positivo se vuelve negativo, y los negativos se vuelven positivos.
*/
function invert(array) {
    let arrList = [];
    for (let i = 0; i < array.length; i++) {
        let inverso = array[i] * -1;
        arrList.push(inverso);
    }
    return arrList;
}

console.log(invert([1, -2, 3, 4, -5]));


