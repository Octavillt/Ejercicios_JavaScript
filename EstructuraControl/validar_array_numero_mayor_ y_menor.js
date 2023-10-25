/*
Su tarea es crear dos funciones (máximo y mínimo, o máximo y mínimo, etc., según el idioma) 
que reciban una lista de enteros como entrada y devuelvan el número más grande y más bajo en esa lista,
respectivamente.
*/
function min(list) {
  let minimo = list[0];
  for (let i = 1; i < list.length; i++) {
    if (list[i] < minimo) {
      minimo = list[i];
    }
  }
  return minimo; // -110
}

console.log(min([-52, 56, 30, 29, -54, 0, -110]));


let max = function (list) {
  let maximo = list[0];
  for (let i = 1; i < list.length; i++) {
    if (list[i] > maximo) {
      maximo = list[i];
    }
  }
  return maximo;
}
console.log(max([4, 6, 2, 1, 9, 63, -134, 566])); // 566