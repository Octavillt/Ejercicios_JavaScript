function boolToWord( bool ){

if(bool == true){
    return "Yes";
}else{
    return "No";
} 

}
console.log(boolToWord(true));

// Manera más corta de hacerlo con un Operador Ternario
function boolToWord( bool ){
 return bool ? "Yes" : "No";  
}

console.log(boolToWord(true));

