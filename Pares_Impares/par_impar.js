/*
Timmy y Sarah creen que están enamorados, pero en el lugar donde viven, 
solo lo sabrán una vez que recojan una flor cada uno. Si una de las flores 
tiene un número par de pétalos y la otra tiene un número impar de pétalos, 
significa que están enamorados. 

Escribe una función que tome el número de pétalos 
de cada flor y devuelva verdadero si están enamorados y falso si no lo están.
*/

function lovefunc(flor1, flor2){
  if(flor1 % 2 === 0 && flor2  % 2 === 0){
    return false;
  }else{
    return true;
  }
}

console.log(lovefunc(2,3)); // true