/* 
Escribir una función que tome un argumento y devuelva su cuadrado.
*/
const square = (n) =>  {
    let result = n * n;
    return result;
 }
 
 console.log(square(3));
 
 // Otra manera de hacerlo pero con la Función pow()
 
 function square1(n){
     let result = Math.pow(n, 2);
     return result;
 }
  console.log(square1(2));