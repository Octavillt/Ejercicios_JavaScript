/*
Hubo un examen en tu clase y lo pasaste. ¡Felicidades! Pero eres una persona ambiciosa.
Quiere saber si es mejor que el estudiante promedio de su clase. Recibe una matriz con
los puntajes de las pruebas de sus compañeros. ¡Ahora calcule el promedio y compare su puntaje! 
¡Devuelve True si estás mejor, de lo contrario False! Nota: Sus puntos no están incluidos en la 
matriz de puntos de su clase. ¡Para calcular el punto promedio, puede agregar su punto a la matriz 
dada!
*/
function betterThanAverage(classPoints, yourPoints) {
  let cantidad = classPoints.length;
  let suma = 0; 
  for(let i = 0; i < cantidad; i++){
    suma += classPoints[i];
  }
  let promedio = suma / cantidad;
  if(promedio < yourPoints){
    return true;
  }else{
    return false;
  } 
}

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));