/*
Tus compañeros de clase te pidieron que copiaras algunos papeles para ellos.
Sabes que hay 'n' compañeros de clase y el papeleo tiene 'm' páginas. 
Tu tarea es calcular cuántas páginas en blanco necesitas. Si n < 0 o m < 0 devuelve 0.

n= 5, m=5: 25
n=-5, m=5:  0

*/
function paperwork(n, m) {
  if(n < 0 || m < 0 ){
    return 0;
  }else{
    return (n * m);
  }
}

console.log(paperwork(5, 5));//25
