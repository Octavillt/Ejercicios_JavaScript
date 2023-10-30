/*
Ácido desoxirribonucleico, el ADN es la principal molécula de almacenamiento de información en los sistemas biológicos.
Se compone de cuatro bases de ácido nucleico Guanina ('G'), Citosina ('C'), Adenina ('A') y Timina ('T'). 
El ácido ribonucleico, ARN, es la principal molécula mensajera en las células. El ARN difiere ligeramente del ADN en su 
estructura química y no contiene timina. En el ARN, la timina se reemplaza por otro ácido nucleico, el uracilo ('U').
Cree una función que traduzca una cadena de ADN dada en ARN. 

Por ejemplo: "GCAT" => "GCAU" 
La cadena de entrada puede tener una longitud arbitraria; en particular, puede estar vacía. 
Se garantiza que todas las entradas sean válidas, es decir, cada cadena de entrada solo constará de 'G', 'C', 'A' y
*/

/*======================================= Usando replace =========================================*/
DNAtoRNA = (dna) => {
  // Utilizamos el método 'replace' para hacer el reemplazo de caracteres.
  // La expresión regular '/T/g' busca todas las ocurrencias del caracter 'T' en la cadena.
  // 'U' es el caracter con el que se reemplazará cada 'T' encontrado.
  // El método retorna la nueva cadena con los reemplazos realizados.
  return dna.replace(/T/g, 'U');
}
// Hacemos una prueba del método con una cadena de ejemplo.
// El resultado será la misma cadena, ya que no contiene 'T' para reemplazar.
console.log(DNAtoRNA('GACCGCCGCC'));  // Resultado: GACCGCCGCC

/*===================================== Usando un bucle for-of ======================================*/
const DNAtoRNA = (dna) => {
  // Creamos un objeto 'ref' que actuará como un diccionario de correspondencia
  // entre los caracteres de ADN y sus respectivos caracteres de ARN.
  let ref = {
    'G': 'C',
    'A': 'U',
    'T': 'A',
    'C': 'G'
  };
  // Inicializamos una cadena 'rna' vacía que almacenará el resultado final.
  let rna = '';
  // Utilizamos un bucle 'for-of' para recorrer cada caracter en la cadena de ADN.
  for (let char of dna) {
    // Añadimos al resultado 'rna' el caracter de ARN correspondiente,
    // que encontramos usando el objeto 'ref'.
    rna += ref[char];
  }
  // Devolvemos la cadena 'rna', que ahora contiene la secuencia de ARN correspondiente.
  return rna;
}
console.log(DNAtoRNA('GACCGCCGCC')); // GACCGCCGCC