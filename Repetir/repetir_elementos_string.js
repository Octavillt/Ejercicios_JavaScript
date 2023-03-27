/*
Escriba una función que acepte un entero n y una cadena s como parámetros, 
y devuelva una cadena de s repetida exactamente n veces.

6, "I"     -> "IIIIII"

*/
function repeatStr(n, s) {
  let repetir = s.repeat(n);
  return repetir;
}

console.log(repeatStr(6, "I")); //"IIIIII"

//Otra manera de Resolverlo Sin Funcion
function repeatStr(n, s) {
    let result = "";
    for (let i = 0; i < n; i++) {
        result += s;
    }
    return result;
}
console.log(repeatStr(8, "O")); //"OOOOOOOO"
