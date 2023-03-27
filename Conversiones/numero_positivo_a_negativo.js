function makeNegative(num) {
  if(num == 0){
    return 0;
  }else if(num > 0){
    let numerConver =  -num;
    return numerConver;
  }else{
    return num;
  }

}
console.log(makeNegative(8)); // -8

// Otra manera de hacerlo seria

function makeNegative(num) {
 
 let numeroInver = -1 * num;
}

console.log(makeNegative(3)); //-3

// Otra manera de hacerlo seria

function makeNegative(num) {
 
 let numeroInver = -num;
}

console.log(makeNegative(7)); // -7
