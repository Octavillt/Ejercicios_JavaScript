/*
Cada día que alquilas el auto cuesta $40. Si alquila el automóvil por 7 días o más, obtiene $ 50 
de descuento en su total. Alternativamente, si alquila el automóvil por 3 o más días, obtiene $ 20 
de descuento en su total.
*/
function rentalCarCost(d) {
  let tarifa = 40;
  let desc1 = 20;
  let desc2 = 50;
  
  if (d === 1 || d === 2) {
    return tarifa * d;
  } else if (d >= 3 && d <= 6) {
    return (tarifa * d) - desc1;
  } else if (d >= 7) {
    return (tarifa * d) - desc2;
  }
}

console.log(rentalCarCost(7)); // 230

