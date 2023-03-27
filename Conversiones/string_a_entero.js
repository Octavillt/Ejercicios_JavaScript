const stringToNumber = function(str){
  let numero = +str;
  
  return numero;
}
console.log(stringToNumber('213124')); // 213124

// Otra manera de hacerlo es con la Funcion Number();
const stringToNumber1 = function(str){
  let numero = Number(str);
  
  return numero;
}
console.log(stringToNumber1('213124')); //213124