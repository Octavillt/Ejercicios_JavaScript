/*
Ácido desoxirribonucleico, el ADN es la principal molécula de almacenamiento de información en los sistemas biológicos. Se compone de cuatro bases de ácido nucleico Guanina ('G'), Citosina ('C'), Adenina ('A') y Timina ('T'). El ácido ribonucleico, ARN, es la principal molécula mensajera en las células. El ARN difiere ligeramente del ADN en su estructura química y no contiene timina. En el ARN, la timina se reemplaza por otro ácido nucleico, el uracilo ('U'). Cree una función que traduzca una cadena de ADN dada en ARN. 
Por ejemplo: "GCAT" => "GCAU" 
La cadena de entrada puede tener una longitud arbitraria; en particular, puede estar vacía. Se garantiza que todas las entradas sean válidas, es decir, cada cadena de entrada solo constará de 'G', 'C', 'A' y
*/

function DNAtoRNA(dna) {
    // reemplaza cada 'T' por 'U'
    return dna.replace(/T/g, 'U');
}
console.log(DNAtoRNA('GACCGCCGCC')); // GACCGCCGCC


function DNAtoRNA(dna) {
    // crea un objeto con las correspondencias
    let ref = {'G': 'C', 'A':'U', 'T':'A', 'C':'G'};
    // inicializa una cadena vacía para el ARN
    let rna = '';
    // recorre cada carácter de la cadena de ADN
    for (let char of dna) {
      // añade el carácter correspondiente al ARN
      rna += ref[char];
    }
    // devuelve el ARN
    return rna;
}

console.log(DNAtoRNA('GACCGCCGCC')); // GACCGCCGCC