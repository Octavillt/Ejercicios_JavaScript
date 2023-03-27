/*
Dada una cadena de dígitos, debe reemplazar cualquier dígito debajo de 5 con '0' 
y cualquier dígito 5 y superior con '1'. Devuelve la cadena resultante.
 Nota: la entrada nunca será una cadena vacía
*/

function fakeBin(x){
	let cadena = "";
	for(let i = 0; i < x.length; i++){
		let digito = parseInt(x[i]);
		if(digito <= 4){
		cadena += '0';
		}else if(digito >= 5){
		 cadena += '1';
		}
	}
	return cadena;
}

console.log(fakeBin('45385593107843568')); // 01011110001100111

// Con la funcion replace y 