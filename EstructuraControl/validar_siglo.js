/*
El primer siglo abarca desde el año 1 hasta el año 100 inclusive, el segundo siglo -
desde el año 101 hasta el año 200 inclusive, etc.
Tarea Dado un año, devuelve el siglo en el que se encuentra.
*/
function century(year) {
    let siglo = Math.ceil(year/100);
    return siglo;
  }
console.log(century(89));

// Tambien se puede realizar con la Funcion Math.floor
function century(year) {
    let siglo = Math.floor(year/100) + 1;
    console.log(siglo);
    if (year % 100 === 0) {
        siglo -= 1;
      }
    return siglo;
  }
console.log(century(89));

