/*
Implemente una función que convierta el valor booleano dado en su representación de cadena. 
Nota: Sólo se proporcionarán entradas válidas.
*/

// Solución con if else
booleanToString = (b) => {
    if (b) {
        let trueStrig = b.toString();
        return `When we pass in ${trueStrig}, we want the string ${trueStrig} as output`
    } else {
        let falseStrig = b.toString();
        return `When we pass in ${falseStrig}, we want the string ${falseStrig} as output`
    }
}
console.log(booleanToString(true));
console.log(booleanToString(false));

// Solución con operador ternario
booleanToStrings = (b) => {
    let boolString = b.toString();
    return b ? `When we pass in ${boolString}, we want the string ${boolString} as output` : `When we pass in ${boolString}, we want the string ${boolString} as output`;

}
console.log(booleanToStrings(true));
console.log(booleanToStrings(false));