/*
Crear una función que retorne Hello World!
*/
const hello1 = () =>  {
    let hola = 'Hello World!';
   return hola;
}

// una linea no requiere llaves
const hello2 = () => console.log('Hello World!');

// retornar un valor
const hello3 = () => 'Hello World!';

console.log(hello1());
hello2();
console.log(hello3());
