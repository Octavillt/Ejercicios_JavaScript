/*

Este kata consiste en multiplicar un número dado por ocho si es un número par 
y por nueve en caso contrario.

*/
function simpleMultiplication(number) {
    if(number % 2 === 0){
     let numPar = (number * 8);
    
      return numPar;
  }else{
     let numImpar = (number * 9);
  
      return numImpar;
  }
  return false;
}
console.log(simpleMultiplication(7)); // 7 * 9 = 63
