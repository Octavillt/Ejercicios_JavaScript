/*
Crea una función que dé un saludo personalizado. Esta función toma dos parámetros: 
nombre y propietario.
*/
function greet (name, owner){
  if(name == owner){
    return 'Hello boss';
  }else if(name != owner){
    return 'Hello guest'; 
  }
}
console.log(greet('Octavio','Octavio'));// 'Hello boss'