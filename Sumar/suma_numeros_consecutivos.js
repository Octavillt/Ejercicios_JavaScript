/*
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
*/
function summation(num) {
  let sum = 0;
  for(let i = 1; i <= num; i++){
    sum += i;
  }
    return sum;
}

console.log(summation(8));//36