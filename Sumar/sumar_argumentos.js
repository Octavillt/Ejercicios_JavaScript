// Suma de Argumentos de una Funcion
function sumarTodo(){
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i]; // -> suma = suma + arguments[i]
    }
    return suma;
}
console.log(sumarTodo(5, 4, 13, 10, 9, 10, 11, 3)); // 65